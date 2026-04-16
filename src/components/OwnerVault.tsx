"use client";

import { useState } from "react";
import { EncryptionEngine } from "@/lib/EncryptionEngine";

export function OwnerVault() {
  const [isOpen, setIsOpen] = useState(false);
  const [ghostKey, setGhostKey] = useState("");
  const [vaultData, setVaultData] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  // Hardcoded zašifrovaný payload (v reálu to přijde z DB)
  // Obsahuje cenné leady a statistiky
  const ENCRYPTED_PAYLOAD = "VGFkeSBieSBieWwgYmFzZTY0IHphxaFpZnJvdmFuw70gcGF5bG9hZA==";

  const handleUnlock = async () => {
    if (!ghostKey) return;

    setIsLocked(true); // Aktivace L-CODE DOOMSDAY obrany během výpočtu
    const decrypted = await EncryptionEngine.decryptVault(ENCRYPTED_PAYLOAD, ghostKey);

    if (decrypted) {
      setVaultData(decrypted);
      setGhostKey(""); // Okamžité zametení klíče z RAM
    } else {
      // OPACITY LOCK - Špatný klíč
      alert("L-CODE GUARDIAN: Přístup odepřen. *smrk*");
      setGhostKey("");
    }
    setIsLocked(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-link-ultra text-[#9E3FFD] flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-[#9E3FFD] animate-pulse"></span>
        VAULT
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 w-80 bg-white/90 backdrop-blur-3xl border border-black/10 rounded-2xl p-6 shadow-2xl shadow-black/10 z-[6000]">
          <div className="text-xs font-black tracking-widest text-[#16163F] mb-4 flex justify-between items-center">
            <span>L-CODE GUARDIAN</span>
            <span className="text-[#9E3FFD]">v2.0</span>
          </div>

          {!vaultData ? (
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Ghost Key..."
                value={ghostKey}
                onChange={(e) => setGhostKey(e.target.value)}
                disabled={isLocked}
                className="w-full bg-black/5 border-none rounded-lg p-3 text-sm font-black text-[#16163F] outline-none focus:ring-2 focus:ring-[#9E3FFD]"
              />
              <button
                onClick={handleUnlock}
                disabled={isLocked}
                className="w-full bg-[#16163F] text-white rounded-lg p-3 text-xs font-black tracking-widest uppercase hover:bg-[#9E3FFD] transition-colors"
              >
                {isLocked ? 'DECRYPTING...' : 'UNLOCK'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-xs font-mono text-green-700">
                // DECRYPTED SECRETS //
                <br />Leady: 14 novych
                <br />Konverze: +24%
              </div>
              <button
                onClick={() => { setVaultData(null); setIsOpen(false); }}
                className="w-full bg-red-500/10 text-red-600 rounded-lg p-3 text-xs font-black tracking-widest uppercase hover:bg-red-500 hover:text-white transition-colors"
              >
                FLUSH & LOCK
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}