import { useAppSelector } from '../store';

const MyCount = () => {
  const count = useAppSelector((state) => state.count);
  return (
    <section data-name="MyCount">
      <h3>Count: {count}</h3>
    </section>
  );
};
export default MyCount;
