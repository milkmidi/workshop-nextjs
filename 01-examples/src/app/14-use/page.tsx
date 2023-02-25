'use client';

// Reference https://www.youtube.com/watch?v=zwQs4wXr9Bg

import { use } from 'react';

async function fetchData() {
  // You would usually fetch data from an API here.
  console.log('fetchData');
  const res = await fetch('https://milkmidi.vercel.app/api/healthy');
  const data = await res.json();
  return data; // !!!!!!!!!! Warning, Infinite Loop
  // return JSON.stringify(data); // Method 1
}

// Method 2
const dataPromise = fetchData();

const Page = () => {
  // const result = use(fetchData()); // Method1
  const result = use(dataPromise); // Method2
  return (
    <section data-name="use" className="style-green">
      <div className="my-code">
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </section>
  );
};
export default Page;
