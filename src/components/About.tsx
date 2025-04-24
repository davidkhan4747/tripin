'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslate } from '@/context/LanguageContext';

export default function About() {
  const { t } = useTranslate('about');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-4 aspect-h-3 relative h-[500px]">
              <Image
                src="/images/about-image.jpg"
                alt="About Trip Tour"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/30 to-transparent mix-blend-multiply rounded-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-lg font-medium">Trip Tour — {t('title')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              {t('title')}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trip Tour
            </h2>
            <div className="w-20 h-1 bg-purple-700 mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('description')}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <div className="text-purple-700 text-2xl font-bold mb-1">20+</div>
                <div className="text-gray-600">Branches</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <div className="text-purple-700 text-2xl font-bold mb-1">1000+</div>
                <div className="text-gray-600">Happy Tourists</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <div className="text-purple-700 text-2xl font-bold mb-1">50+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <div className="text-purple-700 text-2xl font-bold mb-1">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
