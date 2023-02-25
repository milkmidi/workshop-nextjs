import { useState } from 'react';

type TodoFormProps = {
  onSubmit: (text: string) => void;
};
const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const atSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };
  return (
    <section data-name="TodoForm">
      <form onSubmit={atSubmit}>
        <input type="text" className="my-input" value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
    </section>
  );
};

export default TodoForm;
