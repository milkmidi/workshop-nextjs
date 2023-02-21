'use client';

import React from 'react';
import useCartStore from '@/store/useCartStore';
import { shallow } from 'zustand/shallow';

const Cart = () => {
  const { totalPrice, cart } = useCartStore(
    (state) => ({
      cart: state.cart,
      totalPrice: state.totalPrice,
    }),
    shallow,
  );
  return (
    <section data-name="Cart" className="style-green">
      {cart.map((c) => {
        return (
          <div key={c.id}>
            {c.title} x {c.quantity} = {c.price * c.quantity}
          </div>
        );
      })}
      <div>totalPrice:{totalPrice}</div>
    </section>
  );
};

export default Cart;
