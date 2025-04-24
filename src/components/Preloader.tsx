'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { language } = useLanguage();
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setLoading(false), 500);
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
  
  // Multilingual loading text
  const loadingText = {
    en: 'Discovering Uzbekistan...',
    ru: 'Покоряем Узбекистан...',
    uz: 'Yuklanmoqda...'
  };
  
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#672c8e]"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: 'easeInOut' }
          }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Animated circles */}
          <div className="flex justify-center items-center mb-10 relative w-40 h-40">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute rounded-full border-4 border-white/30"
                style={{
                  width: `${80 + index * 30}px`,
                  height: `${80 + index * 30}px`,
                  borderTopColor: 'white',
                  borderRightColor: index === 1 ? 'white' : 'transparent',
                  borderBottomColor: index === 2 ? 'white' : 'transparent',
                  borderLeftColor: 'transparent',
                }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 3 - index * 0.5, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: index * 0.2
                }}
              />
            ))}
          </div>
          
          {/* Progress bar */}
          <motion.div 
            className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-8"
          >
            <motion.div 
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </motion.div>
          
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 rounded-full bg-white"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
          
          <motion.p
            className="mt-8 text-white text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.5 }
            }}
          >
            {loadingText[language]}
          </motion.p>
          
          <motion.p
            className="mt-2 text-white/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.7 }
            }}
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
