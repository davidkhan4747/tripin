'use client';

import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import PaymentQR from '@/components/PaymentQR';

// Динамический импорт тяжелых компонентов для уменьшения размера начального бандла
const TopRoutes = lazy(() => import('@/components/TopRoutes'));
const Tours = lazy(() => import('@/components/Tours'));
const LocationMap = lazy(() => import('@/components/LocationMap'));
const Contact = lazy(() => import('@/components/Contact'));

// Простой компонент загрузки
const Loading = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />

      <Suspense fallback={<Loading />}>
        <TopRoutes />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Tours />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <LocationMap />
      </Suspense>

    <Suspense fallback={<Loading />}>
        <PaymentQR />
    </Suspense>

      <Suspense fallback={<Loading />}>
        <Contact id="contact" />
      </Suspense>

      <Footer />
    </main>
  );
}
