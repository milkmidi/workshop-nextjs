import React from 'react';
import styles from './ProductCard.module.scss';

type ProductType = {
  title: string;
  image: string;
  price: number;
};
const fetchProductWithId = (id: string): Promise<ProductType> => {
  const delay = Math.random() * 1000 + 500;
  return fetch(`https://milkmidi.vercel.app/api/products/${id}?delay=${delay}`, {
    cache: 'no-store',
  }).then((response) => response.json());
};

type ProductCardProps = {
  id: string;
};
const ProductCard = async ({ id }: ProductCardProps) => {
  const { title, price, image } = await fetchProductWithId(id);
  return (
    <figure className="animate-fadeIn space-y-2 py-2">
      <figcaption>{title}</figcaption>
      <p>
        price:
        {price}
      </p>
      <div className={styles.imageWrap}>
        <img className=" object-cover" src={image} alt={title} />
      </div>
    </figure>
  );
};

export default ProductCard;
