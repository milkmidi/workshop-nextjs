export function apiAddTodo(text: string) {
  return fetch(`https://milkmidi.vercel.app/api/todolist/nextjs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
}
export function apiActionTodo(id: string, method: string) {
  return fetch(`https://milkmidi.vercel.app/api/todolist/nextjs`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
}
