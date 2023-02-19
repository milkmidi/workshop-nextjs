async function fetchData() {
  console.log('ssr fetchData');
  const res = await fetch(`https://milkmidi.vercel.app/api/mock?delay=800&value=SSR&_d_=${Date.now()}`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

const SSRPage = async () => {
  const data = await fetchData();
  return (
    <div>
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};
export default SSRPage;
