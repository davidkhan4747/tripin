'use client';

import Link from 'next/link';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useTranslate } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useTranslate('footer');
  const navT = useTranslate('navigation');

  const navItems = [
    { href: '/', label: navT.t('home') },
    { href: '#about', label: navT.t('about') },
    { href: '#routes', label: navT.t('routes') },
    { href: '#tours', label: navT.t('tours') },
    { href: '#map', label: navT.t('map') },
    { href: '#contact', label: navT.t('contact') },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('company')}</h3>
           
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tripincome.uz?igsh=MTVvZ2hyaDhnaDFyYQ==" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/*<div>*/}
          {/*  <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>*/}
          {/*  <ul className="space-y-2">*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">*/}
          {/*        Samarkand*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">*/}
          {/*        Bukhara*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">*/}
          {/*        Khiva*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">*/}
          {/*        Tashkent*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">*/}
          {/*        Fergana Valley*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">{t('address')}</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="h-6 w-6 text-gray-400 mr-3 mt-1" />
                <div className="text-gray-400">
                  <div>{t('phone')}</div>
                  <div>{t('phone2')}</div>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="h-6 w-6 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">{t('email')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} {t('company')}. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
