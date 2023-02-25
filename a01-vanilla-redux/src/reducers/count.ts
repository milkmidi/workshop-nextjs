import { type Action } from 'actions';

// TODO
export default function count(state = 0, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'SET_VALUE':
      return action.payload;
    default:
      return state;
  }
}
