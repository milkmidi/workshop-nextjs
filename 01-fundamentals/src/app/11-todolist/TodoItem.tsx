import React, { memo } from 'react';
import { type TodoType } from './api';
import style from './TodoItem.module.scss';

type TodoItemProps = TodoType & {
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};
const TodoItem: React.FC<TodoItemProps> = ({ id, text, done, onToggleTodo, onDeleteTodo }) => {
  return (
    <div data-id={id} className={style.todoItem} data-active={done}>
      <button onClick={() => onToggleTodo(id)}>
        {text},{`${done}`}
      </button>
      <button className="ml-auto rounded bg-red p-2 text-sm text-white" onClick={() => onDeleteTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default memo(TodoItem);
