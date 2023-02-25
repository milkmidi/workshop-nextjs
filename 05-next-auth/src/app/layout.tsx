import '@/styles/globals.scss';
import '@/styles/style.scss';
// import { type Session } from 'next-auth';
// import { headers } from 'next/headers';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import AuthContextWrapper from './AuthContextWrapper';
import StoreInitializer from './StoreInitializer.client';
import Avatar from './Avatar';

/* async function getSession(cookie: string): Promise<Session> {
  const response = await fetch('http://localhost:3000/api/auth/session', {
    headers: {
      cookie,
    },
  });
  const session = await response.json();
  return Object.keys(session).length > 0 ? session : null;
} */

export default async function RootLayout({ children }: React.PropsWithChildren) {
  // const session = await getSession(headers().get('cookie') ?? '');
  // console.log(session);
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <head />
      <body>
        <AuthContextWrapper session={session}>
          <nav className="p-2">
            <div className="flex rounded-lg bg-black p-2">
              <Link href="/" className="my-btn bg-white">
                Home
              </Link>
              <Link href="/dashboard" className="my-btn bg-white">
                Dashboard
              </Link>
              <div className="ml-auto">
                <Avatar />
              </div>
            </div>
          </nav>
          <StoreInitializer user={session?.user} />
          {children}
        </AuthContextWrapper>
      </body>
    </html>
  );
}
