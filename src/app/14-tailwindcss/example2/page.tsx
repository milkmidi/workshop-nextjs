import styles from './page.module.scss';

const NickSelectorExample = () => {
  return (
    <section data-name="peer example2">
      <div className="-mx-1 mb-2 flex flex-wrap">
        {Array.from(Array(3).keys()).map((v) => {
          const isDisabled = v % 3 === 0;
          return (
            <div className="w-1/3 px-1" key={v}>
              <div className={styles.sizeBTN}>
                <input
                  type="radio"
                  id={`fakeSKU${v}`}
                  className="peer sr-only"
                  name="sku-size"
                  disabled={isDisabled}
                />
                <label htmlFor={`fakeSKU${v}`} className="peer-checked:border-black peer-disabled:opacity-40">
                  CM 2{v}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div className="container mx-auto px-5">
      <section data-name="group">
        {/* <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state --> */}
        <button className="group block border border-black">
          <h1 className="group-hover:bg-red">h1</h1>
          <div className="h-[100px] w-[100px] bg-purple-300 group-hover:bg-green-200" />
        </button>
      </section>

      <section data-name="peer">
        {/* <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state --> */}
        <label className="block">
          <input type="checkbox" className="peer" />
          <p className="peer-checked:bg-red">Please provide a valid email address.</p>
        </label>
      </section>

      <NickSelectorExample />

      <section data-name="before and after">
        {/* <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after --> */}
        <label className="block">
          <span className="block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
            Email
          </span>
          <input type="email" name="email" className={styles.input} placeholder="you@example.com" />
        </label>
      </section>

      <section data-name="Viewport orientation">
        {/* <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation --> */}
        <div className="portrait:hidden">
          <h1>landscape only</h1>
        </div>
        <div className="landscape:hidden">
          <p>
            This experience is designed to be viewed in landscape. Please rotate your device to view the site.
          </p>
        </div>
      </section>

      <section data-name="Open/closed state">
        {/* <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state --> */}
        <div className="mx-auto max-w-lg p-8">
          <details
            className="group rounded-lg p-6 open:bg-red-500 open:shadow-lg open:ring-1 open:ring-black/5"
            open
          >
            <summary className="select-none text-sm font-semibold leading-6 text-slate-900 group-open:bg-green-500">
              Why do they call it Ovaltine?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              <p>The mug is round. The jar is round. They should call it Roundtine.</p>
            </div>
          </details>
        </div>
      </section>

      <section data-name="RippleUI - accordion">
        <div className="accordion-group">
          <div className="accordion">
            <input type="checkbox" id="accordion-1" className="accordion-toggle" />
            <label htmlFor="accordion-1" className="accordion-title">
              Toggle Accordion 1
            </label>
            <div className="accordion-content">
              <div className="min-h-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum
                autem placeat aspernatur inventore eius deleniti reprehenderit? Numquam commodi totam mollitia
                quod
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="accordion-2" className="accordion-toggle" />
            <label htmlFor="accordion-2" className="accordion-title">
              Toggle Accordion 2
            </label>
            <div className="accordion-content">
              <div className="min-h-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum
                autem placeat aspernatur inventore eius deleniti reprehenderit? Numquam commodi totam mollitia
                quo
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
