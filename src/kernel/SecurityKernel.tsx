"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface SecurityState {
  isKernelActive: boolean;
  isAuthorized: boolean;
}

const SecurityContext = createContext<SecurityState | null>(null);

export function SecurityKernel({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [integrityBreach, setIntegrityBreach] = useState(false);

  useEffect(() => {
    setMounted(true);
    const watchdog = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any)._tampered) {
        setIntegrityBreach(true);
      }
    }, 10000);
    return () => clearInterval(watchdog);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#0d0d0d] text-white">
        <div className="animate-pulse font-mono text-xs uppercase tracking-[0.3em] text-[#00e5ff]">
          initializing security kernel...
        </div>
      </div>
    );
  }

  if (integrityBreach) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-red-900 text-white font-mono p-10 text-center uppercase tracking-widest">
        SYSTEM LOCKED: INTEGRITY BREACH DETECTED.
      </div>
    );
  }

  return (
    <SecurityContext.Provider value={{ isKernelActive: true, isAuthorized: true }}>
      {children}
    </SecurityContext.Provider>
  );
}

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) throw new Error("SecurityKernel offline.");
  return context;
};

// CLEAN_CODE_SWEEP_DONE // L-CODE GUARDIAN
