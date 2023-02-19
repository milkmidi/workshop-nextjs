import React, { Suspense } from 'react';
import Content from './Content';

async function StreamingPage() {
  return (
    <section data-name="StreamingPage">
      <Suspense fallback={<div>Loading 1</div>}>
        {/* @ts-ignore */}
        <Content value="Content1" />
      </Suspense>
      <Suspense fallback={<div>Loading 2</div>}>
        {/* @ts-ignore */}
        <Content value="Content2" />
      </Suspense>
    </section>
  );
}

export default StreamingPage;
