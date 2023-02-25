import Login from './Login';

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center py-3">
      <div className="card bg-white p-2">
        <h3>Login Website</h3>
        <Login />
      </div>
    </div>
  );
}
