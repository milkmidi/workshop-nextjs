import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchValidateToken, fetchMe } from './jwtApi';
import InjectAppStore from './InjectAppStore';
import ClientPage from './ClientPage';

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

  const meResult = await fetchMe(jwtTokenObj.value);
  return (
    <section data-name="JWT ServerComponent">
      <InjectAppStore user={meResult.user} />
      <div className="my-code mb-4">
        <pre>{JSON.stringify(meResult, null, 2)}</pre>
      </div>
      <ClientPage />
    </section>
  );
};

export default JWTPage;
