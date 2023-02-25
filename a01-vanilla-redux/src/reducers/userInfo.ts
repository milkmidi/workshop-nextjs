import { type Action } from 'actions';

const initialUserInfo = {
  name: 'milkmidi',
  age: 18,
};
// TODO
export default function userInfo(state = initialUserInfo, action: Action) {
  switch (action.type) {
    case 'USER_INFO_NAME': {
      return {
        ...state,
        name: action.payload,
      };
    }
    default:
      return state;
  }
}
