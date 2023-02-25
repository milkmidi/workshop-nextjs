'use client';

import { memo } from 'react';
import useAppStore, { type UserType } from '@/store/useAppStore';

type InjectAppStoreProps = {
  user?: UserType;
};
const StoreInitializer: React.FC<InjectAppStoreProps> = (props) => {
  const { user } = props;
  const setUser = useAppStore((state) => state.setUser);
  setUser(user);
  return null;
};

export default memo(StoreInitializer);
