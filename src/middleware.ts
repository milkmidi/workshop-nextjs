// https://nextjs.org/docs/advanced-features/middleware
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(req: NextRequest) {
  console.log(req.nextUrl);
  return NextResponse.next();
}

/* export const config = {
  matcher: ['/api/:path*'],
}; */
