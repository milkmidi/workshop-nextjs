import { create } from 'zustand';
import { apiLogin, setAPIToken, apiMe, type User } from '@/libs/api/authApi';
import { getJWTToken, setToken, cleanToken } from '../utils/cookie-utils';

type AppStore = {
  isAppInited: boolean;
  user?: User;
  init(): Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout(): void;
  setUser(user: User): void;
};
const isAppIniting = false;
const useAppStore = create<AppStore>((set) => {
  return {
    user: undefined,
    isAppInited: false,
    async init() {
      /* if (isAppIniting) {
        return;
      }
      if (!isAppIniting) {
        isAppIniting = true;
      } */
      console.log('init');
      const token = getJWTToken();
      let user;
      if (token) {
        setAPIToken(token);
        user = await apiMe();
      }
      set({
        isAppInited: true,
        user,
      });
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
    setUser(user: User) {
      console.log('serUser', user);
      set({
        user,
      });
      setAPIToken(getJWTToken());
    },
    logout() {
      cleanToken();
    },
  };
});

export default useAppStore;
