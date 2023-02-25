import '@/styles/globals.scss';
import '@/styles/style.scss';
import { type Session } from 'next-auth';
import { headers } from 'next/headers';
import Link from 'next/link';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../pages/api/auth/[...nextauth]';
import AuthContextWrapper from './AuthContextWrapper';
import StoreInitializer from './StoreInitializer.client';

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch('http://localhost:3000/api/auth/session', {
    headers: {
      cookie,
    },
  });
  const session = await response.json();
  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession(headers().get('cookie') ?? '');
  // console.log(session);
  // const session2 = await getServerSession(authOptions);
  // console.log(session2);
  return (
    <html lang="en">
      <head />
      <body>
        <nav className="bg-black p-2">
          <Link href="/dashboard" className="my-btn bg-white">
            Dashboard
          </Link>
        </nav>
        {/* @ts-ignore */}
        <StoreInitializer user={session?.user} />
        <AuthContextWrapper session={session}>{children}</AuthContextWrapper>
      </body>
    </html>
  );
}
