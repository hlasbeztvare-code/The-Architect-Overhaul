"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Lang } from "@/lib/translations";

export default function HomeClient({ initialLang, translations }: any) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const t = translations;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    document.cookie = `beliansky-lang=${newLang}; path=/; max-age=31536000`;
    window.location.reload();
  };

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const purple = "#9e3ffd";
  const navy = "#16163F";

  return (
    <div className="relative" style={{ color: navy, overflowX: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      
      {/* ULTRA-BOLD ARCHITECTURAL NAV */}
      <nav style={{ 
        position: 'fixed', top: '0.8rem', left: '1.5rem', right: '1.5rem', zIndex: 5000, 
        background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(34px)', 
        borderRadius: '100px', border: '1px solid rgba(22, 22, 63, 0.05)', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '0.6rem 2.8rem', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.04em', textTransform: 'uppercase', color: navy }}>
            BELIANSKY<span style={{ color: purple }}>.</span>
          </div>
        </div>
        <div className="hidden lg:flex" style={{ gap: '2.5rem' }}>
            {['home', 'services', 'about', 'partners', 'cases', 'blog', 'contact'].map((key) => (
              <button key={key} onClick={() => navigateTo(key)} className="nav-link-ultra" style={{ 
                background: 'none', border: 'none', cursor: 'pointer', 
                fontSize: '15px', fontWeight: 900, textTransform: 'uppercase', 
                color: navy, opacity: 0.8
              }}>
                {t.nav[key][lang] || key}
              </button>
            ))}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {(["SK", "EN"] as Lang[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{ width: '32px', height: '32px', border: lang === l ? `1.5px solid ${purple}` : '1.5px solid rgba(22,22,63,0.1)', borderRadius: '50%', cursor: 'pointer', fontSize: '11px', fontWeight: 900, background: 'transparent', color: navy }}>{l}</button>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem', textAlign: 'center' }}>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px' }}>
            <h1 style={{ fontSize: 'min(12vw, 115px)', fontWeight: 900, lineHeight: 0.9, marginBottom: '4rem', letterSpacing: '-0.05em', color: navy }}>
              Osobný prístup experta,<br/><span style={{ color: purple }}>nie anonymita agentúry.</span>
            </h1>
            <p style={{ maxWidth: '850px', margin: '0 auto 5rem auto', fontSize: '1.6rem', fontWeight: 300, opacity: 0.7, lineHeight: 1.6, color: navy }}>{t.hero.subtitle[lang]}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                <button onClick={() => navigateTo('services')} className="btn-studio-primary">Naše služby</button>
                <button onClick={() => navigateTo('about')} className="btn-studio-secondary" style={{ color: navy, borderColor: navy }}>V čom sa odlišujeme?</button>
            </div>
            <div style={{ marginTop: '5rem', opacity: 0.1, color: navy, letterSpacing: '1em', fontSize: '10px', textTransform: 'uppercase', fontWeight: 900 }}>Dominance Under the Silk</div>
        </div>
      </section>

      {/* PARTNERS LOGO MARQUEE */}
      <section id="partners" style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.4)', overflow: 'hidden', borderTop: '1px solid rgba(0,0,0,0.03)', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
          <div className="marquee" style={{ display: 'flex', gap: '8rem', whiteSpace: 'nowrap', opacity: 0.4, fontWeight: 900, fontSize: '1.5rem', letterSpacing: '0.2em' }}>
              {[1,2,3].map(i => (
                <div key={i} style={{ display: 'flex', gap: '8rem' }}>
                    <span>META BUSINESS PARTNER</span>
                    <span>SHOPTET BRONZE</span>
                    <span>SKODA AUTO</span>
                    <span>VELO DEVELOPERS</span>
                    <span>PROTEIN.SK</span>
                </div>
              ))}
          </div>
      </section>

      {/* STATS BENTO */}
      <section style={{ padding: '100px 1.5rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {t.stats.items.map((s: any, i: number) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.05)', padding: '4rem', borderRadius: '1.5rem', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                    <div style={{ fontSize: '4.5rem', fontWeight: 900, color: navy, letterSpacing: '-0.05em' }}>{s.val}</div>
                    <div style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.3em', opacity: 0.4, marginTop: '0.5rem' }}>{s.label[lang]}</div>
                </div>
              ))}
          </div>
      </section>

      {/* ABOUT JURAJ */}
      <section id="about" style={{ padding: '160px 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '10rem', alignItems: 'center' }}>
              <div>
                  <h2 style={{ fontSize: 'min(10vw, 85px)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', marginBottom: '4rem', letterSpacing: '-0.05em', color: navy }}>Marketingom som<br/>doslova vyrastal.</h2>
                  <div style={{ fontSize: '1.3rem', color: navy, opacity: 0.8, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                      <p>{t.about.description[lang]}</p>
                      <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.5)', borderRadius: '1.5rem', borderLeft: `8px solid ${purple}`, fontStyle: 'italic', fontWeight: 500 }}>&quot;{t.about.philosophy[lang]}&quot;</div>
                  </div>
              </div>
              <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.05)', position: 'relative' }}>
                  <Image src="/juraj.png" alt="Juraj" fill style={{ objectFit: 'cover' }} />
              </div>
          </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '160px 1.5rem', background: 'rgba(255,255,255,0.3)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'min(10vw, 90px)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8rem', textAlign: 'center', letterSpacing: '-0.05em', color: navy }}>Naše Služby<span style={{ color: purple }}>.</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                  {t.services.items.map((s: any, idx: number) => (
                    <div key={idx} className="studio-card" style={{ padding: '5rem 4rem', borderRadius: '2rem', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)', backdropFilter: 'blur(5px)' }}>
                        <div style={{ color: purple, fontWeight: 900, marginBottom: '2.5rem', fontSize: '12px', letterSpacing: '0.4em' }}>[ 0{idx+1} ]</div>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '3rem', color: navy }}>{s[lang]}</h3>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '5rem', opacity: 0.6, color: navy }}>
                            {s.bullets.map((b: string, i: number) => (<li key={i} style={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}>• {b}</li>))}
                        </ul>
                        <div style={{ fontSize: '3rem', fontWeight: 900, color: navy }}>{s.price}</div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" style={{ padding: '120px 1.5rem', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
              {t.testimonials.items.map((r: any, i: number) => (
                <div key={i} style={{ padding: '6rem', background: 'rgba(255,255,255,0.4)', borderRadius: '3rem', border: '1px solid rgba(0,0,0,0.04)', backdropFilter: 'blur(15px)', boxShadow: '0 30px 60px rgba(0,0,0,0.02)' }}>
                    <div style={{ color: purple, fontWeight: 900, fontSize: '12px', letterSpacing: '0.4em', marginBottom: '3rem' }}>{r.tag[lang]}</div>
                    <p style={{ fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.6, marginBottom: '4rem', fontStyle: 'italic' }}>&quot;{r.text[lang]}&quot;</p>
                    <div style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '13px' }}>— {r.author[lang]}</div>
                </div>
              ))}
          </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" style={{ padding: '160px 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'min(10vw, 90px)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8rem', letterSpacing: '-0.05em', color: navy }}>Prípadové štúdie<span style={{ color: purple }}>.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
              <div style={{ background: navy, color: '#fff', padding: '6rem', borderRadius: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                  <div>
                      <div style={{ color: purple, fontWeight: 900, letterSpacing: '0.4em', marginBottom: '2rem' }}>PROTEIN.SK</div>
                      <h3 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '3rem' }}>Expandovali jsme do CZ s rekordným PNO.</h3>
                      <button className="btn-studio-primary">Zobraziť detaily</button>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                      <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem' }}>
                          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: purple }}>+179%</div>
                          <div style={{ opacity: 0.5, fontSize: '11px', fontWeight: 900 }}>RŮST TRŽIEB</div>
                      </div>
                      <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem' }}>
                          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: purple }}>-24%</div>
                          <div style={{ opacity: 0.5, fontSize: '11px', fontWeight: 900 }}>ÚSPORA PNO</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '160px 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '10rem', alignItems: 'center' }}>
              <div>
                  <h2 style={{ fontSize: 'min(12vw, 110px)', fontWeight: 900, lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '5rem', letterSpacing: '-0.06em', color: navy }}>Poďme to<br/><span style={{ color: purple }}>odpáliť.</span></h2>
                  <a href="mailto:juraj@beliansky.eu" style={{ fontSize: '2.5rem', fontWeight: 900, color: navy, textDecoration: 'none', borderBottom: `3px solid ${purple}`, width: 'fit-content' }}>juraj@beliansky.eu</a>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.5)', padding: '5rem', borderRadius: '2.5rem', border: '1px solid rgba(0,0,0,0.05)', backdropFilter: 'blur(10px)' }}>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                      <input type="text" placeholder="MENO" className="studio-input" />
                      <input type="email" placeholder="EMAIL" className="studio-input" />
                      <textarea placeholder="PROJEKT" rows={4} className="studio-input" style={{ resize: 'none' }}></textarea>
                      <button className="btn-studio-primary" style={{ width: '100%', padding: '1.8rem' }}>ODOSLAŤ DOPYT</button>
                  </form>
              </div>
          </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '6rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', opacity: 0.3, marginBottom: '3rem', color: navy }}>
              <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>META</span><span style={{ fontWeight: 900, fontSize: '1.2rem' }}>SHOPTET BRONZE</span><span style={{ fontWeight: 900, fontSize: '1.2rem' }}>SKODA</span>
          </div>
          <div style={{ fontSize: '10px', opacity: 0.3, letterSpacing: '0.6em', textTransform: 'uppercase', fontWeight: 900, color: navy }}>ARCHITECTURE BY L-CODE DYNAMICS // BELIANSKY © 2026</div>
      </footer>

      {/* GLOBAL STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
        .marquee { animation: marquee 40s linear infinite; }
        .studio-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.8) !important; border-color: ${purple} !important; box-shadow: 0 40px 80px rgba(0,0,0,0.04); }
        .btn-studio-primary { background: ${purple}; color: #fff; border: none; border-radius: 100px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2rem; cursor: pointer; transition: all 0.4s; box-shadow: 0 20px 40px rgba(158, 63, 253, 0.2); }
        .btn-studio-primary:hover { transform: translateY(-4px); box-shadow: 0 30px 60px rgba(158, 63, 253, 0.4); }
        .btn-studio-secondary { background: transparent; color: ${navy}; border: 2px solid ${navy}; border-radius: 100px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2rem; cursor: pointer; transition: all 0.4s; }
        .btn-studio-secondary:hover { background: ${navy}; color: #fff; transform: translateY(-4px); }
        .studio-input { background: transparent; border: none; border-bottom: 2px solid rgba(0,0,0,0.1); padding: 1.2rem 0; color: ${navy}; outline: none; font-weight: 600; transition: all 0.3s; }
        .studio-input:focus { border-color: ${purple}; }
      `}} />
    </div>
  );
}
