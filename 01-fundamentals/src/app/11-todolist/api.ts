import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://milkmidi.vercel.app',
});

export type TodoType = {
  id: string;
  text: string;
  done: boolean;
};

// Server
export const fetchTodoList = (): Promise<TodoType[]> => {
  return fetch(`https://milkmidi.vercel.app/api/todolist/nextjs?delay=350&_d_=${Date.now()}`, {
    cache: 'no-store',
  }).then((res) => res.json());
};

export const apiAddTodo = (text: string) => {
  return instance.post(`/api/todolist/nextjs?_d_=${Date.now()}`, { text });
};
export const apiActionTodo = (id: string, method: string) => {
  return instance(`/api/todolist/nextjs?_d_=${Date.now()}`, {
    method,
    data: { id },
  });
};
