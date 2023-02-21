import React from 'react';

const ISRLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section data-name="isr - layout" className="container mx-auto space-y-9">
      <div className=" whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-xl text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      {children}
    </section>
  );
};
export default ISRLayout;
