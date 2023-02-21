const fetchData = (value: string) => {
  const delay = Math.random() * 2000 + 500;
  return fetch(`https://milkmidi.vercel.app/api/mock?delay=${delay}&value=${value}`, {
    cache: 'no-store',
  }).then((response) => response.json());
};

export default async function Content({ value }: { value: string }) {
  const data = await fetchData(value);
  return (
    <section data-name={value}>
      <h3>
        Response:
        {data.value}
      </h3>
    </section>
  );
}
