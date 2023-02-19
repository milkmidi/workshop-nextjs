import { fetchTodoList } from '@/libs/api/fetchPostData';
import TodoList from './TodoList';

const TodoPage = async () => {
  const data = await fetchTodoList();
  return (
    <div>
      <TodoList data={data} />
    </div>
  );
};

export default TodoPage;
