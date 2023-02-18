import React from 'react';

const ISRLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section data-name="isr - layout" className="container mx-auto">
      <div className="space-y-9">
        <div className="flex justify-between">
          <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
            Last Rendered: {new Date().toLocaleTimeString()}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};
export default ISRLayout;
