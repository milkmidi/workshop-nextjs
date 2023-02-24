'use client';

import { useRef } from 'react';

import useCartStore, { type ProductType } from '@/store/useCartStore';

type StoreInitializerProps = {
  products: ProductType[];
};
const StoreInitializer: React.FC<StoreInitializerProps> = ({ products }) => {
  const initialized = useRef(false);
  if (!initialized.current) {
    useCartStore.setState({ products }, false, 'setProducts');
    initialized.current = true;
  }
  return null;
};

export default StoreInitializer;
