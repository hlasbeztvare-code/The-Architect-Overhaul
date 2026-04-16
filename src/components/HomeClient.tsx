"use client";
import SatinLayer from "./SatinLayer";
import { OwnerVault } from "./OwnerVault";

export default function HomeClient({ translations }: any) {
  return (
    <div className="relative min-h-screen">
      <SatinLayer />
      
      {/* L-CODE DYNAMICS NAVIGATION */}
      <nav className="fixed top-6 left-6 right-6 z-[5000] bg-white/60 backdrop-blur-2xl rounded-full border border-black/5 px-12 py-3 flex justify-between items-center shadow-2xl">
        <div className="font-black text-xl tracking-tighter text-[#16163F]">
          BELIANSKY<span className="text-[#9E3FFD]">.</span>
        </div>
        <div className="flex gap-6 items-center">
           <OwnerVault /> {/* Vstup jen pro majitele - DOOMSDAY READY */}
        </div>
      </nav>

      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[min(10vw,120px)] mb-12">
          Osobný prístup experta,<br/><span className="text-[#9E3FFD]">nie anonymita agentúry.</span>
        </h1>
        <button className="btn-studio-primary">Naše služby</button>
      </section>
    </div>
  );
}