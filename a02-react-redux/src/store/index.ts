/* eslint-disable no-underscore-dangle */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from './reducers';
// https://www.npmjs.com/package/@redux-devtools/extension

// const store = createStore(reducers, preloadedState);
const store = createStore(
  reducers,
  composeWithDevTools(),
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
