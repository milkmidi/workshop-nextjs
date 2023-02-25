import { fetchTodoList } from './api';
import TodoList from './TodoList';

const TodoPage = async () => {
  const data = await fetchTodoList();
  return <TodoList data={data} />;
};

export default TodoPage;
