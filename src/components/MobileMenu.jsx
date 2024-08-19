import React from "react";

const MobileMenu = ({showMenu,setShowMenu}) => {
  const handleTheme = () => {
    var htmlElement = document.documentElement;
    if (htmlElement !== undefined) {
      if (htmlElement.getAttribute("data-theme") === "dark") {
        htmlElement.setAttribute("data-theme", "light");
      } else {
        htmlElement.setAttribute("data-theme", "dark");
      }
    }
  };
  return (
    //   {/* <!-- mobile menu --> */}
    <div className="cm-mobile-menu">
      <div className="cm-header-menu mode">
        <div className="menu-left">
          <div className="logo-area">
            <a href="/">
              <img className="" src="assets/img/logo/SPP.svg" alt="logo" />
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
            <div className="mode-switcher mode-mobile" id="theme-mode-2"               onClick={() => {
                handleTheme();
              }}>
              <img
                className="light svg"
                src="assets/img/icons/moon.svg"
                alt=""
              />
              <img className="dark svg" src="assets/img/icons/sun.svg" alt="" />
            </div>
          </div>
          <div className="offcanvase" onClick={()=>{setShowMenu(true)}}>
            <img
              src="assets/img/icons/bars.svg"
              alt="menu-bar"
              className="svg"
            />
          </div>
        </div>
      </div>
    </div>
    // {/* <!-- mobile menu end --> */}
  );
};

export default MobileMenu;
