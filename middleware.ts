import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Middleware now only used for logging and future server-side checks
  // Client-side ProtectedRoute component handles authentication
  // This allows Supabase to use localStorage which is more reliable for client auth

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.pdf|.*\\.csv).*)',
  ],
};
