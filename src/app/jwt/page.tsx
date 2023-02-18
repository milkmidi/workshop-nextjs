import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchValidateToken, fetchMe } from './jwtApi';

const JWTPage = async () => {
  const nextCookies = cookies();
  const jwtTokenObj = nextCookies.get('JWT_TOKEN');
  let result;
  if (jwtTokenObj?.value) {
    result = await fetchValidateToken(jwtTokenObj.value);
    if (result.status !== 'ok') {
      redirect('/jwt/login');
      return null;
    }
  } else {
    // https://beta.nextjs.org/docs/api-reference/redirect
    redirect('/jwt/login');
    return null;
  }

  const me = await fetchMe(jwtTokenObj.value);
  return (
    <>
      <h1>JWT</h1>
      <div className="my-code">
        <pre>{JSON.stringify(me, null, 2)}</pre>
      </div>
    </>
  );
};

export default JWTPage;
