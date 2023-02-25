'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAppStore from '@/store/useAppStore';

// zusntad 可以這樣寫
const { login } = useAppStore.getState();
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: 'milkmidi@gmail.com', // dummy data
    password: '12345', // dummy data
  });

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState('');
  const atInputChange = (e: any) => {
    const target = e.currentTarget;
    setInputs((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const atSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      await login(inputs.email, inputs.password);
      router.push('/');
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section data-name="Login" className="style-green">
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
