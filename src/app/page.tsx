"use client";

import { useLanguage } from "@/kernel/LanguageKernel";
import { translations, Lang } from "@/lib/translations";

export default function Home() {
  const { lang, isLoading, setLang } = useLanguage();
  const t = translations;

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0d0d0d]">
        <div className="animate-pulse font-mono text-[#00e5ff] text-xs tracking-[0.5em] uppercase">
          PROBING REGIONAL IDENTITY...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#f5f5f5] selection:bg-[#00e5ff] selection:text-[#0d0d0d]">
      
      {/* GLOBAL NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 p-6 z-[100] flex justify-between items-center bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5">
        <div className="font-black text-xl tracking-tighter uppercase">
          BELIANSKY<span className="text-[#00e5ff]">.</span>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-3 font-mono text-[10px] uppercase border-l border-white/10 pl-6">
            {(["SK", "EN", "GA"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`transition-all ${lang === l ? "text-[#00e5ff] font-bold" : "opacity-30 hover:opacity-100"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.08),transparent_70%)] pointer-events-none"></div>
        <h1 className="z-10 text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase text-balance max-w-[15ch]">
          {t.hero.title[lang]}
        </h1>
        <p className="z-10 mt-8 max-w-xl text-lg font-light opacity-50 text-balance lg:text-xl leading-relaxed">
          {t.hero.subtitle[lang]}
        </p>
      </section>

      {/* PORTFOLIO */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-center">
          {t.portfolio.title[lang]}
        </h2>
        <div className="grid gap-16 grid-cols-1 md:grid-cols-1 justify-items-center">
            {t.portfolio.clients.map((client: any, idx) => (
              <div key={idx} className="group cursor-pointer max-w-2xl w-full">
                <div className="aspect-video bg-neutral-900 border border-white/5 mb-8 grayscale group-hover:grayscale-0 transition-all overflow-hidden flex items-center justify-center relative">
                  <span className="font-mono text-[10px] opacity-10 uppercase tracking-[1em]">CASE_STUDY_PRO_CODE</span>
                  {client.metrics && (
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-[#00e5ff] text-[#0d0d0d] font-mono text-[10px] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {client.metrics[lang]}
                    </div>
                  )}
                </div>
                <h3 className="text-3xl font-bold uppercase mb-4">{client.name}</h3>
                <p className="opacity-50 font-light">{client.desc[lang]}</p>
              </div>
            ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-8 border-t border-white/5 text-[10px] font-mono opacity-20 flex justify-between uppercase tracking-widest">
         <div>© 2026 BELIANSKY®</div>
         <div>CLEAN_CODE_SWEEP_DONE // L-CODE GUARDIAN</div>
      </footer>
    </main>
  );
}
