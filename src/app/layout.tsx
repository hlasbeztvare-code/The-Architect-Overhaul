"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { SecurityKernel } from "@/kernel/SecurityKernel";
import { LanguageKernel } from "@/kernel/LanguageKernel";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0d0d0d]">
      <body className={`${inter.className} min-h-screen antialiased selection:bg-[#00e5ff] selection:text-[#0d0d0d]`}>
        <SecurityKernel>
          <LanguageKernel>
            {children}
          </LanguageKernel>
        </SecurityKernel>
      </body>
    </html>
  );
}
