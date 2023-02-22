'use client';

import React from 'react';
import { useSession } from 'next-auth/react';

const DashBoard = () => {
  const { data } = useSession();
  return (
    <section data-name="Dashboard">
      <h1>{data?.user?.name}</h1>
    </section>
  );
};

export default DashBoard;
