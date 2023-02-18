import React from 'react';
import Link from 'next/link';

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed z-[9999] flex w-full items-center justify-center">
        <nav className="mt-4 flex w-11/12 space-x-2 rounded-2xl border border-solid border-gray-700 bg-gray-800 p-3 shadow-xl">
          <Link href="/" className="my-btn bg-white">
            Home
          </Link>
          <Link href="/dashboard/settings" className="my-btn bg-white">
            dashboard/settings
          </Link>
          <Link href="/dynamic-segments/123" className="my-btn bg-white">
            /dynamic-segments/123
          </Link>
          <Link href="/isr" className="my-btn bg-white">
            isr
          </Link>
          <Link href="/ssr" className="my-btn bg-white">
            ssr
          </Link>
        </nav>
      </div>
      <div className="container mx-auto pt-12">
        <div className="min-h-[100vh] rounded-3xl bg-white px-4 pt-16 md:px-8  md:pt-24">{children}</div>
      </div>
    </>
  );
};

export default RootTemplate;
