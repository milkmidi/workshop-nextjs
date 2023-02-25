const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

type ActionIncrease = { type: 'INCREASE' };
type ActionDecrease = { type: 'DECREASE' };

export const actionIncrement = (): ActionIncrease => {
  return {
    type: INCREASE,
  };
};

export const actionDecrement = (): ActionDecrease => {
  return {
    type: DECREASE,
  };
};

export type ActionTypes = ActionIncrease | ActionDecrease;
