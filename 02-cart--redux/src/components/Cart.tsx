'use client';

import React from 'react';
// import useCartStore from '@/store/useCartStore';
import { shallowEqual } from 'react-redux';
// import { shallow } from 'zustand/shallow';
import { useAppSelector } from '@/store';

const Cart = () => {
  const { totalPrice, cart } = useAppSelector(
    (state) => ({
      cart: state.cart.cart,
      totalPrice: state.cart.totalPrice,
    }),
    shallowEqual,
  );
  return (
    <section data-name="Cart" className="style-green">
      <h1>Cart</h1>
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
