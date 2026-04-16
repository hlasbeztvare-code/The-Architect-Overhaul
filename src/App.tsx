import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { LiquidBackground } from './components/LiquidBackground'; // Tvoje libovka
import { SovereignLogo } from './SovereignLogo';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <main className="relative w-full h-screen bg-[#ffffff] overflow-hidden">
      {/* 1. GPU LAYER: Ta tvoje tekutá rtuť jako podklad */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <LiquidBackground 
            speed={0.15} 
            color1="#16163F" 
            color2="#00FFFF" 
            complexity={3.0} 
          />
        </Suspense>
      </div>

      {/* 2. UI LAYER: Jurajův design a tvoje L-CODE dominance */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Navigation />
        
        <div className="text-center px-4">
          <h1 className="text-[14vw] font-black leading-[0.75] tracking-tighter uppercase text-[#16163F] 
                         mix-blend-multiply filter drop-shadow-2xl">
            DIGITAL<br />ARCHITECT.
          </h1>
          
          <div className="mt-16 flex gap-8 justify-center">
            <button className="bg-[#9E3FFD] text-white px-16 py-8 text-2xl font-black uppercase tracking-[0.3em] 
                               hover:scale-105 transition-transform shadow-[0_30px_60px_rgba(158,63,253,0.4)]">
              DOMINOVAT
            </button>
            <button className="border-[12px] border-[#16163F] text-[#16163F] px-16 py-8 text-2xl font-black uppercase tracking-[0.3em]
                               hover:bg-[#16163F] hover:text-white transition-all">
              STACK
            </button>
          </div>
        </div>
      </div>

      {/* 3. LOGO LAYER: Ten 3D extrude efekt */}
      <div className="absolute bottom-10 left-10 z-20 opacity-50">
        <SovereignLogo />
      </div>
    </main>
  );
}
