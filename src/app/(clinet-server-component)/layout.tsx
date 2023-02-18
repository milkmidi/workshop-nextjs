import Link from 'next/link';
import React from 'react';

// @ts-ignore
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Link className="button" href="/client">
          Client
        </Link>
        <Link className="button" href="/server">
          server
        </Link>
      </div>
      {children}
    </>
  );
};

export default Layout;
