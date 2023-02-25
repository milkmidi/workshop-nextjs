'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { UserCard } from './userCard';

export default function Login() {
  // get session from nextAuth
  const { data: session } = useSession();
  // console.log('session', session);
  // useSession uses React Context
  // if the user exists -> show a Sign Out button and their information
  if (session) {
    return (
      <>
        <button onClick={() => signOut()} type="button" className="btn-primary btn">
          Sign Out
        </button>
        {/* Pass session info to server component */}
        <UserCard user={session?.user} />
      </>
    );
  }
  return (
    <button onClick={() => signIn()} type="button" className="btn-primary btn">
      Sign In
    </button>
  );

  // if a user doesn't exist -> show a Sign In button
}
