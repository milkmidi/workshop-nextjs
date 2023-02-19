'use client';

import { apiMe } from '@/libs/api/authApi';
import useSWR from 'swr';

const ClientPage = () => {
  const { data } = useSWR('api/me', apiMe);
  return (
    <section data-name="ClientPage">
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};

export default ClientPage;
