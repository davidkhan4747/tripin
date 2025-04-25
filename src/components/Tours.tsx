'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useTranslate } from '@/context/LanguageContext';
import TourModal from './TourModal';

type Tour = {
  id: string;
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  location: string;
  category: string;
};

export default function Tours() {
  const { t } = useTranslate('tours');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTour(null), 300); // Задержка для анимации закрытия
  };

  const tours: Tour[] = [
    {
      id: 'tashkent-1',
      title: t('tashkentCityTour'),
      image: '/images/tashkent.jpg',
      duration: t('oneDay'),
      groupSize: t('twoToFifteen'),
      location: t('tashkent'),
      category: 'tashkent'
    },
    {
      id: 'samarkand-1',
      title: t('samarkandHistoricalTour'),
      image: '/images/samarqand.jpg',
      duration: t('twoDays'),
      groupSize: t('twoToTwelve'),
      location: t('samarkand'),
      category: 'samarkand'
    },
    {
      id: 'khorezm-1',
      title: t('ancientKhorezm'),
      image: '/images/xiva.jpg',
      duration: t('fourDays'),
      groupSize: t('twoToTwelve'),
      location: t('khivaUrgench'),
      category: 'khorezm'
    }
  ];

  const categories = [
    { id: 'all', label: t('viewAll') },
    { id: 'tashkent', label: t('tashkent') },
    { id: 'samarkand', label: t('samarkand') },
    { id: 'khorezm', label: t('khorezm') }
  ];

  return (
    <section id="tours" className="py-16 bg-white">
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
          <div className="w-20 h-1 bg-[#672c8e] mx-auto mb-6"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-[#672c8e] transition-colors duration-200"
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="mr-2 text-[#672c8e]" />
                  <span>{tour.location}</span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1 text-[#672c8e]" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1 text-[#672c8e]" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => openModal(tour)}
                  className="w-full py-2 bg-[#672c8e] hover:bg-[#7a3ebd] text-white rounded-md transition-colors duration-200"
                >
                  {t('viewDetails')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white border border-[#672c8e] text-[#672c8e] hover:bg-purple-50 rounded-full transition-colors duration-200">
            {t('viewAll')}
          </button>
        </div>
      </div>

      {selectedTour && (
        <TourModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          tourName={selectedTour.title} 
        />
      )}
    </section>
  );
}
