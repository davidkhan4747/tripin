'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslate } from '@/context/LanguageContext';

export default function Hero() {
  const { t, raw } = useTranslate('hero');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/uzbekistan-hero.jpg"
          alt="Uzbekistan landscapes"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-10 opacity-90">
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.entries(raw('places')).map(([key, value]) => (
              <div 
                key={key}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {value as string}
              </div>
            ))}
          </div>

          <button className="bg-[#672c8e] hover:bg-[#7a3ebd] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
            {t('cta')}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
