import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_LOCALES = ['en', 'ru'];
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  const firstSegment = pathname.split('/')[1];
  if (firstSegment && !PUBLIC_LOCALES.includes(firstSegment)) {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
};
