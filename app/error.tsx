"use client";

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Something went wrong!</h1>
          <p className="text-gray-600 mb-4">
            An unexpected error occurred. Please try refreshing the page or go back to the homepage.
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 font-mono bg-gray-100 p-2 rounded">
              Error ID: {error.digest}
            </p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700 transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 text-gray-700 px-6 py-3 font-medium hover:border-red-600 hover:text-red-600 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
