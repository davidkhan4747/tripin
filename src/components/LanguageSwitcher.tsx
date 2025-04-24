'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleLanguageChange = (lang: 'en' | 'ru' | 'uz') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const languageNames = {
    en: 'English',
    ru: 'Русский',
    uz: 'O\'zbek',
  };

  const languageCodes = {
    en: 'EN',
    ru: 'RU',
    uz: 'UZ',
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${
          scrolled
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
        }`}
      >
        <span>{languageCodes[language]}</span>
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {Object.entries(languageNames).map(([code, name]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as 'en' | 'ru' | 'uz')}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  language === code
                    ? 'bg-purple-50 text-purple-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                role="menuitem"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
