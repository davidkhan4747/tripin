'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslate } from '@/context/LanguageContext';
import { useEffect, useState, useMemo } from 'react';

export default function Hero() {
  const { t, raw } = useTranslate('hero');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  
  // Define the images for the slider using useMemo to prevent re-creation on each render
  const images = useMemo(() => [
    {
      src: '/images/TAShkent.jpg',
      alt: 'Tashkent, Uzbekistan'
    },
    {
      src: '/images/samarqand_uzbekistan_registan_ensemble_ruins_ee0e83fed768dc3642d67b8ed0731e97.jpg',
      alt: 'Samarkand, Uzbekistan'
    },
    {
      src: '/images/bukhara.jpg',
      alt: 'Bukhara, Uzbekistan'
    },
    {
      src: '/images/xiva.jpg',
      alt: 'Khiva, Uzbekistan'
    },
    {
      src: '/images/xiva2.jpg',
      alt: 'Khiva Old City, Uzbekistan'
    }
  ], []);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    if (!loadedImages.has(nextIndex)) {
      const img = new window.Image();
      img.src = images[nextIndex].src;
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, nextIndex]));
      };
    }
  }, [currentImageIndex, images, loadedImages]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div 
            key={image.src}
            className="absolute inset-0 w-full h-full"
            style={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: currentImageIndex === index ? 1 : 0
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-10"></div>
      </div>

      {/* Vertical Slider Indicators */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-12 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-white scale-y-100' 
                : 'bg-white/40 scale-y-75 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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

          <button
              className="bg-[#672c8e] hover:bg-[#7a3ebd] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({behavior: 'smooth'});
                }
              }}
          >
            {t('cta')}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
