'use client';

import { use } from 'react';

async function getData() {
  // You would usually fetch data from an API here.
  console.log('dashboard-client getData');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { next: { revalidate: 60 } });
  const data = await res.json();

  // return data; // 這樣寫會無限回圈
  // return `Dashboard data in Client Components, ${data.title}`;
  return JSON.stringify(data);
}

const Page = () => {
  const name = use(getData());
  return (
    <section data-name="use" className="style-green">
      {name}!
    </section>
  );
};
export default Page;
