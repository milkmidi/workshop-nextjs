import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type ProductType = {
  id: string;
  title: string;
  image: string;
  price: number;
};
type CartStore = {
  totalPrice: number;
  products: ProductType[];
  addToCart(id: string): void;
};

const useCartStore = create<CartStore>()(
  devtools(
    (set, get) => ({
      totalPrice: 0,
      products: [],
      addToCart(id: string) {
        const findProduct = get().products.find((c) => c.id === id);
        if (findProduct) {
          const totalPrice = get().totalPrice + findProduct.price;
          set(
            {
              totalPrice,
            },
            false,
            'totalPrice',
          );
        }
      },
    }),
    { name: 'cart', store: 'useCartStore' },
  ),
);

export default useCartStore;
