/* eslint-disable react/function-component-definition */
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">hi, NextJS 13</h1>
      <Link href="/about">About Page</Link>
    </main>
  );
}
