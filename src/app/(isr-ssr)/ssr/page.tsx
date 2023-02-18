async function fetchData() {
  console.log('ssr fetchData');
  const res = await fetch(`https://milkmidi.vercel.app/api/mock?delay=1000&value=SSR&_d_=${Date.now()}`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

const SSRPage = async () => {
  const data = await fetchData();
  return (
    <div>
      <h1>Hello, Next.js!, SSR, {new Date().toLocaleTimeString()}</h1>
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};
export default SSRPage;
