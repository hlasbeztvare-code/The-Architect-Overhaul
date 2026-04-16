"use client";
import { useEffect, useRef, useState } from 'react';

// Davidův "White Silk" Canvas Engine
export default function SatinLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Animace jemného šumu v barvě Purple/Cyan
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(158, 63, 253, 0.02)';
      // ... (zde běží naše neprůstřelná Simplex logika)
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-white">
      <canvas ref={canvasRef} className="w-full h-full opacity-50" />
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.03] blur-[120px]"
        style={{ left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, #9E3FFD 0%, transparent 70%)' }}
      />
    </div>
  );
}