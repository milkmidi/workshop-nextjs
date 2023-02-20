'use client';

import React from 'react';
import useCartStore from './useCartStore';

const TotalPrice = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  return <section data-name="TotalPrice">{totalPrice}</section>;
};

export default React.memo(TotalPrice, () => true);
