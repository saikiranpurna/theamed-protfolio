import React from "react";

const Education = () => {
  let textPath = `<textPath xlink:href="#circle">
    Purna Sai Web Design and Development
  </textPath>`;
  return (
    <>
      {/* <!-- content section --> */}
      <div
        className="cm-content-area"
        data-barba="container"
        data-barba-namespace="education"
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
                  <text
                    fontSize="8.75"
                    dangerouslySetInnerHTML={{ __html: textPath }}
                  ></text>
                </svg>
                <div className="circle-logo">
                  <img src="assets/img/logo/circle-logo.svg" alt="" />
                </div>
              </div>
              <div className="cm-content-sub">
                <div className="icon">
                  <img
                    className="svg"
                    src="assets/img/icons/education.svg"
                    alt="education"
                  />
                </div>
                <p>Education and Skills</p>
              </div>
              <h1 className="main-title">
                Purna the best <br /> Education <span>&</span> Experience
                <u>
                  <img src="assets/img/content/line.svg" alt="" />
                </u>
              </h1>
            </div>
            {/* <!-- education --> */}
            <div className="cm-education-education">
              <div className="single-info-item">
                <h3>Education</h3>
                <div className="cm-education-timeline-content">
                  <div className="education-timeline">
                    <div className="left-side">
                      <h6 className="uni-name">University of JNTUK</h6>
                      <p>AUG 2021 </p>
                    </div>
                    <div className="right-side">
                      <h6 className="degree">
                        Graduate in Mechanical Engineering
                      </h6>
                      <p>
                        Engineering is the art of modeling materials we do not
                        fully understand, into shapes we cannot precisely
                        analyze.
                      </p>
                    </div>
                  </div>
                  <div className="education-timeline">
                    <div className="left-side">
                      <h6 className="uni-name">
                        State Board Of Technical Education And Training.
                      </h6>
                      <p>2015-2018</p>
                    </div>
                    <div className="right-side">
                      <h6 className="degree">
                        Diploma in Mechanical Engineering
                      </h6>
                      <p>
                        Engineers like to solve problems. If there are no
                        problems, they will create their own.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- timeline two --> */}
              <div className="single-info-item">
                <h3>Professional</h3>
                <div className="cm-education-timeline-content">
                  <div className="education-timeline">
                    <div className="left-side">
                      <h6 className="uni-name">Engro Technologies</h6>
                      <p>2023 - Current</p>
                    </div>
                    <div className="right-side">
                      <h6 className="degree">Senior Frontend-developer</h6>
                      <p>
                        Phasellus eros lectus, ultricies ut nisl in, sodales
                        rhoncusem. Maecenas molestie design maturity srrategy.
                      </p>
                    </div>
                  </div>
                  <div className="education-timeline">
                    <div className="left-side">
                      <h6 className="uni-name">Network 18</h6>
                      <p>2022-2023</p>
                    </div>
                    <div className="right-side">
                      <h6 className="degree">Web Development</h6>
                      <p>
                        Phasellus eros lectus, ultricies ut nisl in, sodales
                        rhoncusem. Maecenas molestie design maturity srrategy.
                      </p>
                    </div>
                  </div>
                  <div className="education-timeline">
                    <div className="left-side">
                      <h6 className="uni-name">U-Next</h6>
                      <p>2021-2022</p>
                    </div>
                    <div className="right-side">
                      <h6 className="degree">Associate Software Engineer</h6>
                      <p>
                        Phasellus eros lectus, ultricies ut nisl in, sodales
                        rhoncusem. Maecenas molestie design maturity srrategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- timeline two --> */}
              <div className="single-info-item">
                <div className="cm-row">
                  <h3>Skills</h3>
                  <div className="cm-skill-container">
                    <div className="single-skill-item">
                      <div className="expertise__single">
                        <p className="expertise__title">
                          Design - <span>90%</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="expertise__single">
                        <p className="expertise__title">
                          art direction - <span>89%</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "89%" }}
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="expertise__single">
                        <p className="expertise__title">
                          branding - <span>60%</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="single-skill-item cm-md-5">
                      <div className="expertise__single">
                        <p className="expertise__title">
                          Website Design - <span>40%</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="expertise__single">
                        <p className="expertise__title">
                          UX/UI design - <span>70%</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="expertise__single">
                        <p className="expertise__title">
                          Web Development -<span>95%</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Education;
