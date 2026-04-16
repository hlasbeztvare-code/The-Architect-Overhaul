import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beliansky | Digital Architect',
  description: 'PPC, AOE & E-commerce specialista.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --wst-purple: rgb(158, 63, 253);
            --wst-navy: rgb(22, 22, 63);
            --wst-white: rgb(255, 255, 255);
          }
          
          body {
            background-color: var(--wst-white);
            color: var(--wst-navy);
            margin: 0; padding: 0;
            font-family: 'Work Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
          }

          nav {
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(20px);
            padding: 3rem 6rem; /* Brutální padding */
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 2000;
            border-bottom: 1px solid rgba(0,0,0,0.02);
          }

          .nav-links {
            display: flex;
            gap: 5rem; /* Obrovské mezery */
          }

          .nav-link {
            font-size: 14px; /* Zvětšeno */
            font-weight: 900;
            text-transform: uppercase; /* Všechno velkým! */
            letter-spacing: 0.4em; /* Rozestupy mezi písmeny */
            color: var(--wst-navy);
            text-decoration: none;
            transition: all 0.3s;
          }
          .nav-link:hover { color: var(--wst-purple); transform: scale(1.1); }

          .logo {
            font-size: 1.8rem;
            font-weight: 900;
            letter-spacing: -0.05em;
            text-transform: uppercase;
          }

          /* Tlačítka, co mají koule */
          .hero-btn {
            padding: 1.8rem 4rem;
            font-size: 16px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            border-radius: 0; /* Ostrý, moderní look */
            transition: all 0.4s;
            cursor: pointer;
          }
          .btn-purple { background: var(--wst-purple); color: white; border: none; }
          .btn-outline { background: transparent; color: var(--wst-navy); border: 3px solid var(--wst-navy); }
          .hero-btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        ` }} />
      </head>
      <body>
        <nav>
          <div className="logo">BELIANSKY<span style={{color: 'var(--wst-purple)'}}>.</span></div>
          <div className="nav-links">
            <a href="#work" className="nav-link">PROJEKTY</a>
            <a href="#services" className="nav-link">SLUŽBY</a>
            <a href="#about" className="nav-link">O MNĚ</a>
            <a href="#contact" className="nav-link">KONTAKT</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
