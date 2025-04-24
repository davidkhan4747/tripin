'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LocationMap from '@/components/LocationMap';
import Navbar from '@/components/Navbar';
import TopRoutes from '@/components/TopRoutes';
import Tours from '@/components/Tours';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TopRoutes />
      <Tours />
      <LocationMap />
      <Contact />
      <Footer />
    </main>
  );
}
