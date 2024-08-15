import React, { Suspense, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Author from "./Author";
import Header from "./Header";
import Footer from "./Footer";
import SiteNavigation from "./SiteNavigation";
import OffCanvasMenu from "./OffCanvasMenu";

const Layout = (props) => {
  const { children } = props;
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, [children]);

  return (
    <div data-barba="wrapper">
      <div className="cm-content">
        <div className="container">
          {/* MOBILE MENU */}
          <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
          {/* author */}
          <Author />
          {/* <!-- main content --> */}
          <div className="cm-axz-content">
            {/* Header */}
            <Header />

            {show ? (
              <>
                {/* Main Content */}
                {children}
                {/* footer  */}
                <Footer />
              </>
            ) : (
              <div className="loader-container">
                <span className="loader"></span>
              </div>
            )}
          </div>
          {/* <!-- main content end --> */}
          {/* siteNavigation */}
          <SiteNavigation showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      </div>

      {/* offCanvasMenu */}
      <OffCanvasMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Layout;
