import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SecurityKernel } from '@/kernel/SecurityKernel';
import { LanguageKernel } from '@/kernel/LanguageKernel';
import SatinLayer from '@/components/SatinLayer';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '900'] });

export const metadata: Metadata = {
  title: 'Beliansky | Digital Architect',
  description: 'Proklientský přístup, který Wix nikdy nepochopí. PPC, AOE & E-commerce specialista.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            margin: 0;
            padding: 0;
            background: #f8f9fa; /* Light Silk Surface Protocol */
            color: #16163F;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
          }
          ::selection { background: #9E3FFD; color: #fff; }
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.05); border-radius: 10px; }
        ` }} />
      </head>
      <body className={inter.className}>
        <SecurityKernel>
          <LanguageKernel>
            <main style={{ position: 'relative', zIndex: 10 }}>
              {children}
            </main>
            <SatinLayer />
          </LanguageKernel>
        </SecurityKernel>
      </body>
    </html>
  );
}
