'use client';

import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data } = useSession();
  if (!data) {
    return null;
  }
  const user = data?.user;
  return (
    <div className="container mx-auto flex justify-center py-3">
      <div className="card bg-white p-2">
        <div className="card-body">
          <div className="card-header">
            <p className="text-2xl">Current Logged In User</p>
          </div>
          <h5>{user?.name}</h5>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
