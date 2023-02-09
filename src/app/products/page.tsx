import React, { Suspense } from 'react';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';

type ProductType = {
  id: string,
}
const fetchProductData = ():Promise<ProductType[]> => {
  return fetch('https://milkmidi.vercel.app/api/products', {
    cache: 'no-store',
  }).then((response) => response.json());
};

async function StreamingPage() {
  const products = await fetchProductData();
  return (
    <div>
      <h4 className="text-xl">Hi, StreamingPage</h4>
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
