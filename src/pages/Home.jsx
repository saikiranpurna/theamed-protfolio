import React from "react";

const Home = () => {
  let textPath = `<textPath xlink:href="#circle">
    Purna Sai Web Design and Development
  </textPath>`;
  return (
    //    {/* <!-- main content section --> */}
    <div
      className="cm-content-area"
      data-barba="container"
      data-barba-namespace="index"
    >
      <div className="cm-content-box mode">
        <div className="cm-content-item index">
          <div className="top-right-bg"></div>
          <div className="cm-content-circle">
            <svg
              className="circle"
              viewBox="0 0 100 100"
              width="120"
              height="120"
            >
              <defs>
                <path
                  id="circle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                ></path>
              </defs>
              <text dangerouslySetInnerHTML={{ __html: textPath }}>
                {/* <textPath xlink:href="#circle">
                           Purna Sai Web Design and Development
                         </textPath> */}
              </text>
            </svg>
            <div className="circle-logo">
              <img src="assets/img/logo/circle-logo.svg" alt="" />
            </div>
          </div>
          <div className="cm-content-sub">
            <div className="icon">
              <img className="svg" src="assets/img/icons/home.svg" alt="" />
            </div>
            <p>Hi! There I’m</p>
          </div>
          <h1 className="main-title">
            I'm making product and <span>design</span> minimal modern.
          </h1>
          <div className="cm-contact-zone">
            <a href="mailto:saikiransai949@gmail.com">
              <span>
                <img
                  src="assets/img/icons/email.svg"
                  alt="email"
                  height="24"
                  width="24"
                />
              </span>
              saikiransai949@gmail.com
            </a>
            <a href="callto:+919491279543">
              <span>
                <img
                  src="assets/img/icons/phone.svg"
                  alt="email"
                  height="24"
                  width="24"
                />
              </span>
              +919491279543
            </a>
          </div>
          <div className="cm-content-img">
            <img
              src="assets/img/content/code.png"
              alt="code image"
              className="light-image"
            />
            <img
              src="assets/img/content/code-dark.png"
              alt="code image"
              className="dark-image"
            />
          </div>
          <div className="cm-counter">
            <div className="cm-counter-single">
              <span className="count-item theme">31.2K</span>
              <p>Product Sale Per Day Using Out Tools.</p>
            </div>
            <div className="cm-counter-single">
              <span className="count-item">2.3M</span>
              <p>Trusted By Customers Worldwide Over.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    //  {/* <!-- main content section end --> */
  );
};

export default Home;
