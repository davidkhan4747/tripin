'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  
  // Extract locale from pathname
  const locale = pathname.split('/')[1];

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
      <h2 className="text-3xl font-semibold mb-6">Something went wrong!</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        We apologize for the inconvenience. Please try again later.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
        >
          Try again
        </button>
        <Link
          href={`/${locale}`}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
