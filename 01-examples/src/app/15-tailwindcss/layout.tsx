'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// @ts-ignore
const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="flex">
      <aside className="card flex w-[20%] px-2">
        {Array.from(Array(4).keys()).map((v) => {
          const idx = v + 1;
          const href = `/15-tailwindcss/example${idx}`;
          return (
            <Link
              data-active={pathname === href}
              key={v}
              href={href}
              className="btn-outline-primary btn data-active:bg-red"
            >
              example{idx}
            </Link>
          );
        })}
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
