'use client';

import dynamicImport from 'next/dynamic';

const BelianskyMovingMaster = dynamicImport(
  () => import('@/components/BelianskyMovingMaster'),
  { ssr: false }
);

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <BelianskyMovingMaster />
    </main>
  );
}
