import React, { Suspense } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section data-name="ssr - layout" className="container mx-auto">
      <Suspense fallback={<div>LOADING</div>}>{children}</Suspense>
    </section>
  );
};
export default Layout;
