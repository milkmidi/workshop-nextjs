'use client';

import React from 'react';
import useCartStore from './useCartStore';

const TotalPrice = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  return (
    <section data-name="TotalPrice" className="style-green text-5xl" data-stripes>
      <div className="my-indicator-item bg-green">Client</div>
      totalPrice:{totalPrice}
    </section>
  );
};

export default React.memo(TotalPrice, () => true);
