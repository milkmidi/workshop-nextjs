import { type ProductType } from '@/types';

export const actionInitProducts = (products: ProductType[]) =>
  ({
    type: 'initProducts',
    payload: products,
  } as ActionTypes);

export const actionAddToCart = (productId: string) =>
  ({
    type: 'addToCart',
    payload: productId,
  } as ActionTypes);

export type ActionTypes =
  | { type: 'initProducts'; payload: ProductType[] }
  | { type: 'addToCart'; payload: string };
