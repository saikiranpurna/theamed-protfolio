import React from "react";

const Portfolio = () => {
  let textPath = `<textPath xlink:href="#circle">
    Purna Sai Web Design and Development
  </textPath>`;
  return (
    <>
      {/* <!-- content section --> */}
      <div
        className="cm-content-area"
        data-barba="container"
        data-barba-namespace="portfolio"
      >
        <div className="cm-content-box mode">
          <div className="cm-content-item cm-page-template">
            <div className="cm-content-item__top">
              <div className="top-right-bg"></div>
              <div className="cm-content-circle">
                <svg
                  className="circle"
                  viewBox="0 0 100 100"
                  width="120"
                  height="120"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    ></path>
                  </defs>
                  <text dangerouslySetInnerHTML={{ __html: textPath }}></text>
                </svg>
                <div className="circle-logo">
                  <img src="assets/img/logo/circle-logo.svg" alt="" />
                </div>
              </div>
              <div className="cm-content-sub">
                <div className="icon">
                  <img
                    className="svg"
                    src="assets/img/icons/portfolio.svg"
                    alt=""
                  />
                </div>
                <p>Best Our Portfolio</p>
              </div>
              <h1 className="main-title">
                Jeckob Martin the best <br />
                make Our <span>Portfolio</span>
                <u>
                  <img src="assets/img/content/line.svg" alt="" />
                </u>
              </h1>
            </div>
            {/* <!-- portfolio content --> */}
            <div className="cm-portfolio">
              <div className="cm-portfolio-item">
                {/* <!-- single portfolio --> */}
                <div className="single-portfolio-content">
                  <div className="cm-portfolio-thumb">
                    <img
                      src="assets/img/portfolio/01.jpg"
                      alt="portfolio-item"
                    />
                    <a href="#" className="cm-portfolio-cat">
                      Mockup Design
                    </a>
                    <div className="cm-center-btn">
                      <a href="portfolio-details.html" className="cm-round-btn">
                        <img
                          src="assets/img/icons/rotate-arrow.svg"
                          alt=""
                          height="20"
                          width="20"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cm-portfolio-meta">
                    <div className="cm-tag">
                      <span>Type:</span>
                      UX, UI, UXW, 3D
                    </div>
                    <a className="title" href="portfolio-details.html">
                      Bronco PSD, Figma & XD Design
                    </a>
                  </div>
                </div>
                {/* <!-- single portfolio --> */}
                <div className="single-portfolio-content">
                  <div className="cm-portfolio-thumb">
                    <img
                      src="assets/img/portfolio/02.jpg"
                      alt="portfolio-item"
                    />
                    <a href="#" className="cm-portfolio-cat">
                      Web Design
                    </a>
                    <div className="cm-center-btn">
                      <a href="portfolio-details.html" className="cm-round-btn">
                        <img
                          src="assets/img/icons/rotate-arrow.svg"
                          alt=""
                          height="20"
                          width="20"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cm-portfolio-meta">
                    <div className="cm-tag">
                      <span>Type:</span>
                      Web and iOS Application
                    </div>
                    <a className="title" href="portfolio-details.html">
                      Website UI Design
                    </a>
                  </div>
                </div>
                {/* <!-- single portfolio --> */}
                <div className="single-portfolio-content">
                  <div className="cm-portfolio-thumb">
                    <img
                      src="assets/img/portfolio/03.jpg"
                      alt="portfolio-item"
                    />
                    <a href="#" className="cm-portfolio-cat">
                      Bronco Design
                    </a>
                    <div className="cm-center-btn">
                      <a href="portfolio-details.html" className="cm-round-btn">
                        <img
                          src="assets/img/icons/rotate-arrow.svg"
                          alt=""
                          height="20"
                          width="20"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cm-portfolio-meta">
                    <div className="cm-tag">
                      <span>Type:</span>
                      Mobile Application
                    </div>
                    <a className="title" href="portfolio-details.html">
                      Flayer Microsoft Template Design
                    </a>
                  </div>
                </div>
                {/* <!-- single portfolio --> */}
                <div className="single-portfolio-content">
                  <div className="cm-portfolio-thumb">
                    <img
                      src="assets/img/portfolio/04.jpg"
                      alt="portfolio-item"
                    />
                    <a href="#" className="cm-portfolio-cat">
                      Mockup Design
                    </a>
                    <div className="cm-center-btn">
                      <a href="portfolio-details.html" className="cm-round-btn">
                        <img
                          src="assets/img/icons/rotate-arrow.svg"
                          alt=""
                          height="20"
                          width="20"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cm-portfolio-meta">
                    <div className="cm-tag">
                      <span>Type:</span>
                      UX, UI, UXW, 3D
                    </div>
                    <a className="title" href="portfolio-details.html">
                      Bronco PSD, Figma & XD Design
                    </a>
                  </div>
                </div>
                {/* <!-- single portfolio --> */}
                <div className="single-portfolio-content">
                  <div className="cm-portfolio-thumb">
                    <img
                      src="assets/img/portfolio/05.jpg"
                      alt="portfolio-item"
                    />
                    <a href="#" className="cm-portfolio-cat">
                      Mockup Design
                    </a>
                    <div className="cm-center-btn">
                      <a href="portfolio-details.html" className="cm-round-btn">
                        <img
                          src="assets/img/icons/rotate-arrow.svg"
                          alt=""
                          height="20"
                          width="20"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cm-portfolio-meta">
                    <div className="cm-tag">
                      <span>Type:</span>
                      Web and iOS Application
                    </div>
                    <a className="title" href="portfolio-details.html">
                      Furniture mockup template
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- pagination --> */}
              <div className="cm-site-pagination">
                <nav aria-label="pagination-area">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" tabindex="0">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        04
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <!-- portfolio content end --> */}
          </div>
        </div>
      </div>
      {/* <!-- content section end --> */}
    </>
  );
};

export default Portfolio;
