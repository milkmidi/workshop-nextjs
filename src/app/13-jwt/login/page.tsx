'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAppStore from '@/store/useAppStore';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: 'milkmidi@gmail.com', // dummy data
    password: '12345', // dummy data
  });

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState('');

  const login = useAppStore((state) => state.login);

  const atInputChange = (e: any) => {
    const target = e.currentTarget;
    setInputs((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const atSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    login(inputs.email, inputs.password)
      .then(() => {
        router.push('/13-jwt');
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section data-name="Login - ClientComponent">
      <form onSubmit={atSubmit} className="my-spinner-wrap space-y-3" data-loading={loading}>
        <div>
          <input
            type="email"
            name="email"
            className="my-input"
            value={inputs.email}
            onChange={atInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="my-input"
            value={inputs.password}
            onChange={atInputChange}
          />
        </div>
        <button className="my-btn" type="submit">
          Login
        </button>
        {errorMessage && <div className="text-danger">{errorMessage}</div>}
      </form>
    </section>
  );
};

export default Login;
