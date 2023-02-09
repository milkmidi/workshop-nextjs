export const revalidate = 15; // revalidate this page every 60 seconds

async function fetchData() {
  console.log('isr fetchData');
  const res = await fetch(`https://nextjs-vercel-milkmidi.vercel.app/api/mock?delay=500&value=ISR`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

const ISRPage = async () => {
  const data = await fetchData();
  return (
    <div>
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};
export default ISRPage;
