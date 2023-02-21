'use client';

import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';

type AuthContextWrapperProps = {
  children: React.ReactNode;
  session?: Session;
};
export default function AuthContextWrapper({ children, session }: AuthContextWrapperProps) {
  // console.log('AuthContextWrapper', session);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
