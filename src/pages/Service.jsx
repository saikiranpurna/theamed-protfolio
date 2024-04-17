import React from "react";

const Service = () => {
  let textPath = `<textPath xlink:href="#circle">
    Purna Sai Web Design and Development
  </textPath>`;
  return (
    <>
      {/* <!-- content section --> */}
      <div
        className="cm-content-area"
        data-barba="container"
        data-barba-namespace="service"
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
                  <img src="assets/img/icons/service.svg" alt="" className="svg" />
                </div>
                <p>Best Our Service</p>
              </div>
              <h1 className="main-title">
                Jeckob Martin the best <br />I make <span>Services.</span>
                <u className="cm-block">
                  <img src="assets/img/content/line.svg" alt="" />
                </u>
              </h1>
            </div>
            <div className="cm-services">
              {/* <!-- single service --> */}
              <div className="single-service-item">
                <div className="service-count-item">
                  <div className="service-icon">
                    <img src="assets/img/icons/service-1.svg" alt="" />
                  </div>
                  <div className="service-count">
                    <h6 className="service-title">
                      Brand Strategy & Art Direction
                    </h6>
                    <p className="project-count">(35+ Project)</p>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Research</a>
                    </li>
                    <li>
                      <a href="#">Mobile & Web App</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- single service --> */}
              <div className="single-service-item">
                <div className="service-count-item">
                  <div className="service-icon">
                    <img src="assets/img/icons/service-2.svg" alt="" />
                  </div>
                  <div className="service-count">
                    <h6 className="service-title">
                      Motion Graphics & Interactions
                    </h6>
                    <p className="project-count">(100+ Project)</p>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Research</a>
                    </li>
                    <li>
                      <a href="#">Mobile & Web App</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- single service --> */}
              <div className="single-service-item">
                <div className="service-count-item">
                  <div className="service-icon">
                    <img src="assets/img/icons/service-3.svg" alt="" />
                  </div>
                  <div className="service-count">
                    <h6 className="service-title">Webflow Development</h6>
                    <p className="project-count">(55+ Project)</p>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Research</a>
                    </li>
                    <li>
                      <a href="#">Mobile & Web App</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- single service --> */}
              <div className="single-service-item">
                <div className="service-count-item">
                  <div className="service-icon">
                    <img src="assets/img/icons/service-4.svg" alt="" />
                  </div>
                  <div className="service-count">
                    <h6 className="service-title">
                      UX/UI Design & Website/App Design
                    </h6>
                    <p className="project-count">(59+ Project)</p>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Research</a>
                    </li>
                    <li>
                      <a href="#">Mobile & Web App</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- content section end --> */}
    </>
  );
};

export default Service;
