import 'server-only';

export type TodoType = {
  id: string;
  text: string;
  done: boolean;
};
export const fetchTodoList = async (): Promise<TodoType[]> => {
  const res = await fetch(`https://milkmidi.vercel.app/api/todolist/nextjs?${Date.now()}&delay=2000`, {
    cache: 'no-store',
  });
  const data: TodoType[] = await res.json();
  return data;
};
