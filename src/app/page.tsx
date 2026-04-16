'use client';

import dynamic from 'next/dynamic';

// Importujeme náš Master kus dynamicky - vypneme SSR, aby to nepadalo při buildu
const BelianskyMovingMaster = dynamic(
  () => import('@/components/BelianskyMovingMaster'),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <BelianskyMovingMaster />
    </main>
  );
}
