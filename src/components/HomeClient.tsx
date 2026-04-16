"use client";

import { useState } from "react";
import SatinLayer from "./SatinLayer";
import { OwnerVault } from "./OwnerVault";

export default function HomeClient({ translations }: any) {
  const t = translations;
  const [lang] = useState("sk"); // Defaultní jazyk Juraje

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-[#9E3FFD] selection:text-white">
      
      {/* L-CODE DYNAMICS NAVIGATION - GLASSMORPHISM ON WHITE */}
      <nav className="fixed top-6 left-6 right-6 z-[5000] bg-white/70 backdrop-blur-2xl rounded-full border border-black/5 flex justify-between items-center px-12 py-4 shadow-2xl shadow-black/5">
        <div className="font-black text-2xl tracking-tighter text-[#16163F] cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          BELIANSKY<span className="text-[#9E3FFD]">.</span>
        </div>
        <div className="hidden lg:flex gap-10">
          {Object.keys(t.nav).map((key) => (
            <button key={key} onClick={() => navigateTo(key)} className="nav-link-ultra">
              {t.nav[key][lang]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-6">
           <OwnerVault />
        </div>
      </nav>

      {/* HERO - PURE WHITE DOMINANCE */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl z-10">
          <h1 className="text-[min(9vw,110px)] mb-10 leading-[0.9] text-[#16163F]">
            {t.hero.title[lang].split(',')[0]},<br/>
            <span className="text-[#9E3FFD]">{t.hero.title[lang].split(',')[1]}</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-14 text-xl md:text-2xl font-medium text-[#16163F]/60 leading-relaxed">
            {t.hero.subtitle[lang]}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => navigateTo('services')} className="btn-studio-primary px-12 py-6">Chci růst</button>
            <button onClick={() => navigateTo('about')} className="btn-studio-secondary px-12 py-6">Proč já?</button>
          </div>
        </div>
      </section>

      {/* STATS - DATA VIVID LAYER */}
      <section className="py-32 bg-[#16163F]/[0.02] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {t.stats.map((stat: any, i: number) => (
            <div key={i} className="text-center group">
              <div className="text-6xl font-black text-[#16163F] mb-2 group-hover:text-[#9E3FFD] transition-colors duration-500">{stat.value}</div>
              <div className="text-xs font-black uppercase tracking-[0.3em] text-[#16163F]/40">{stat.label[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES - GOLIÁŠ ARCHITECTURE */}
      <section id="services" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <h2 className="text-7xl md:text-9xl tracking-tighter">Služby<span className="text-[#9E3FFD]">.</span></h2>
          <p className="max-w-md text-right font-bold text-[#16163F]/50 uppercase tracking-widest text-sm">
            Strategie, které Wix nikdy nepochopí. *smrk*
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((s: any, idx: number) => (
            <div key={idx} className="studio-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-black/[0.03] group-hover:text-[#9E3FFD]/10 transition-colors">0{idx+1}</div>
              <h3 className="text-3xl mb-8 pr-12 group-hover:text-[#9E3FFD] transition-colors">{s[lang]}</h3>
              <ul className="space-y-4 mb-12 text-[#16163F]/60 font-semibold">
                {s.bullets.map((b: string, i: number) => (<li key={i} className="flex gap-3"><span>•</span> {b}</li>))}
              </ul>
              <div className="pt-8 border-t border-black/5 flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-widest opacity-30">Investice</span>
                <span className="text-3xl font-black text-[#16163F]">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER - THE FINAL SWEEP */}
      <footer className="py-20 px-6 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-black tracking-[0.6em] uppercase text-[#16163F]/30 text-center md:text-left">
            {t.footer.copyright}
          </div>
          <div className="flex gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Tady by byly loga partnerů */}
             <span className="font-black text-xs tracking-widest text-[#16163F]">{t.footer.tagline}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}