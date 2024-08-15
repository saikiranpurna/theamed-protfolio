import React from "react";
import ContentCircle from "../components/ContentCircle";

const Portfolio = () => {
  const data = [
    {
      type: "Web",
      designType: "Video APP",
      url: "https://meeting.mrpurnatech.in/",
      title: "Boom Video calling and Meeting APP",
      imgUrl: "assets/img/portfolio/boomImage.png",
    },
    {
      type:'Web',
      designType:'Utility Platform',
      url:'https://examples.mrpurnatech.in/',
      title:'React Utility Platform',
      imgUrl:'assets/img/portfolio/reactUtility.png'
    },
  ];
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
              <ContentCircle />

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
                The <span>Purna's</span> best <br />
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
                {data.map((item, index) => {
                  return (
                    <div className="single-portfolio-content">
                      <div className="cm-portfolio-thumb">
                        <img src={item.imgUrl} alt="portfolio-item" />
                        <a href="#" className="cm-portfolio-cat">
                          {item.designType}
                        </a>
                        <div className="cm-center-btn">
                          <a
                            href={item.url}
                            target="_blank"
                            className="cm-round-btn"
                          >
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
                          {item.type}
                        </div>
                        <a className="title" href={item.url} target="_blank">
                          {item.title}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <!-- pagination --> */}
              {/* <div className="cm-site-pagination">
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
              </div> */}
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
