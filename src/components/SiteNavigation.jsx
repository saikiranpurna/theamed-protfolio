import React from "react";

const SiteNavigation = () => {
  return (
    //   {/* <!-- site navigation --> */}
    <div className="cm-navigation">
      <div className="cm-header-menu-bar sticky-top mode">
        <div className="icon offcanvase">
          <img src="assets/img/icons/bars.svg" alt="menu" className="svg" />
        </div>
      </div>
      {/* <!-- tab item --> */}
      <div className="cm-tab-item ">
        <div className="tab-item-wrapper">
          <div className="tab-action-item mode">
            <ul>
              <li>
                <a data-title="Home" className="link active" href="/">
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
                <a data-title="About" className="link" href="/about">
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
                <a data-title="Service" className="link" href="/service">
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
                <a data-title="Pricing" className="link" href="/pricing">
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
                <a data-title="Blog" className="link" href="/blog">
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
                <a data-title="Contact" className="link" href="/contact">
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
                <a href="#">fb</a>
              </li>
              <li>
                <a href="#">tw</a>
              </li>
              <li>
                <a href="#">in</a>
              </li>
              <li>
                <a href="#">be</a>
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
