'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useTranslate } from '@/context/LanguageContext';

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

  const tours: Tour[] = [
    {
      id: 'tashkent-1',
      title: 'Tashkent City Tour',
      image: '/images/tashkent-tour.jpg',
      duration: '1 day',
      groupSize: '2-15',
      location: 'Tashkent',
      category: 'tashkent'
    },
    {
      id: 'valley-1',
      title: 'Fergana Valley Exploration',
      image: '/images/fergana-tour.jpg',
      duration: '3 days',
      groupSize: '2-10',
      location: 'Fergana, Andijan, Namangan',
      category: 'valley'
    },
    {
      id: 'khorezm-1',
      title: 'Ancient Khorezm',
      image: '/images/khorezm-tour.jpg',
      duration: '4 days',
      groupSize: '2-12',
      location: 'Khiva, Urgench',
      category: 'khorezm'
    }
  ];

  const categories = [
    { id: 'all', label: t('viewAll') },
    { id: 'tashkent', label: t('tashkent') },
    { id: 'valley', label: t('valley') },
    { id: 'khorezm', label: t('khorezm') }
  ];

  return (
    <section id="tours" className="py-16 bg-gray-50">
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
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <button 
                key={category.id}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white border border-blue-600 text-blue-600"
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div 
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-56">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-blue-600" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2 text-blue-600" />
                    <span>{tour.groupSize} people</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-blue-600" />
                    <span>{tour.location}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors duration-200">
                  {t('viewDetails')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-medium py-2 px-6 border border-blue-600 hover:border-transparent rounded-full transition-all duration-200">
            {t('viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
}
