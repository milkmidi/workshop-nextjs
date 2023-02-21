'use client';

import { useTransition, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { type TodoType } from '@/libs/api/fetchPostData';

import { apiAddTodo, apiActionTodo } from './api';
import style from './TodoList.module.scss';

// https://beta.nextjs.org/docs/data-fetching/mutating
type TodoListProps = {
  data: TodoType[];
};
const TodoList: React.FC<TodoListProps> = (props) => {
  const router = useRouter();
  const { data } = props;
  const [input, setInput] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const refresh = useCallback(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);
  const atSubmit = async (e: React.FormEvent) => {
    setIsFetching(true);
    e.preventDefault();
    setInput('');
    try {
      await apiAddTodo(input);
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
    refresh();
  };
  const atToggleTodo = async (id: string) => {
    setIsFetching(true);
    await apiActionTodo(id, 'PUT');
    setIsFetching(false);
    refresh();
  };
  const atDeleteTodo = async (id: string) => {
    setIsFetching(true);
    await apiActionTodo(id, 'DELETE');
    setIsFetching(false);
    refresh();
  };

  // Create inline loading UI
  const isMutating = isFetching || isPending;
  return (
    <section data-name="TodoList" className="style-green">
      <div className="my-spinner-wrap" data-loading={isMutating}>
        <div className="mb-2">
          <form onSubmit={atSubmit}>
            <input
              type="text"
              className="my-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
        <div className=" space-y-2">
          {data.map((todo) => {
            return (
              <div key={todo.id} data-id={todo.id} className={style.todoItem} data-active={todo.done}>
                <button onClick={() => atToggleTodo(todo.id)}>
                  {todo.text},{`${todo.done}`}
                </button>
                <button
                  className="ml-auto rounded bg-red p-2 text-sm text-white"
                  onClick={() => atDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
