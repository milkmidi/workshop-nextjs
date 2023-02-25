'use client';

import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Avatar = () => {
  const { data } = useSession();
  if (!data) {
    return (
      <div>
        <button onClick={() => signIn()} type="button" className="btn-primary btn">
          Sign In
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="avatar-ring-primary avatar-squared avatar truncate">
        <div>{data?.user?.name}</div>
      </div>
      <button
        className="btn"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Avatar;
