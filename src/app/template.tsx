'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className="my-nav__item" data-active={pathname === href}>
      {children}
    </Link>
  );
};

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="my-nav-space" />
      <div className="my-nav-wrap">
        <nav className="my-nav">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/dashboard/settings">dashboard/settings</ActiveLink>
          <ActiveLink href="/dynamic-segments/123">/dynamic-segments/123</ActiveLink>
          <ActiveLink href="/isr">isr</ActiveLink>
          <ActiveLink href="/ssr">ssr</ActiveLink>
          <ActiveLink href="/products">products</ActiveLink>
          <ActiveLink href="/todolist">todolist</ActiveLink>
          <ActiveLink href="/jwt">jwt</ActiveLink>
        </nav>
      </div>
      <div className="container mx-auto">
        <div className="min-h-[100vh] rounded-3xl bg-white px-6 py-10">{children}</div>
      </div>
    </>
  );
};

export default RootTemplate;
