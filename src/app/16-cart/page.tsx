import React, { Suspense } from 'react';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';
import useCartStore, { ProductType } from './useCartStore';
import TotalPrice from './TotalPrice';
import StoreInitializer from './StoreInitializer';

const fetchProductData = (): Promise<ProductType[]> => {
  return fetch(
    `https://my-json-server.typicode.com/milkmidi/typicode/products?_delay=1000&_d_=${Date.now()}`,
    {
      cache: 'no-store',
    },
  ).then((response) => response.json());
};

async function StreamingPage() {
  const products = await fetchProductData();
  // useCartStore(); only use client
  // Server Side
  useCartStore.setState({ products });
  return (
    <div>
      {/* Client Side */}
      <StoreInitializer products={products} />
      <TotalPrice />
      <div className="-mx-2 flex flex-wrap">
        {products.map((product) => {
          return (
            <div className="w-1/3 px-2" key={product.id}>
              <section data-name="ProductCard">
                <Suspense fallback={<Skeleton />}>
                  {/* @ts-ignore */}
                  <ProductCard id={product.id} />
                </Suspense>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StreamingPage;
