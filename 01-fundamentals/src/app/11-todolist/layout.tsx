const TodoListLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <section data-name="TodoListLayout" className="container mx-auto">
      {children}
    </section>
  );
};
export default TodoListLayout;
