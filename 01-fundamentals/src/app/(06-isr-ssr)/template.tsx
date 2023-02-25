'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Template = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <>
      <div className="mb-2">
        <Link className="my-btn" href="/isr" data-active={pathname === '/isr'}>
          isr
        </Link>
        <Link className="my-btn" href="/ssr" data-active={pathname === '/ssr'}>
          ssr
        </Link>
      </div>
      {children}
    </>
  );
};
export default Template;
