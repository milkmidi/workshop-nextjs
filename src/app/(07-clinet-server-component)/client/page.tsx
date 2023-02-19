/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { type TodoType } from '@/libs/api/fetchPostData';
import axios from 'axios';

const fetchTodoList = (): Promise<TodoType[]> => {
  return axios(
    `https://my-json-server.typicode.com/milkmidi/typicode/todolist?_delay=1000&_d_=${Date.now()}`,
  ).then(({ data }) => data);
};

const ClientPage = () => {
  const [count, setCount] = useState(0);
  const { data, error } = useSWR('/api/todolist', () => fetchTodoList());

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Client loading...</div>;
  return (
    <section data-name="client">
      <ul>
        {data.map((d) => {
          return (
            <li
              onClick={() => {
                alert(d.id);
              }}
              className="data-active:bg-green-300"
              data-active={d.done}
              key={d.id}
            >
              {d.text}
            </li>
          );
        })}
      </ul>
      <button
        className="my-btn"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment, {count}
      </button>
    </section>
  );
};

export default ClientPage;
