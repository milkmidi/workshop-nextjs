export const setValueAction = (payload = 9527) =>
  ({
    type: 'SET_VALUE',
    payload,
  } as Action);

export type Action =
  | { type: 'SET_VALUE'; payload: number }
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'USER_INFO_NAME'; payload: string };
