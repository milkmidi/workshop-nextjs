import 'server-only';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

/* export default async function fetchData(): Promise<PostType[]> {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, { next: { revalidate: 15 } });
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, { cache: 'no-store' });

  const data = await res.json();
  return data;
} */

export type TodoType = {
  id: string;
  text: string;
  done: boolean;
};
export const fetchTodoList = async (): Promise<TodoType[]> => {
  console.log('fetchTodoList', process.env.HOST);
  // const res = await fetch(`${process.env.HOST}/api/todolist/nextjs`, {
  const res = await fetch(`http://localhost:3000/api/todolist/nextjs`, {
    cache: 'no-store',
  });
  return res.json();
};
