'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

import { signIn } from 'next-auth/react';

const Login = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [name, setName] = useState('milkmidi');
  const [password, setPassword] = useState('123456');

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    let cbUrl = params.get('callbackUrl') || '/';
    try {
      const data = await signIn('credentials', {
        // redirect: true,
        redirect: false,
        username: name,
        password,
        // callbackUrl: cbUrl,
      });
      if (data?.status === 200) {
        if (cbUrl !== '/') {
          cbUrl = cbUrl.replace(window.location.origin, '');
        }
        router.replace(cbUrl);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <form className="card w-full rounded border p-4" onSubmit={submitHandler}>
        <h1 className="mb-4 text-3xl">Login</h1>
        <div className="mb-4">
          <label className="mb-3 block">UserName</label>
          <input
            type="text"
            className="my-input w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="mb-3 block">Password</label>
          <input
            type="password"
            className="my-input w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="w-100 btn-primary btn mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
