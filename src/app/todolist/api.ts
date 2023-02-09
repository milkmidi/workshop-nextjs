export async function apiAddTodo(text: string) {
  await fetch(`http://milkmidi.vercel.app/api/todolist/nextjs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
}
export async function apiActionTodo(id: string, method: string) {
  await fetch(`http://milkmidi.vercel.app/api/todolist/nextjs`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
}
