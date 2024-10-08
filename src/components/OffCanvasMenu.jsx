import React from "react";
import { CURRENT_TAB } from "../common/constants";

const OffCanvasMenu = (props) => {
  const handleStore = (path = "/") => {
    sessionStorage.setItem(CURRENT_TAB, path);
  };
  return (
    <>
      {/* // <!-- offcanvase menu --> */}
      <div className={`cm-offcanvase ${props.showMenu ? "cm-active" : ""}`}>
        <div className="cm-menu-overlay"></div>
        <div className={`cm-menu-inner ${props.showMenu ? "cm-active" : ""}`}>
          <div
            className="cm-close-icon"
            onClick={() => props.setShowMenu(false)}
          >
            <img src="assets/img/icons/x-lg.svg" alt="" />
          </div>
          <div className="cm-offcanvase__logo logo-area">
            <a href="/">
              <img
                className="light dark"
                src="assets/img/logo/SPP.svg"
                alt=""
              />
            </a>
          </div>
          <div className="cm-sidemenu">
            <div className="cm-menu">
              <ul>
                <li>
                  <a className="link" href="/" onClick={() => handleStore("/")}>
                    <img
                      className="svg"
                      src="assets/img/icons/home.svg"
                      alt=""
                    />{" "}
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    href="/about"
                    onClick={() => handleStore("/about")}
                  >
                    <img
                      className="svg"
                      src="assets/img/icons/about.svg"
                      alt=""
                    />{" "}
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    href="/service"
                    onClick={() => handleStore("/service")}
                  >
                    <img
                      className="svg"
                      src="assets/img/icons/service.svg"
                      alt=""
                    />{" "}
                    Service
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    href="/portfolio"
                    onClick={() => handleStore("/portfolio")}
                  >
                    <img
                      className="svg"
                      src="assets/img/icons/portfolio.svg"
                      alt=""
                    />{" "}
                    Portfolio
                  </a>
                </li>
                {/* <li>
                  <a
                    className="link"
                    href="/pricing"
                    onClick={() => handleStore("/pricing")}
                  >
                    <img
                      className="svg"
                      src="assets/img/icons/pricing.svg"
                      alt=""
                    />{" "}
                    Pricing
                  </a>
                </li> */}
                <li>
                  <a
                    className="link"
                    href="/education"
                    onClick={() => handleStore("/education")}
                  >
                    <img
                      className="svg"
                      src="assets/img/icons/education.svg"
                      alt=""
                    />{" "}
                    Education
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    href="/blog"
                    onClick={() => handleStore("/blog")}
                  >
                    <img
                      className="svg"
                      src="assets/img/icons/blog.svg"
                      alt=""
                    />{" "}
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    href="/contact"
                    onClick={() => handleStore("/contact")}
                  >
                    <img
                      className="svg"
                      src="assets/img/icons/contact.svg"
                      alt=""
                    />{" "}
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="cm-sidecontact">
            <h6>Contact Me</h6>
            <a href="#">+91 9491279543</a>
            <a href="#">saikiransai949@gmail.com</a>
            <a
              className="link"
              href="https://github.com/saikiranpurna"
              target="_blank"
            >
              Purna's GitHub
            </a>
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
