import React from "react";
import ContentCircle from "../components/ContentCircle";

const Service = () => {

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
              <ContentCircle/>

              <div className="cm-content-sub">
                <div className="icon">
                  <img src="assets/img/icons/service.svg" alt="" className="svg" />
                </div>
                <p>Best Our Service</p>
              </div>
              <h1 className="main-title">
                Purna Sai the best <br />I make <span>Services.</span>
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
                    Frontend Performance Optimization Services
                    </h6>
                    <p className="project-count">(Optimize web application performance using various techniques.)</p>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <a href="#">Caching</a>
                    </li>
                    <li>
                      <a href="#">Minification</a>
                    </li>
                    <li>
                      <a href="#">Compression</a>
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
                    Frontend Development Services
                    </h6>
                    <p className="project-count">(Create user-friendly and responsive user interfaces )</p>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <a href="#">React JS</a>
                    </li>
                    <li>
                      <a href="#">Next JS</a>
                    </li>
                    <li>
                      <a href="#">JavaScript</a>
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
                    <h6 className="service-title">Web Component Services</h6>
                    <p className="project-count">(Develop custom web components using Web Component standards)</p>
                  </div>
                </div>
                <div className="service-list">
                <ul>
                    <li>
                      <a href="#">React JS</a>
                    </li>
                    <li>
                      <a href="#">HTML5</a>
                    </li>
                    <li>
                      <a href="#">CSS3</a>
                    </li>
                    <li>
                      <a href="#">JavaScript</a>
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
                    Frontend Testing and Debugging Services
                    </h6>
                    <p className="project-count">(Write end-to-end tests to ensure that the application works as expected from a user's perspective.)</p>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <a href="#">Jest</a>
                    </li>
                    <li>
                      <a href="#">Jasmine</a>
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
