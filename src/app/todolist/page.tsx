import React from 'react';
import { type TodoType } from '@/libs/api/fetchPostData';
import TodoList from './TodoList';

const fetchTodoList = async (): Promise<TodoType[]> => {
  const res = await fetch(`https://milkmidi.vercel.app/api/todolist/nextjs?${Date.now()}&delay=2000`, {
    cache: 'no-store',
  });
  const data: TodoType[] = await res.json();
  return data;
};

const TodoPage = async () => {
  const data = await fetchTodoList();
  return (
    <div>
      <TodoList data={data} />
    </div>
  );
};

export default TodoPage;
