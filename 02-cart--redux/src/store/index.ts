/* eslint-disable no-underscore-dangle */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from './reducers';

export default function initStore() {
  const store = createStore(reducers, composeWithDevTools());
  return store;
}

export type AppStore = ReturnType<typeof initStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
