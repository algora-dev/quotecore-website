import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for quote-core.com website.
 * All /free- routes are public (no auth required).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // All free tools routes are public
  if (pathname.startsWith('/free-')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/free-:path*'],
};
