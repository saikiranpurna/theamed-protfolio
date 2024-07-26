import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // {/* <!-- header area --> */}
    <div className="cm-header sticky-top">
      <div className="cm-header-menu mode">
        <div className="menu-left">
          <div className="logo-area">
            <a href="/">
              <img
                className=""
                src="assets/img/logo/SPP.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="header-menu">
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="hire">
                  Hire Me!
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cm-functionality cm-right">
          <div className="setting">
            <div className="mode-switcher" id="theme-mode">
              <img
                className="light svg"
                src="assets/img/icons/moon.svg"
                alt=""
              />
              <img className="dark svg" src="assets/img/icons/sun.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    //   {/* <!-- header area end --> */}
  );
};

export default Header;
