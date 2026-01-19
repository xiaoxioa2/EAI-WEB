import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protected portal routes - require authentication
  const portalRoutes = [
    '/dashboard',
    '/profile',
    '/founder_login',
    '/mentor_portal',
    '/investor_portal',
    '/admin',
  ];

  // Check if current path is a portal route
  const isPortalRoute = portalRoutes.some(route => path.startsWith(route));

  // Skip middleware for non-portal routes
  if (!isPortalRoute) {
    return NextResponse.next();
  }

  // Get auth token from cookies
  const accessToken = request.cookies.get('sb-access-token')?.value;
  const refreshToken = request.cookies.get('sb-refresh-token')?.value;

  // Redirect unauthenticated users to login
  if (!accessToken) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirectTo', path);
    return NextResponse.redirect(redirectUrl);
  }

  // For role-based access control, we'll rely on client-side checks
  // and database RLS policies since middleware should be lightweight
  // The ProtectedRoute component handles detailed role checks

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.pdf|.*\\.csv).*)',
  ],
};
