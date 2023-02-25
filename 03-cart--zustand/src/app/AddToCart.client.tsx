'use client';

import React from 'react';
import useCartStore from '@/store/useCartStore';

type AddToCartProps = {
  productId: string;
  price: number;
};
const AddToCart: React.FC<AddToCartProps> = (props) => {
  const { productId, price } = props;
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <section
      data-name="AddToCart"
      className="style-green"
      data-stripes
      data-product-id={productId}
      data-price={price}
    >
      <button
        className="button"
        onClick={() => {
          addToCart(productId);
          /* useCartStore.setState((state) => {
            return {
              totalPrice: state.totalPrice + price,
            };
          }); */
        }}
      >
        AddToCart
      </button>
    </section>
  );
};

export default AddToCart;
