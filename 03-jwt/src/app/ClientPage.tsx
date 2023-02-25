'use client';

import useAppStore from '@/store/useAppStore';

const ClientPage = () => {
  const user = useAppStore((state) => state.user);
  return (
    <section data-name="ClientPage" className="style-2">
      <div className="my-code">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </section>
  );
};

export default ClientPage;
