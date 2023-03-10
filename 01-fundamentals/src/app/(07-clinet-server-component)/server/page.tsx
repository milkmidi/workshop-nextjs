type TodoType = {
  id: string;
  text: string;
  done: boolean;
};
const fetchTodoList = async (): Promise<TodoType[]> => {
  const res = await fetch(
    `https://my-json-server.typicode.com/milkmidi/typicode/todolist?_delay=1000&_d_=${Date.now()}`,
    {
      cache: 'no-store',
    },
  );
  const data: TodoType[] = await res.json();
  return data;
};

const ServerPage = async () => {
  const data = await fetchTodoList();
  return (
    <section data-name="Server">
      <ul>
        {data.map((d) => {
          return (
            <li className="data-active:bg-green-300" data-active={d.done} key={d.id}>
              {d.text}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ServerPage;
