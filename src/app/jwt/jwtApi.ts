import 'server-only';

export type User = {
  name: string;
  email: string;
  rule: string;
};

type ApiLoginResponse = {
  status: 'ok' | 'error';
  accessToken: string;
  user: User;
};

export const fetchValidateToken = (token: string): Promise<ApiLoginResponse> => {
  return fetch(`https://milkmidi.vercel.app/api/auth/validate-token`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  }).then((res) => res.json());
};

export const fetchMe = (token: string): Promise<any> => {
  return fetch(`https://milkmidi.vercel.app/api/auth/me`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  }).then((res) => res.json());
};
