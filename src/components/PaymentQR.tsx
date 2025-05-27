'use client';

import Image from 'next/image';
import { FaQrcode } from 'react-icons/fa';

const PaymentQR = () => {
  return (
    <section id="payment" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-100 text-center max-w-sm w-full transform transition-transform hover:scale-105 duration-300">
            <div className="absolute -top-5 -right-5 bg-purple-600 text-white rounded-full p-3">
              <FaQrcode className="h-6 w-6" />
            </div>
            
            <div className="p-2 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 mb-4">
              <Image 
                src="/qr.png" 
                alt="Payment QR Code" 
                width={300} 
                height={300}
                className="object-contain rounded-lg"
              />
            </div>
            
            <p className="mt-4 text-gray-700 font-medium text-lg">
              Отсканируйте QR для оплаты
            </p>
            
            <div className="mt-3 flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentQR;
