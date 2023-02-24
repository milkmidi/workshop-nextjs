'use client';

import { useRef } from 'react';
import { type ProductType } from '@/types';
import { useAppDispatch } from '@/store';

type StoreInitializerProps = {
  products: ProductType[];
};
const StoreInitializer: React.FC<StoreInitializerProps> = ({ products }) => {
  const initialized = useRef(false);
  const dispatch = useAppDispatch();
  if (!initialized.current) {
    // useCartStore.setState({ products }, false, 'setProducts');
    initialized.current = true;
    dispatch({ type: 'initProducts', payload: products });
  }
  return null;
};

export default StoreInitializer;
