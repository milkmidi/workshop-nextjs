'use client';

import { useTransition, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { type TodoType } from './api';
import { apiAddTodo, apiActionTodo } from './api';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

// https://beta.nextjs.org/docs/data-fetching/mutating
type TodoListProps = {
  data: TodoType[];
};
const TodoList: React.FC<TodoListProps> = ({ data }) => {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();

  const refresh = useCallback(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);
  const atSubmit = useCallback(
    async (text: string) => {
      setIsFetching(true);
      await apiAddTodo(text);
      setIsFetching(false);
      refresh();
    },
    [refresh],
  );
  const atToggleTodo = useCallback(
    async (id: string) => {
      setIsFetching(true);
      await apiActionTodo(id, 'PUT');
      setIsFetching(false);
      refresh();
    },
    [refresh],
  );
  const atDeleteTodo = useCallback(
    async (id: string) => {
      setIsFetching(true);
      await apiActionTodo(id, 'DELETE');
      setIsFetching(false);
      refresh();
    },
    [refresh],
  );

  // Create inline loading UI
  const isMutating = isFetching || isPending;
  return (
    <section data-name="TodoList">
      <div className="my-spinner-wrap" data-loading={isMutating}>
        <div className="mb-2">
          <TodoForm onSubmit={atSubmit} />
        </div>
        <div className="space-y-2">
          {data.map((todo) => {
            return (
              <TodoItem key={todo.id} {...todo} onToggleTodo={atToggleTodo} onDeleteTodo={atDeleteTodo} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
