import React, { Suspense } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section data-name="ssr - layout" className="style-3 container mx-auto space-y-9" data-stripes>
      <div className=" whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-xl text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <Suspense fallback={<div>LOADING</div>}>{children}</Suspense>
    </section>
  );
};
export default Layout;
