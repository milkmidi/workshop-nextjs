'use client';

import React from 'react';
import { useSession } from 'next-auth/react';

const ClientComponent = () => {
  const { data } = useSession();
  return (
    <section data-name="ClientComponent">
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};

export default ClientComponent;
