'use client';
import { useEffect, useRef } from 'react';

export default function BelianskyMovingMaster() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const gl = canvas.getContext('webgl'); if (!gl) return;

    const vs = `
      attribute vec2 position;
      void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

    const fs = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float slowTime = time * 0.15; // TVOJE RYCHLOST 0.15
        
        // Mřížka (GPU kalkulace)
        vec2 grid = fract(gl_FragCoord.xy / 150.0 + slowTime);
        float line = smoothstep(0.0, 0.02, grid.x) * smoothstep(1.0, 0.98, grid.x);
        line *= smoothstep(0.0, 0.02, grid.y) * smoothstep(1.0, 0.98, grid.y);
        
        // Ledový gradient a hloubka
        vec3 iceColor = vec3(0.87, 0.97, 0.98); // E0F7FA
        vec3 navyColor = vec3(0.08, 0.08, 0.25); // 16163F
        vec3 cyanColor = vec3(0.0, 0.74, 0.83); // 00BCD4
        
        float dist = distance(uv, vec2(0.5));
        vec3 finalColor = mix(vec3(1.0), iceColor, 1.0 - line * 0.1);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (gl, type, source) => {
      const s = gl.createShader(type); gl.shaderSource(s, source); gl.compileShader(s); return s;
    };
    const program = gl.createProgram();
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(program); gl.useProgram(program);

    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos); gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const tLoc = gl.getUniformLocation(program, "time");
    const rLoc = gl.getUniformLocation(program, "resolution");

    const render = (t) => {
      canvas.width = window.innerWidth; canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(tLoc, t * 0.001);
      gl.uniform2f(rLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', zIndex: 9999 }}>
      {/* GLASS NAVBAR */}
      <nav style={{ 
        position: 'fixed', top: '30px', left: '50%', transform: 'translateX(-50%)',
        width: '85%', height: '85px', zIndex: 10001,
        background: 'rgba(158, 63, 253, 0.1)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(158, 63, 253, 0.25)', borderRadius: '20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px'
      }}>
        <div style={{ color: '#16163F', fontWeight: 900, fontSize: '28px', letterSpacing: '6px' }}>L-CODE</div>
        <div style={{ display: 'flex', gap: '60px', color: '#16163F', fontWeight: 900, fontSize: '13px', letterSpacing: '4px' }}>
          <span>STRATEGIE</span><span>KONTAKT</span>
        </div>
      </nav>

      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }}>
        {/* GPU POWERED 3D ICE TEXT */}
        <h1 style={{ 
          fontSize: '14vw', fontWeight: 900, letterSpacing: '-0.07em', lineHeight: '0.75', margin: 0, textTransform: 'uppercase',
          color: '#16163F',
          background: 'linear-gradient(180deg, #16163F 15%, #E0F7FA 40%, #ffffff 50%, #00BCD4 60%, #16163F 85%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 30px 60px rgba(0, 188, 212, 0.4)) contrast(1.3)',
          textShadow: '0 1px 0 #fff, 0 10px 30px rgba(0,0,0,0.15), 0 20px 40px rgba(0,188,212,0.2)'
        }}>
          DIGITAL<br />ARCHITECT.
        </h1>
        
        <div style={{ marginTop: '120px', display: 'flex', gap: '60px' }}>
          <button style={{ background: '#9E3FFD', color: 'white', padding: '40px 100px', fontSize: '28px', fontWeight: 900, border: 'none', borderRadius: '2px', letterSpacing: '0.4em', cursor: 'pointer', boxShadow: '0 40px 80px rgba(158, 63, 253, 0.5)' }}>DOMINOVAT</button>
          <button style={{ background: 'transparent', color: '#16163F', padding: '40px 100px', fontSize: '28px', fontWeight: 900, border: '14px solid #16163F', borderRadius: '2px', letterSpacing: '0.4em', cursor: 'pointer' }}>STACK</button>
        </div>
      </div>
    </div>
  );
}
