import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// https://beta.nextjs.org/docs/api-reference/segment-config#fetchcache
// export const fetchCache = 'force-no-store'; // 這個不知為何無效

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('JWT_TOKEN');

  const { searchParams } = new URL(request.url);
  const value = searchParams.get('value');

  const res = await fetch(`https://milkmidi.vercel.app/api/mock?delay=1&value=${value}`, {
    // next: { revalidate: 20 }, // Revalidate every 20 seconds
    cache: 'no-store',
  });
  const data = await res.json();
  // return Response.json({ data }); // TS Error https://beta.nextjs.org/docs/routing/route-handlers
  return NextResponse.json({ ...data, token });
}
