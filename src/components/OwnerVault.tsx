"use client";

import { useState } from "react";
import { useSecurity } from "@/kernel/SecurityKernel";

export function OwnerVault() {
  const { isAuthorized } = useSecurity();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAccess = () => {
    setLoading(true);
    setTimeout(() => {
      setContent("L-CODE_GUARDIAN_STREAMS_ACTIVE // PRE-ENCRYPTION_LAYER_ARMED");
      setLoading(false);
    }, 800);
  };

  if (!isAuthorized) return null;

  return (
    <div className="mt-8 w-full max-w-md rounded-md border border-[#00e5ff] bg-black p-6 text-xs font-mono shadow-2xl shadow-[#00e5ff]/10 text-white">
      <div className="flex items-center justify-between gap-2 text-[#00e5ff]">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${loading ? "animate-ping" : ""} bg-[#00e5ff]`}></span>
          ENCRYPTED DATA STREAM
        </div>
        <button onClick={handleAccess} className="px-2 py-1 border border-[#00e5ff] hover:bg-[#00e5ff] hover:text-black transition-all uppercase">
          {content ? "Relock" : "Unlock"}
        </button>
      </div>
      <div className="mt-4 break-all text-neutral-500">
        {content ? <span className="text-white animate-in fade-in duration-500">{content}</span> : "[REDACTED // BLOB_0X8F12...]"}
      </div>
    </div>
  );
}
