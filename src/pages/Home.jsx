import React from "react";
import ContentCircle from "../components/ContentCircle";

const Home = () => {

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
          <ContentCircle/>

          <div className="cm-content-sub">
            <div className="icon">
              <img className="svg" src="assets/img/icons/home.svg" alt="" />
            </div>
            <p>Hi! There I’m</p>
          </div>
          <h1 className="main-title">
            I make <span>functional product's</span> which also delights users.
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
              <span className="count-item theme">20+</span>
              <p>Project Contributions & Professional Milestones</p>
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
