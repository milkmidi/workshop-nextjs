'use client';

import { useState } from 'react';

const TabActive = () => {
  const [tab, setTab] = useState(0);
  return (
    <section data-name="addVariant Tab">
      {Array.from(Array(3).keys()).map((v) => {
        return (
          <button
            key={v}
            onClick={() => setTab(v)}
            className="mm-btn data-active:bg-primary data-active:text-white"
            data-active={tab === v}
          >
            Tab{v}
          </button>
        );
      })}
    </section>
  );
};

const ActiveExample = () => {
  const [active, setActive] = useState(false);
  const atToggleActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <section data-name="addVariant data-active">
      <button
        onClick={atToggleActive}
        className="peer mm-btn data-[active='true']:bg-red-400 data-[active='true']:text-red"
        data-active={active}
      >
        toggle
      </button>
      <h1 className="peer-data-active:bg-red">Peer</h1>
      <button
        onClick={atToggleActive}
        className="peer mm-btn data-active:bg-red-400 data-active:text-red"
        data-active={active}
      >
        toggle
      </button>
      <h1 className="peer-data-active:bg-red">Peer</h1>
    </section>
  );
};

const Example1Page = () => {
  const atToggleLoggedIn = () => {
    document.body.classList.toggle('logged-in');
  };
  return (
    <div className="container mx-auto px-5">
      <section data-name="jit">
        <div className="h-[100px] w-[100px] bg-[#aabbcc]">hi, jit</div>
      </section>

      <section data-name="components">
        <button className="mm-btn">BTN (tailwind.config.js，也可以用 @apply)</button>
      </section>

      <section data-name="addVariant logged-in" className="example__logged-in">
        <h1 className="logged-in:hidden">Hi, Guest</h1>
        <h1 className="hidden bg-primary logged-in:block">Login Success</h1>

        <div className="flex space-x-2">
          <button id="btn" className="mm-btn w-[140px]" onClick={atToggleLoggedIn}>
            <div className="mm-flex-center">
              <span className="mm-spinner mr-2 hidden logged-in:inline-block" />
            </div>
            BTN
          </button>

          <button className="mm-btn w-[140px]">
            <div className="mm-flex-center w-0 overflow-hidden transition-all logged-in:w-5">
              <span className="mm-spinner" />
            </div>
            BTN
          </button>
        </div>
      </section>

      <ActiveExample />
      <TabActive />

      <section data-name="import">
        <h1 className="bg-red !bg-green-400">hi</h1>
      </section>

      <section data-name="Arbitray Variant">
        {/* https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants */}
        {/* https://tailwindcss.com/docs/plugins#adding-variants */}
        <div className="-mx-3 flex flex-wrap [&>*]:px-2">
          <div className="w-1/3">
            <div className="border border-black">
              <h1>hi</h1>
            </div>
          </div>
          <div className="w-1/3">
            <div className="border border-black">
              <h1>hi</h1>
            </div>
          </div>
          <div className="w-1/3">
            <div className="border border-black">
              <h1>hi</h1>
            </div>
          </div>
        </div>

        <div className="-mx-3 flex flex-wrap child:px-2">
          <div className="w-1/3">
            <div className="border border-black">
              <h1>hi</h1>
            </div>
          </div>
          <div className="w-1/3">
            <div className="border border-black">
              <h1>hi</h1>
            </div>
          </div>
          <div className="w-1/3">
            <div className="border border-black">
              <h1>hi</h1>
            </div>
          </div>
        </div>

        <div className="mt-3 flex -space-x-2 overflow-hidden child:inline-block child:h-12 child:w-12 child:rounded-full child:ring-2 child:ring-white hover:child:shadow">
          <img src="https://fakeimg.pl/200x200/000000/" />
          <img src="https://fakeimg.pl/200x200/000000/" />
          <img src="https://fakeimg.pl/200x200/000000/" />
          <img src="https://fakeimg.pl/200x200/000000/" />
          <img src="https://fakeimg.pl/200x200/000000/" />
        </div>
      </section>
    </div>
  );
};

export default Example1Page;
