import { useCallback } from 'react';
import { actionIncrement, actionDecrement } from '../store/actions';
import { useAppDispatch, useAppSelector } from '../store';

const MyCountButton = () => {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  const atIncrease = useCallback(() => dispatch(actionIncrement()), [dispatch]);
  const atDecrease = useCallback(() => dispatch(actionDecrement()), [dispatch]);

  return (
    <section data-name="MyCountButton">
      <h3>Count: {count}</h3>
      <button className="btn btn-primary me-2" onClick={atIncrease}>
        +
      </button>
      <button className="btn btn-warning" onClick={atDecrease}>
        -
      </button>
    </section>
  );
};
export default MyCountButton;
