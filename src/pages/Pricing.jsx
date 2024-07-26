import React from "react";
import ContentCircle from "../components/ContentCircle";

const Pricing = () => {
  return (
    <>
      {/* <!-- content section --> */}
      <div
        className="cm-content-area"
        data-barba="container"
        data-barba-namespace="pricing"
      >
        <div className="cm-content-box mode">
          <div className="cm-content-item cm-page-template">
            <div className="cm-content-item__top">
              <div className="top-right-bg"></div>
              <ContentCircle />

              <div className="cm-content-sub">
                <div className="icon">
                  <img
                    className="svg"
                    src="assets/img/icons/pricing.svg"
                    alt=""
                  />
                </div>
                <p>Best Our Pricing</p>
              </div>
              <h1 className="main-title">
                Jeckob Martin the best <br />
                Pricing <span>&</span> Testimonials
                <u>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="127"
                    height="12"
                    viewBox="0 0 127 12"
                    fill="none"
                  >
                    <path
                      d="M0 11C5.54507 11 7.15493 1 12.7 1C18.2451 1 19.8549 11 25.4 11C30.9451 11 32.5549 1 38.1 1C43.6451 1 45.2549 11 50.8 11C56.3451 11 57.9549 1 63.5 1C69.0451 1 70.6549 11 76.2 11C81.7451 11 83.3549 1 88.9 1C94.4451 1 96.0549 11 101.6 11C107.145 11 108.755 1 114.3 1C119.845 1 121.455 11 127 11"
                      stroke="#56B887"
                    />
                  </svg>
                </u>
              </h1>
            </div>
            {/* <!-- page content --> */}
            <div className="cm-pricing-area">
              <h3 className="section-title">pricing</h3>
              <div className="cm-pricing">
                {/* <!-- single pricing table --> */}
                <div className="pricing-table">
                  <div className="pricing-table__single">
                    <div className="pricing-plan">
                      <h3 className="plan-name">Standard</h3>
                      <div className="plan-switcher">
                        <button className="plan active">Monthly</button>
                        <span>/</span>
                        <button className="plan">Yearly</button>
                      </div>
                    </div>
                    <div className="plan-trial">
                      <button className="plan-trial-btn">Free Trial</button>
                    </div>
                    <div className="plan-content">
                      <ul className="plan-content__list">
                        <li className="plan-content__list--item">
                          <span>1</span> Installation
                        </li>
                        <li className="plan-content__list--item">
                          <span>Wind</span> Generators
                        </li>
                        <li className="plan-content__list--item">
                          <span>5 Months</span> Delivery Support
                        </li>
                        <li className="plan-content__list--item">
                          Support with <span>8 Engineers</span>
                        </li>
                        <li className="plan-content__list--item">
                          <span>100%</span> Energy Saver
                        </li>
                      </ul>
                    </div>
                    <div className="plan-price">
                      <sub className="dollar">$</sub>
                      <span className="price">116</span>
                      <sub className="billing-method">/Monthly</sub>
                    </div>
                  </div>
                </div>
                {/* <!-- single pricing table --> */}
                <div className="pricing-table">
                  <div className="pricing-table__single">
                    <div className="pricing-plan">
                      <h3 className="plan-name">Premium</h3>
                      <div className="plan-switcher">
                        <button className="plan active">Monthly</button>
                        <span>/</span>
                        <button className="plan">Yearly</button>
                      </div>
                    </div>
                    <div className="plan-trial">
                      <button className="plan-trial-btn">Free Trial</button>
                    </div>
                    <div className="plan-content">
                      <ul className="plan-content__list">
                        <li className="plan-content__list--item">
                          <span>1</span> Installation
                        </li>
                        <li className="plan-content__list--item">
                          <span>Wind</span> Generators
                        </li>
                        <li className="plan-content__list--item">
                          <span>5 Months</span> Delivery Support
                        </li>
                        <li className="plan-content__list--item">
                          Support with <span>8 Engineers</span>
                        </li>
                        <li className="plan-content__list--item">
                          <span>100%</span> Energy Saver
                        </li>
                      </ul>
                    </div>
                    <div className="plan-price">
                      <sub className="dollar">$</sub>
                      <span className="price">116</span>
                      <sub className="billing-method">/Monthly</sub>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- testimonial --> */}
            <div className="cm-testimonial-area">
              <h3 className="section-title">testimonials</h3>
              <div className="cm-testimonials">
                <div className="cm-testimonial">
                  <div className="swiper-wrapper">

                    {/* <!-- single slider --> */}
                    <div className="swiper-slide">
                      <div className="cm-testimonial__single">
                        <div className="author-rating">
                          <div className="author">
                            <h5 className="name">Akshay Yaravali</h5>
                            <p className="designation">
                              Web Designer of <span>Engro</span>
                            </p>
                          </div>
                          <div className="rating">
                            <span>
                              <img src="assets/img/icons/star-svg.svg" alt="" />
                            </span>
                            <span>
                              <img src="assets/img/icons/star-svg.svg" alt="" />
                            </span>
                            <span>
                              <img src="assets/img/icons/star-svg.svg" alt="" />
                            </span>
                            <span>
                              <img src="assets/img/icons/star-svg.svg" alt="" />
                            </span>
                            <span>
                              <img src="assets/img/icons/star-svg.svg" alt="" />
                            </span>
                          </div>
                        </div>
                        <p className="description">
                          His work is solid, reliable and error-free — I would
                          highly recommend them. We just wish we had known about
                          them sooner.
                        </p>
                        <div className="testimonial-footer">
                          <div className="footer-left">
                            <p className="left-text">
                              Explosive Revenue <br />
                              Growth <span>12.5k</span>
                            </p>
                          </div>
                          <div className="quote">
                            <span>
                              <img
                                src="assets/img/icons/quote.svg"
                                className="svg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination__dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- content section end --> */}
    </>
  );
};

export default Pricing;
