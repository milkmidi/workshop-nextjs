import React from 'react';

// @ts-ignore
function StreamLayout({ children }) {
  return (
    <section data-name="DashboardPage" className="container mx-auto">
      <h1 className="text-3xl">StreamLayout</h1>
      {children}
    </section>
  );
}

export default StreamLayout;
