import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root { --p: #9E3FFD; --n: #16163F; --bg: #ffffff; }
          body { 
            margin: 0; padding: 0; font-family: 'Work Sans', sans-serif; 
            background: var(--bg); color: var(--n); overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
          }
          nav {
            position: fixed; top: 0; width: 100%; z-index: 2000;
            background: rgba(255,255,255,0.9); backdrop-filter: blur(25px);
            padding: 3.5rem 6rem; display: flex; justify-content: space-between; align-items: center;
            border-bottom: 1px solid rgba(0,0,0,0.02);
          }
          .nav-link {
            font-size: 14px; font-weight: 900; text-transform: uppercase;
            letter-spacing: 0.5em; color: var(--n); text-decoration: none;
            transition: 0.3s;
          }
          .logo { font-size: 2.2rem; font-weight: 900; letter-spacing: -0.05em; }
        ` }} />
      </head>
      <body>
        <nav>
          <div className="logo">BELIANSKY<span style={{color: 'var(--p)'}}>.</span></div>
          <div style={{ display: 'flex', gap: '6rem' }}>
            <a href="#work" className="nav-link">PROJEKTY</a>
            <a href="#services" className="nav-link">STRATÉGIA</a>
            <a href="#contact" className="nav-link">KONTAKT</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
