'use client';

import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'uz';

interface TranslationValue {
  [key: string]: string | TranslationValue;
}

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, TranslationValue>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('uz');
  const [translations, setTranslations] = useState<Record<string, TranslationValue>>({});

  // Load translations based on the current language
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translations = await import(`../messages/${language}.json`);
        setTranslations(translations.default || {});
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, [language]);

  // Initialize language from cookie or default to 'uz'
  useEffect(() => {
    const savedLanguage = Cookies.get('language') as Language;
    if (savedLanguage && ['en', 'ru', 'uz'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Function to change language and save to cookie
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    Cookies.set('language', lang, { expires: 365 }); // Save for 1 year
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper function to get translations
export function useTranslate(section: string) {
  const { translations } = useLanguage();
  
  return {
    t: (key: string) => {
      const keys = key.split('.');
      let value = translations[section] as TranslationValue | undefined;
      
      for (const k of keys) {
        if (!value) return key;
        value = value[k] as TranslationValue;
      }
      
      return (typeof value === 'string' ? value : key);
    },
    raw: (key?: string) => {
      if (!key) return translations[section] || {};
      
      const keys = key.split('.');
      let value = translations[section] as TranslationValue | undefined;
      
      for (const k of keys) {
        if (!value) return {};
        value = value[k] as TranslationValue;
      }
      
      return value || {};
    }
  };
}
