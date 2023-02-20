import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchValidateToken, fetchMe } from './jwtApi';
import StoreInitializer from './StoreInitializer';
import ClientPage from './ClientPage';

const JWTPage = async () => {
  const nextCookies = cookies();
  const jwtTokenObj = nextCookies.get('JWT_TOKEN');
  let result;
  if (jwtTokenObj?.value) {
    result = await fetchValidateToken(jwtTokenObj.value);
    if (result.status !== 'ok') {
      redirect('/13-jwt/login');
      return null;
    }
  } else {
    // https://beta.nextjs.org/docs/api-reference/redirect
    redirect('/13-jwt/login');
    return null;
  }

  const meResult = await fetchMe(jwtTokenObj.value);
  return (
    <section data-name="JWT ServerComponent">
      <StoreInitializer user={meResult.user} />
      <section data-name="Server">
        <div className="my-code mb-4">
          <pre>{JSON.stringify(meResult, null, 2)}</pre>
        </div>
      </section>
      <ClientPage />
    </section>
  );
};

export default JWTPage;
