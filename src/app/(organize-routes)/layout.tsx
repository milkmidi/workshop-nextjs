import React from 'react';
import Link from 'next/link';
// @ts-ignore
const Layout = ({ children }) => {
  return (
    <div>
      <div className="rounded-lg bg-red p-3">
        <Link href="/a" className="my-btn">
          a
        </Link>
        <Link href="/b" className="my-btn">
          b
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
