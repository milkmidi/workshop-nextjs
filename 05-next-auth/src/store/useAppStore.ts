import { create } from 'zustand';
import { DefaultSession } from 'next-auth';

export type UserType = DefaultSession['user'];

type AppStore = {
  user?: UserType;
  setUser(user: UserType): void;
};
const useAppStore = create<AppStore>((set) => {
  return {
    user: undefined,
    setUser(user: UserType) {
      console.log('serUser', user);
      set({
        user,
      });
    },
  };
});

export default useAppStore;
