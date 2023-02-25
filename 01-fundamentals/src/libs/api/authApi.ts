import axios from 'axios';

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

export const axiosInstance = axios.create();

export const setAPIToken = (token: string) => {
  axiosInstance.defaults.headers.authorization = `Bearer ${token}`;
};

/* export const fetchValidateToken = (token: string) => {
  return axios('https://milkmidi.vercel.app/api/auth/validate-token', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(({ data }) => data);
}; */

const DEBUG_TOKEN_EXPIRESIN = 3000 * 10; // 40s
export const apiLogin = (email: string, password: string): Promise<ApiLoginResponse> => {
  return axios
    .post('https://milkmidi.vercel.app/api/auth/login', {
      email,
      password,
      // https://www.npmjs.com/package/jsonwebtoken
      expiresIn: `${DEBUG_TOKEN_EXPIRESIN}ms`,
    })
    .then(({ data }) => data);
};

export const apiMe = () => {
  return axiosInstance('https://milkmidi.vercel.app/api/auth/me', {
    method: 'POST',
  }).then(({ data }) => data);
};
