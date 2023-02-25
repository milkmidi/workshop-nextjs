import React from 'react';

// @ts-ignore
const Layout = ({ children }) => {
  return (
    <section data-name="ISR-SSR-layout" className="container mx-auto">
      <div>{children}</div>
    </section>
  );
};

export default Layout;
