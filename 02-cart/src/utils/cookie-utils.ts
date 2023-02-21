// @ts-ignore
import Cookies from 'js-cookie';

const JWT_TOKEN = 'JWT_TOKEN';

export const getJWTToken = () => {
  return Cookies.get(JWT_TOKEN);
};

export const setToken = (token: string) => {
  console.log('setToken', token);
  Cookies.set(JWT_TOKEN, token);
};
export const cleanToken = () => {
  console.log('cleanToken');
  Cookies.remove(JWT_TOKEN);
};
