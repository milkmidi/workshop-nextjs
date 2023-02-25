/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useEffect, useRef } from 'react';
import useAppStore from '@/store/useAppStore';
import { shallow } from 'zustand/shallow';

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const isIniting = useRef(false);
  const { isAppInited, init } = useAppStore((state) => {
    return {
      isAppInited: state.isAppInited,
      init: state.init,
    };
  }, shallow);

  useEffect(() => {
    if (isIniting.current) {
      return;
    }
    isIniting.current = true;
    if (!isAppInited) {
      init();
    }
  }, [isAppInited, init]);

  if (!isAppInited) {
    return <div>LOADING</div>;
  }
  return <>{children}</>;
};

export default AuthProvider;
