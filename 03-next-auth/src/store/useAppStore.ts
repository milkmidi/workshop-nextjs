import { create } from 'zustand';

export type UserType = {
  name: string;
  email: string;
};

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
