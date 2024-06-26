import React from "react";

const OffCanvasMenu = () => {
  return (
    <>
      {/* // <!-- offcanvase menu --> */}
      <div className="cm-offcanvase">
        <div className="cm-menu-overlay"></div>
        <div className="cm-menu-inner">
          <div className="cm-close-icon">
            <img src="assets/img/icons/x-lg.svg" alt="" />
          </div>
          <div className="cm-offcanvase__logo logo-area">
            <a href="/">
              <img className="light" src="assets/img/logo/logo.svg" alt="" />
            </a>
            <a href="/">
              <img
                className="dark"
                src="assets/img/logo/dark-logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="cm-sidemenu">
            <div className="cm-menu">
              <ul>
                <li>
                  <a className="link" href="/">
                    <img
                      className="svg"
                      src="assets/img/icons/home.svg"
                      alt=""
                    />{" "}
                    Home
                  </a>
                </li>
                <li>
                  <a className="link" href="about">
                    <img
                      className="svg"
                      src="assets/img/icons/about.svg"
                      alt=""
                    />{" "}
                    About
                  </a>
                </li>
                <li>
                  <a className="link" href="/service">
                    <img
                      className="svg"
                      src="assets/img/icons/service.svg"
                      alt=""
                    />{" "}
                    Service
                  </a>
                </li>
                <li>
                  <a className="link" href="/portfolio">
                    <img
                      className="svg"
                      src="assets/img/icons/portfolio.svg"
                      alt=""
                    />{" "}
                    portfolio
                  </a>
                </li>
                <li>
                  <a className="link" href="/pricing">
                    <img
                      className="svg"
                      src="assets/img/icons/pricing.svg"
                      alt=""
                    />{" "}
                    pricing
                  </a>
                </li>
                <li>
                  <a className="link" href="/education">
                    <img
                      className="svg"
                      src="assets/img/icons/education.svg"
                      alt=""
                    />{" "}
                    education
                  </a>
                </li>
                <li>
                  <a className="link" href="/blog">
                    <img
                      className="svg"
                      src="assets/img/icons/blog.svg"
                      alt=""
                    />{" "}
                    blog
                  </a>
                </li>
                <li>
                  <a className="link" href="/contact">
                    <img
                      className="svg"
                      src="assets/img/icons/contact.svg"
                      alt=""
                    />{" "}
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="cm-sidecontact">
            <h6>Contact Me</h6>
            <a href="#">+8801712345678</a>
            <a href="#">axz@axz.com</a>
          </div>
        </div>
      </div>
      {/* // <!-- offcanvase menu end --> */}
      {/* <!-- animation --> */}
      <div className="animation">
        <div className="animation__screen"></div>
      </div>
      {/* <!-- animation end --> */}
    </>
  );
};

export default OffCanvasMenu;
