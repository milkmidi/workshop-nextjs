import React from 'react';
import Link from 'next/link';
// @ts-ignore
const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Link className="my-btn" href="/04-dynamic-segments/123">
          123
        </Link>
        <Link className="my-btn" href="/04-dynamic-segments/456">
          456
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
