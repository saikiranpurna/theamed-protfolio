import React from "react";

const About = () => {
  let textPath = `<textPath xlink:href="#circle">
    Purna Sai Web Design and Development
  </textPath>`;
  return (
    <>
      {/* <!-- content section --> */}
      <div
        className="cm-content-area"
        data-barba="container"
        data-barba-namespace="about"
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
                    src="assets/img/icons/about.svg"
                    alt="icon"
                    className="svg"
                  />
                </div>
                <p>Me! About</p>
              </div>
              <h1 className="main-title">
                Hire the best Web Developer in{" "}
                <span>INDIA.</span>
                <br/>
                <u className="cm-inline">
                  <img src="assets/img/content/line.svg" alt="" />
                </u>
              </h1>
            </div>
            {/* <!-- about brief --> */}
            <div className="cm-about-brief">
              <div className="cm-about-left">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority have suffered alteration in some form,
                  by injected humour.
                </p>
                <div className="cm-rating">
                  <div className="star-icon">
                    <img
                      src="assets/img/icons/star.svg"
                      alt="star"
                      height="24"
                      width="24"
                    />
                  </div>
                  <div className="cm-rating-count">
                    <h4>5 Star</h4>
                    <p>
                      Read Our <a href="#">Success Story's</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="cm-about-right">
                <p>
                  Randomised words which don't look even slightly belie vable.
                  If you are going to use a passage of Lorem Ipsu you need to be
                  sure there isn't anything embarr assing hidden in the middle
                  of text All the Lorem Ipsum.
                </p>
                <p className="cm-margin">
                  Generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. Lorem Ipsu you need to be sure there isn't anything
                  embarr.
                </p>
              </div>
            </div>
            {/* <!-- about brief end --> */}
            {/* <!-- about info --> */}
            <div className="cm-about-info">
              <div className="cm-about-info-content">
                <div className="about-info">
                  <h6 className="name">Name</h6>
                  <p>Purna Saikiran K</p>
                </div>
                <div className="about-info">
                  <h6 className="name">Phone</h6>
                  <p>+91 9491279543</p>
                </div>
              </div>
              <div className="cm-about-info-content">
                <div className="about-info">
                  <h6 className="name">Office</h6>
                  <p>D.No-265, Thoredu, Rajahmundry, AP.</p>
                </div>
                <div className="about-info">
                  <h6 className="name">Experience</h6>
                  <p>3 Years</p>
                </div>
              </div>
            </div>
            {/* <!--about info end  --> */}
            {/* <!-- client --> */}
            <div className="cm-about-client">
              <div className="client-brand project-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-project">
                      <img src="assets/img/client/1.png" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-project">
                      <img src="assets/img/client/02.png" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-project">
                      <img src="assets/img/client/1.png" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-project">
                      <img src="assets/img/client/1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- client end --> */}
          </div>
        </div>
      </div>
      {/* <!-- content section end --> */}
    </>
  );
};

export default About;
