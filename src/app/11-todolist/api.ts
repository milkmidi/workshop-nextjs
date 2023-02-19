import axios from 'axios';

export function apiAddTodo(text: string) {
  return axios.post(`https://milkmidi.vercel.app/api/todolist/nextjs`, {
    text,
  });
}
export function apiActionTodo(id: string, method: string) {
  return axios(`https://milkmidi.vercel.app/api/todolist/nextjs`, {
    method,
    data: { id },
  });
}
