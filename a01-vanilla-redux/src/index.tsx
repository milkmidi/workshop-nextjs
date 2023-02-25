/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import { setValueAction } from './actions';
import reducers from './reducers';
import './css/style.scss';

// https://github.com/reduxjs/redux-devtools/tree/main/extension#1-with-redux
// TODO
const store = createStore(reducers);

// TODO
/* const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
); */

const valueEl = document.getElementById('value') as HTMLElement;
function render() {
  valueEl.innerHTML = JSON.stringify(store.getState(), null, 2);
}

// TODO
render();
store.subscribe(render);

const onClick = (selector: string, clickHandler: () => void) => {
  document.querySelector(selector)!.addEventListener('click', clickHandler);
};

onClick('#increment', () => {
  // TODO
  store.dispatch({ type: 'INCREMENT' });
});

onClick('#decrement', () => {
  // TODO
  store.dispatch({ type: 'DECREMENT' });
});

onClick('#setValue', () => {
  // TODO
  // store.dispatch({ type: 'SET_VALUE', payload: 9527 }); // bad
  store.dispatch(setValueAction(9999)); // good
});

onClick('#setUserName', () => {
  // TODO
  store.dispatch({
    type: 'USER_INFO_NAME',
    payload: '奶綠茶',
  });
});
