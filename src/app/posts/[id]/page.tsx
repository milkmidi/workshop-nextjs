export const revalidate = 20; // revalidate this page every 20 seconds

type PostData = {
  id: string;
  title: string;
  image: string;
};
const fetchAllData = (): Promise<PostData[]> => {
  return fetch(
    `https://my-json-server.typicode.com/milkmidi/typicode/posts?_delay=1000&_d_=${Date.now()}`,
  ).then((res) => res.json());
};

export async function generateStaticParams() {
  const posts = await fetchAllData();

  return posts.map((post) => ({
    id: `${post.id}`,
  }));
}

const fetchDataWithId = (id: string): Promise<PostData> => {
  return fetch(
    `https://my-json-server.typicode.com/milkmidi/typicode/posts/${id}?_delay=1000&_d_=${Date.now()}`,
  ).then((res) => res.json());
};

type PageProps = {
  params: Record<'id', string>;
};
export default async function PostPage({ params }: PageProps) {
  const { id } = params;
  const data = await fetchDataWithId(id);
  return (
    <section data-name={`Post${id}`}>
      <h1>{data.title}</h1>
      <img src={data.image} alt="" />
    </section>
  );
}
