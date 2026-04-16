import React from 'react';
import HomeClient from '@/components/HomeClient';
import { translations } from '@/lib/translations';

export default function Home() {
  return (
    <HomeClient translations={translations} />
  );
}
