import React, { useEffect } from "react";
import { CURRENT_TAB } from "../common/constants";

const SiteNavigation = () => {
  const handleStore = (path = "/") => {
    sessionStorage.setItem(CURRENT_TAB, path);
    // For active class in navigation
    const navClass = document.querySelectorAll(".link");
    navClass.forEach((currentLink) => {
      if (currentLink.href.includes(path)) {
        currentLink.classList.add("active");
      } else {
        currentLink.classList.remove("active");
      }
    });
  };
  useEffect(()=>{
    const getPath = sessionStorage.getItem(CURRENT_TAB) || '/';
    handleStore(getPath)
  },[])
  const handleMenu = () =>{
    // const menu = document.querySelector(".cm-menu-inner");
    // menu.classList.toggle("cm-active");
    // $("#offcanvase, .offcanvase").on("click", function () {
    //   $(".cm-menu-inner").addClass("cm-active");
    //   $(".cm-offcanvase").addClass("cm-active");
    // });
  }
  return (
    //   {/* <!-- site navigation --> */}
    <div className="cm-navigation">
      <div className="cm-header-menu-bar sticky-top mode">
        <div className="icon offcanvase" onClick={()=>handleMenu()}>
          <img src="assets/img/icons/bars.svg" alt="menu" className="svg" />
        </div>
      </div>
      {/* <!-- tab item --> */}
      <div className="cm-tab-item ">
        <div className="tab-item-wrapper">
          <div className="tab-action-item mode">
            <ul>
              <li>
                <a
                  data-title="Home"
                  className="link active"
                  href="/"
                  onClick={() => handleStore("/")}
                >
                  <img
                    src="assets/img/icons/home.svg"
                    width="18"
                    height="16"
                    alt="home"
                    className="svg"
                  />
                </a>
              </li>
              <li>
                <a
                  data-title="About"
                  className="link"
                  href="/about"
                  onClick={() => handleStore("/about")}
                >
                  <img
                    src="assets/img/icons/about.svg"
                    width="18"
                    height="16"
                    alt="about"
                    className="svg"
                  />
                </a>
              </li>
              <li>
                <a
                  data-title="Service"
                  className="link"
                  href="/service"
                  onClick={() => handleStore("/service")}
                >
                  <img
                    src="assets/img/icons/service.svg"
                    width="18"
                    height="16"
                    alt="service"
                    className="svg"
                  />
                </a>
              </li>
              <li>
                <a
                  data-title="Portfolio"
                  className="link"
                  href="/portfolio"
                  onClick={() => handleStore("/portfolio")}
                >
                  <img
                    src="assets/img/icons/portfolio.svg"
                    width="18"
                    height="16"
                    alt="portfolio"
                    className="svg"
                  />
                </a>
              </li>
              <li>
                <a
                  data-title="Education"
                  className="link"
                  href="/education"
                  onClick={() => handleStore("/education")}
                >
                  <img
                    src="assets/img/icons/education.svg"
                    width="18"
                    height="16"
                    alt="education"
                    className="svg"
                  />
                </a>
              </li>
              <li>
                <a
                  data-title="Pricing"
                  className="link"
                  href="/pricing"
                  onClick={() => handleStore("/pricing")}
                >
                  <img
                    src="assets/img/icons/pricing.svg"
                    width="18"
                    height="16"
                    alt="pricing"
                    className="svg"
                  />
                </a>
              </li>
              <li>
                <a
                  data-title="Blog"
                  className="link"
                  href="/blog"
                  onClick={() => handleStore("/blog")}
                >
                  <img
                    src="assets/img/icons/blog.svg"
                    width="18"
                    height="16"
                    alt="blog"
                    className="svg"
                  />
                </a>
              </li>
              <li>
                <a
                  data-title="Contact"
                  className="link"
                  href="/contact"
                  onClick={() => handleStore("/contact")}
                >
                  <img
                    src="assets/img/icons/contact.svg"
                    width="18"
                    height="16"
                    alt="contact"
                    className="svg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="cm-social-link-text">
            <ul>
              <li>
                <a href="https://www.facebook.com/om.saikiran" target="_blank">
                  fb
                </a>
              </li>
              <li>
                <a href="https://twitter.com/purna_saik30757" target="_blank">
                  tw
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/purna_saikiran/"
                  target="_blank"
                >
                  in
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/purna-saikiran"
                  target="_blank"
                >
                  ln
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- language switcher --> */}
      <div className="cm-language-switcher mode">
        <div className="language-switcher">
          <select name="lang" id="language">
            <option value="ar">En</option>
            {/* <option value="ar">Ar</option> */}
          </select>
        </div>
      </div>
    </div>
    // {/* <!-- site navigation end --> */}
  );
};

export default SiteNavigation;
