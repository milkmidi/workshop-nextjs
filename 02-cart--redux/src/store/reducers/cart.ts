/* eslint-disable default-param-last */
import { type ProductType, type LineItem } from '@/types';
import { ActionTypes } from '../actions';

type CartStore = {
  totalPrice: number;
  cart: LineItem[];
  products: ProductType[];
};
const initialState = {
  totalPrice: 0,
  cart: [],
  products: [],
} as CartStore;

export default function cartReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case 'initProducts': {
      return {
        ...state,
        products: action.payload,
      };
    }
    case 'addToCart': {
      const id = action.payload;
      const isLineItemExist = state.cart.find((c) => c.id === id);
      let cart = state.cart.concat();
      if (isLineItemExist) {
        cart = state.cart.map((c) => {
          if (c.id === id) {
            return {
              ...c,
              quantity: c.quantity + 1,
            };
          }
          return c;
        });
      } else {
        const findProduct = state.products.find((p) => p.id === id)!;
        cart.push({
          ...findProduct,
          quantity: 1,
        });
      }
      const totalPrice = cart.reduce((prev, curr) => {
        return prev + curr.price * curr.quantity;
      }, 0);

      return {
        ...state,
        cart,
        totalPrice,
      };
    }
    default:
      return state;
  }
}
