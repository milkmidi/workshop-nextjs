'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import initStore from '@/store';

const store = initStore();
export default function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
