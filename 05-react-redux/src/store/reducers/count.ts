/* eslint-disable default-param-last */
import { ActionTypes } from '../actions';

export default function count(state = 10, action: ActionTypes): number {
  switch (action.type) {
    case 'INCREASE': {
      return state + 1;
    }
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}
