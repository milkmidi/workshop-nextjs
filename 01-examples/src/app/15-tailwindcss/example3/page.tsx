/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './page.scss';

const Page = () => {
  return (
    <div className="space-y-4 px-4">
      <section className="-mx-4 flex flex-wrap" data-name="Grid system">
        {Array.from(Array(3).keys()).map((v) => {
          return (
            <figure className="w-full px-4 sm:w-1/2 md:w-1/3" key={v}>
              <div className="debug">
                <figcaption className="text-3xl">hi</figcaption>
                <img src="https://fakeimg.pl/450x450/?text=Hello" />
              </div>
            </figure>
          );
        })}
      </section>

      <section
        className="-mx-4 flex flex-wrap [&>*]:w-full [&>*]:px-4 [&>*]:md:w-1/3"
        data-name="Grid system"
      >
        {Array.from(Array(3).keys()).map((v) => {
          return (
            <figure key={v}>
              <div className="debug">
                <figcaption className="text-3xl">hi</figcaption>
                <img src="https://fakeimg.pl/450x450/?text=Hello" />
              </div>
            </figure>
          );
        })}
      </section>

      <section data-name="aspect">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Pi-MRZBP91I"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
