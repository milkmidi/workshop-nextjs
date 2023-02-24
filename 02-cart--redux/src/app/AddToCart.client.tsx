'use client';

import React from 'react';
import { useAppDispatch } from '@/store';
import { actionAddToCart } from '@/store/actions';

type AddToCartProps = {
  productId: string;
  price: number;
};
const AddToCart: React.FC<AddToCartProps> = (props) => {
  const { productId, price } = props;
  const dispatch = useAppDispatch();
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
          dispatch(actionAddToCart(productId));
        }}
      >
        AddToCart
      </button>
    </section>
  );
};

export default AddToCart;
