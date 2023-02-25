import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const value = searchParams.get('value');

  const res = await fetch(`https://milkmidi.vercel.app/api/mock?delay=1&value=${value}`, {
    next: { revalidate: 20 }, // Revalidate every 20 seconds
  });
  const data = await res.json();
  // return Response.json({ data }); // TS Error https://beta.nextjs.org/docs/routing/route-handlers
  return NextResponse.json({ data });
}
