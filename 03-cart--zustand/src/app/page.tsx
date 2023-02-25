import React, { Suspense } from 'react';
import useCartStore, { ProductType } from '@/store/useCartStore';
import Cart from '@/components/Cart';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';
import StoreInitializer from './StoreInitializer.client';

const fetchProductData = (): Promise<ProductType[]> => {
  return fetch(`https://my-json-server.typicode.com/milkmidi/typicode/products?_d_=${Date.now()}`, {
    cache: 'no-store',
  }).then((response) => response.json());
};

async function StreamingPage() {
  const products = await fetchProductData();
  // useCartStore(); only use client
  // Server Side
  useCartStore.setState({ products });
  return (
    <div className="container mx-auto">
      {/* Client Side */}
      <Cart />
      <StoreInitializer products={products} />
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
