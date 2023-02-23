import useAction from '../store/useAction';

const MyCount = () => {
  const action = useAction();
  return (
    <section data-name="MyCount2">
      <button className="my-btn" onClick={action.actionIncrement}>
        increment
      </button>
      <button className="my-btn" onClick={action.actionDecrement}>
        decrement
      </button>
    </section>
  );
};
export default MyCount;
