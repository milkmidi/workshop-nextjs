import React from 'react';
import './page.scss';

const Page = () => {
  return (
    <div className="px-4">
      <a
        href="https://www.figma.com/file/XyXi7op45WHKLqAQ1r6Eif/shopping-cart?node-id=0%3A1"
        target="_blank"
        className="mm-btn"
        rel="noreferrer"
      >
        Figma
      </a>

      <div className="w-full">
        <section data-name="StepProgress">
          <h1 className="mb-10 text-4xl font-bold">結帳</h1>
          <div className="flex items-center justify-between">
            <div className="form-step-progress__item" data-active="true">
              <span className="form-step-progress__icon">1</span>
              <div className="hidden md:block">寄送地址</div>
            </div>
            <span className="form-step-progress__bar" />
            <div className="form-step-progress__item">
              <span className="form-step-progress__icon">2</span>
              <div className="hidden md:block">運送方式</div>
            </div>
            <span className="form-step-progress__bar" />
            <div className="form-step-progress__item">
              <span className="form-step-progress__icon">3</span>
              <div className="hidden md:block">付款資訊</div>
            </div>
          </div>
        </section>

        <section data-name="Step1">
          <h3 className="form-step-title">Shipping Address</h3>
          <div className="block grid-cols-6 grid-rows-3 gap-6 md:grid">
            <div className="col-span-2">
              <div className="form-label">稱謂</div>
              <div className="form-control">
                <select className="w-full" name="title">
                  <option value="" disabled>
                    請選譯
                  </option>
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className="col-span-4">
              <div className="form-label">姓名</div>
              <input type="text" className="form-control" placeholder="請輸入姓名" name="name" />
            </div>
            <div className="col-span-3">
              <div className="form-label">電話</div>
              <input type="tel" className="form-control" placeholder="請輸入行動電話" name="phone" />
            </div>
            <div className="col-span-3">
              <div className="form-label">Email</div>
              <input type="email" className="form-control" placeholder="請輸入電子郵件" name="email" />
            </div>
            <div className="col-span-2">
              <div className="form-label">縣市</div>
              <div className="form-control">
                <select required className="w-full" name="city">
                  <option value="" disabled>
                    請選擇縣市
                  </option>
                  <option value="基隆市">基隆市</option>
                  <option value="新北市">新北市</option>
                  <option value="臺北市">臺北市</option>
                </select>
              </div>
            </div>
            <div className="col-span-4">
              <div className="form-label">地址</div>
              <input type="text" className="form-control" placeholder="請輸入地址" name="address" />
            </div>
          </div>
        </section>

        <section data-name="Step2">
          <h3 className="form-step-title">運送方式</h3>
          <div className="space-y-4">
            {Array.from(Array(3).keys()).map((v) => {
              const eleId = `step2__shopping-method${v}`;
              return (
                <div key={v}>
                  <input type="radio" className="peer sr-only" name="step2__shipping-method" id={eleId} />
                  <label htmlFor={eleId} data-price={v * 100} className="form-shipping-method">
                    <div className="form-shipping-method-dot" />
                    <div className="text-sm">
                      <p>標準運送</p>
                      <p>約 3~7 個工作天</p>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
