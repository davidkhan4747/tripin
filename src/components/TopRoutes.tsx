'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslate } from '@/context/LanguageContext';

type CityInfo = {
  name: string;
  image: string;
  slug: string;
};

export default function TopRoutes() {
  const { t } = useTranslate('routes');
  
  const cities: Record<string, CityInfo> = {
    samarkand: {
      name: t('cities.samarkand'),
      image: '/images/samarqand.jpg',
      slug: 'samarkand'
    },
    bukhara: {
      name: t('cities.bukhara'),
      image: '/images/bukhara.jpg',
      slug: 'bukhara'
    },
    khiva: {
      name: t('cities.khiva'),
      image: '/images/xiva.jpg',
      slug: 'khiva'
    },
    tashkent: {
      name: t('cities.tashkent'),
      image: '/images/tashkent.jpg',
      slug: 'tashkent'
    },
    shahrisabz: {
      name: t('cities.shahrisabz'),
      image: '/images/shaxrisabz.jpg',
      slug: 'shahrisabz'
    },
    karshi: {
      name: t('cities.karshi'),
      image: '/images/qarshi.jpg',
      slug: 'karshi'
    },
    termez: {
      name: t('cities.termez'),
      image: '/images/termiz.jpg',
      slug: 'termez'
    },
    moynaq: {
      name: t('cities.moynaq'),
      image: '/images/maynoq.jpg',
      slug: 'moynaq'
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="routes" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.values(cities).map((city) => (
            <motion.div 
              key={city.slug}
              className="group relative overflow-hidden rounded-lg shadow-lg h-64"
              variants={item}
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                <button className="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition-all duration-200">
                  {t('viewDetails')}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
