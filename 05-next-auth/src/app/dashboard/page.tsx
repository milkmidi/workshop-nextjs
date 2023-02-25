import { getServerSession } from 'next-auth';
import ClientComponent from './ClientComponent';

const DashBoard = async () => {
  const session = await getServerSession();
  return (
    <section data-name="Dashboard">
      <section data-name="Server">
        <div className="my-code">
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      </section>
      <ClientComponent />
    </section>
  );
};

export default DashBoard;
