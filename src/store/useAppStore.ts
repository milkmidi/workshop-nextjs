import { create } from 'zustand';
import { apiLogin, setAPIToken, type User } from '@/libs/api/authApi';
import { getJWTToken, setToken, cleanToken } from '../utils/cookie-utils';

type AppStore = {
  user?: User;
  init(): Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout(): void;
};
const useAppStore = create<AppStore>((set) => {
  return {
    user: undefined,
    async init() {
      console.log('init', getJWTToken());
    },
    async login(email: string, password: string) {
      const result = await apiLogin(email, password);
      const token = result.accessToken;
      set({
        user: result.user,
      });
      setToken(token);
      setAPIToken(token);
    },
    logout() {
      cleanToken();
    },
  };
});

export default useAppStore;
