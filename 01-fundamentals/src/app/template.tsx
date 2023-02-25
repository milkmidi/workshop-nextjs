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

const RootTemplate = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="my-nav-space !h-[200px]" />
      <div className="my-nav-wrap">
        <nav className="my-nav !block !space-x-0 space-y-2">
          <div className="flex w-full flex-wrap child:w-1/5">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/01-routing-fundamentals">01-routing</ActiveLink>
            <ActiveLink href="/02-dashboard/settings">02-dashboard/settings</ActiveLink>
            <ActiveLink href="/organize-a">02-organize routes</ActiveLink>
            <ActiveLink href="/04-dynamic-segments/123">04-dynamic-segments</ActiveLink>
            <ActiveLink href="/05-error-page">05-error</ActiveLink>
            <ActiveLink href="/isr">06-isr/ssr</ActiveLink>
            <ActiveLink href="/client">07-Client/Server Component</ActiveLink>
            <ActiveLink href="/08-posts/1">08-posts</ActiveLink>
            <ActiveLink href="/09-streaming">09-streaming</ActiveLink>
            <ActiveLink href="/10-products">10-products</ActiveLink>
            <ActiveLink href="/11-todolist">11-todolist</ActiveLink>
            <ActiveLink href="/13-jwt">13-jwt</ActiveLink>
            <ActiveLink href="/14-use">14-use</ActiveLink>
          </div>
        </nav>
      </div>
      <div className="container mx-auto">
        <div className="min-h-[100vh] rounded-3xl bg-white px-6 py-10">{children}</div>
      </div>
    </>
  );
};

export default RootTemplate;
