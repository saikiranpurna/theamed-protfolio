import React from "react";
import MobileMenu from "./MobileMenu";
import Author from "./Author";
import Header from "./Header";
import Footer from "./Footer";
import SiteNavigation from "./SiteNavigation";
import OffCanvasMenu from "./OffCanvasMenu";

const Layout = (props) => {
    const {children} = props
  return (
    <div data-barba="wrapper">
      <div className="cm-content">
        <div className="container">
          {/* MOBILE MENU */}
          <MobileMenu />

          {/* author */}
          <Author />
          {/* <!-- main content --> */}
          <div className="cm-axz-content">
            {/* Header */}
            <Header />

            {/* Main Content */}
            {children}
            {/* footer  */}
            <Footer />
          </div>
          {/* <!-- main content end --> */}

          {/* siteNavigation */}
          <SiteNavigation />
        </div>
      </div>

      {/* offCanvasMenu */}
      <OffCanvasMenu />
    </div>
  );
};

export default Layout;
