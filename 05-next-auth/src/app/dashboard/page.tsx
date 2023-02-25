import { getServerSession } from 'next-auth';
import ClientComponent from './ClientComponent';

const DashBoard = async () => {
  const session = await getServerSession();
  // console.log(session);
  return (
    <section data-name="Dashboard">
      <div className="my-code">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <ClientComponent />
    </section>
  );
};

export default DashBoard;
