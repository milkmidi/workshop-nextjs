'use client';

import { useSession } from 'next-auth/react';
import { UserCard } from './userCard';

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return <UserCard user={session?.user} />;
  }
  return null;
}
