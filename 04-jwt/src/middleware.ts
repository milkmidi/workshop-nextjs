// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fetchValidateToken } from './app/jwtApi';

export async function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname === '/login') {
    return NextResponse.next();
  }
  const jwtToken = request.cookies.get('JWT_TOKEN')?.value;
  const url = new URL(`/login?redirect_url=${encodeURIComponent(request.nextUrl.pathname)}`, request.url);
  if (jwtToken) {
    const result = await fetchValidateToken(jwtToken);
    if (result.status !== 'ok') {
      console.log('delete JWT_TOKEN cookie');
      const res = NextResponse.redirect(url);
      res.cookies.delete('JWT_TOKEN');
      return res;
    }
  } else {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
