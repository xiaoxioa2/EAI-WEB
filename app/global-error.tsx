"use client";

import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="mb-8">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Error</h1>
              <p className="text-gray-600 mb-4">
                A critical error occurred. Please refresh the page to continue.
              </p>
              {error.digest && (
                <p className="text-sm text-gray-500 font-mono bg-gray-100 p-2 rounded">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
            
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700 transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
