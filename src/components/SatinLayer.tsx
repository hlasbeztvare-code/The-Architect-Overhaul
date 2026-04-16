"use client";

import { useEffect, useRef, useState } from 'react';

// Simplex Noise pro organické vlnění (300% stabilita)
class SimplexNoise {
  private perm: number[] = [];
  constructor() {
    const p = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    this.perm = [...p, ...p];
  }
  private grad(hash: number, x: number, y: number): number {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  }
  noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255; const Y = Math.floor(y) & 255;
    x -= Math.floor(x); y -= Math.floor(y);
    const u = x * x * x * (x * (x * 6 - 15) + 10);
    const v = y * y * y * (y * (y * 6 - 15) + 10);
    const A = this.perm[X] + Y; const B = this.perm[X + 1] + Y;
    return this.lerp(this.lerp(this.grad(this.perm[A], x, y), this.grad(this.perm[B], x - 1, y), u),
      this.lerp(this.grad(this.perm[A + 1], x, y - 1), this.grad(this.perm[B + 1], x - 1, y - 1), u), v);
  }
  private lerp(a: number, b: number, t: number): number { return a + t * (b - a); }
}

const codeSymbols = ['API', 'GET', 'POST', 'const', '=>', 'import', 'yarn', 'git', 'λ', 'Σ', '∫', '∞', '◈', '⬢'];

export default function SatinLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textureCanvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const noiseRef = useRef(new SimplexNoise());
  const timeRef = useRef(0);
  const mouseInfluenceRef = useRef({ x: 0, y: 0, radius: 250 });

  const BELIANSKY_PURPLE = '#9E3FFD'; 
  const LIGHT_SILK = '#f8f9fa'; 

  useEffect(() => {
    const canvas = canvasRef.current;
    const textureCanvas = textureCanvasRef.current;
    if (!canvas || !textureCanvas) return;
    const ctx = canvas.getContext('2d');
    const textureCtx = textureCanvas.getContext('2d');
    if (!ctx || !textureCtx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      textureCanvas.width = window.innerWidth;
      textureCanvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawTexture = () => {
      textureCtx.clearRect(0, 0, textureCanvas.width, textureCanvas.height);
      textureCtx.fillStyle = LIGHT_SILK;
      textureCtx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);

      textureCtx.strokeStyle = 'rgba(158, 63, 253, 0.03)'; 
      textureCtx.lineWidth = 1;
      const gridSize = 60;

      for (let x = 0; x <= textureCanvas.width; x += gridSize) {
        textureCtx.beginPath(); textureCtx.moveTo(x, 0); textureCtx.lineTo(x, textureCanvas.height); textureCtx.stroke();
      }
      for (let y = 0; y <= textureCanvas.height; y += gridSize) {
        textureCtx.beginPath(); textureCtx.moveTo(0, y); textureCtx.lineTo(textureCanvas.width, y); textureCtx.stroke();
      }

      textureCtx.textAlign = 'center';
      for (let i = 0; i < 40; i++) {
        const symbol = codeSymbols[i % codeSymbols.length];
        const alpha = 0.02 + (i * 0.001);
        textureCtx.font = `900 12px Inter, monospace`;
        textureCtx.fillStyle = `rgba(158, 63, 253, ${alpha})`;
        textureCtx.fillText(symbol, (i * 137) % textureCanvas.width, (i * 223) % textureCanvas.height);
      }
    };

    let animationId: number;
    const animate = () => {
      timeRef.current += 0.003;
      drawTexture();

      mouseInfluenceRef.current.x += (mousePos.x - mouseInfluenceRef.current.x) * 0.05;
      mouseInfluenceRef.current.y += (mousePos.y - mouseInfluenceRef.current.y) * 0.05;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let y = 0; y < canvas.height; y += 6) { 
        for (let x = 0; x < canvas.width; x += 6) {
          const nx = x * 0.0015;
          const ny = y * 0.0015;
          let disp = noiseRef.current.noise2D(nx + timeRef.current, ny) * 30;
          
          const dx = x - mouseInfluenceRef.current.x;
          const dy = y - mouseInfluenceRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseInfluenceRef.current.radius) {
            const power = 1 - (dist / mouseInfluenceRef.current.radius);
            disp += power * power * 50 * Math.sin(timeRef.current * 3);
          }

          const val = (disp + 60) / 120 * 255;
          for (let dy2 = 0; dy2 < 6; dy2++) {
            for (let dx2 = 0; dx2 < 6; dx2++) {
               const i2 = ((y+dy2) * canvas.width + (x+dx2)) * 4;
               if (i2 < data.length) {
                 const silkAlpha = 240 + (val * 0.05);
                 data[i2] = 230; data[i2+1] = 230; data[i2+2] = 255; data[i2+3] = 40; 
               }
            }
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationId); };
  }, [mousePos]);

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden"
      onMouseMove={(e) => { setMousePos({ x: e.clientX, y: e.clientY }); }}
      style={{ background: LIGHT_SILK, zIndex: -1 }}
    >
      <canvas ref={textureCanvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-20" style={{ filter: 'blur(10px) contrast(1.1)' }} />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-5"
        style={{
          left: mouseInfluenceRef.current.x,
          top: mouseInfluenceRef.current.y,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${BELIANSKY_PURPLE} 0%, transparent 70%)`,
          filter: 'blur(100px)',
          transition: 'left 0.1s, top 0.1s',
        }}
      />
    </div>
  );
}
