'use client';

import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';

type AuthContextWrapperProps = React.PropsWithChildren & {
  session: Session | null;
};
export default function AuthContextWrapper({ children, session }: AuthContextWrapperProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
