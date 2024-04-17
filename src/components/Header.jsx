import React from "react";

const Header = () => {
  return (
    // {/* <!-- header area --> */}
    <div className="cm-header sticky-top">
      <div className="cm-header-menu mode">
        <div className="menu-left">
          <div className="logo-area">
            <a href="/">
              <img className="light" src="assets/img/logo/logo.svg" alt="axz" />
            </a>
            <a href="/">
              <img
                className="dark"
                src="assets/img/logo/dark-logo.svg"
                alt="axz"
              />
            </a>
          </div>
          <div className="header-menu">
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact" className="hire">
                  Hire Me!
                </a>
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
