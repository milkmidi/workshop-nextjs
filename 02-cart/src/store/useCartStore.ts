/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';

export type ProductType = {
  id: string;
  title: string;
  image: string;
  price: number;
};

type LineItem = ProductType & {
  quantity: number;
};

type CartStore = {
  totalPrice: number;
  cart: LineItem[];
  products: ProductType[];
  addToCart(id: string): void;
};

const useCartStore = create<CartStore>()(
  devtools(
    (set, get) => ({
      totalPrice: 0,
      cart: [],
      products: [],
      addToCart(id: string) {
        set(
          produce<CartStore>((draft) => {
            const findCartItem = draft.cart.find((c) => c.id === id);
            if (findCartItem) {
              findCartItem.quantity += 1;
            } else {
              const findProduct = get().products.find((p) => p.id === id)!;
              draft.cart.push({
                ...findProduct,
                quantity: 1,
              });
            }
            const totalPrice = draft.cart.reduce((prev, curr) => {
              return prev + curr.price * curr.quantity;
            }, 0);
            draft.totalPrice = totalPrice;
          }),
          false,
          'addToCart',
        );
      },
    }),
    { name: 'cart', store: 'useCartStore' },
  ),
);

export default useCartStore;
