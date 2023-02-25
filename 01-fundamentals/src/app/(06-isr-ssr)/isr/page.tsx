export const revalidate = 20; // revalidate this page every 20 seconds

async function fetchData() {
  console.log('isr fetchData');
  const res = await fetch(`https://milkmidi.vercel.app/api/mock?delay=500&value=ISR&_d_=${Date.now()}`, {
    next: { revalidate: 20 }, // 或是在這寫也可以
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
