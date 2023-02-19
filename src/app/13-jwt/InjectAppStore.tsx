'use client';

import React from 'react';
import { type User } from '@/libs/api/authApi';
import useAppStore from '@/store/useAppStore';

type InjectAppStoreProps = {
  user: User;
};
const InjectAppStore: React.FC<InjectAppStoreProps> = (props) => {
  const { user } = props;
  const setUser = useAppStore((state) => state.setUser);
  setUser(user);
  return null;
};

export default InjectAppStore;
