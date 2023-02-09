import React from 'react';

// @ts-ignore
const TodoListLayout = ({ children }) => {
  return (
    <section data-name="TodoListLayout" className="container mx-auto">
      <h1 className="mb-4 bg-black text-5xl text-white">TodoList Layout</h1>
      <React.Suspense fallback={<div>Suspense -- LOADING</div>}>{children}</React.Suspense>
    </section>
  );
};
export default TodoListLayout;
