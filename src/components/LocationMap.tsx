'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslate } from '@/context/LanguageContext';
import { FaMapMarkerAlt } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamically import the Map with no SSR
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
      <p className="text-gray-600">Map is loading...</p>
    </div>
  ),
});

export default function LocationMap() {
  const { t } = useTranslate('map');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const locations = [
    {
      name: 'Tashkent',
      coordinates: [41.2995, 69.2401],
      description: 'The capital city of Uzbekistan'
    },
    {
      name: 'Samarkand',
      coordinates: [39.6542, 66.9597],
      description: 'Historic city known for Registan Square'
    },
    {
      name: 'Bukhara',
      coordinates: [39.7747, 64.4286],
      description: 'Ancient city with well-preserved architecture'
    },
    {
      name: 'Khiva',
      coordinates: [41.3775, 60.3636],
      description: 'Walled inner city with traditional buildings'
    },
    {
      name: 'Fergana',
      coordinates: [40.3883, 71.7819],
      description: 'City in the fertile Fergana Valley'
    }
  ];

  return (
    <section id="map" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('description')}</p>
        </div>
        
        <motion.div 
          className="h-96 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {isMounted && <Map locations={locations} />}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          {locations.map((location) => (
            <motion.div
              key={location.name}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-red-500 mr-2" />
                <h3 className="font-semibold">{location.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{location.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
