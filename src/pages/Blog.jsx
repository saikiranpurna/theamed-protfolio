import React from "react";

const Blog = () => {
  let textPath = `<textPath xlink:href="#circle">
    Purna Sai Web Design and Development
  </textPath>`;
  return (
    <>
      {/* <!-- content section --> */}
      <div
        className="cm-content-area"
        data-barba="container"
        data-barba-namespace="blog"
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
                  <img className="svg" src="assets/img/icons/blog.svg" alt="blog" />
                </div>
                <p>News and Blogs</p>
              </div>
              <h1 className="main-title">
                Jeckob Martin the best <br />
                News <span>&</span> Blogs
                <u>
                  <img src="assets/img/content/line.svg" alt="" />
                </u>
              </h1>
            </div>
            {/* <!-- blog content --> */}
            <div className="cm-blogs">
              <div className="cm-blog-area">
                {/* <!-- single blog item --> */}
                <div className="single-blog-item">
                  <a href="blog-details.html" className="single-blog-item__single">
                    <img src="assets/img/blog/01.jpg" alt="blog" />
                  </a>
                  <div className="blog__meta">
                    <span className="author">
                      <a href="#">
                        <img src="assets/img/icons/user.svg" alt="user" /> Rasel
                        Ahmed
                      </a>
                    </span>
                    <span className="date">
                      <img src="assets/img/icons/calendar.svg" alt="calendar" />{" "}
                      09 Aug 2024
                    </span>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Adapting Your Resume for Different Job Opportunities
                    </a>
                  </h4>
                </div>
                {/* <!-- single blog item end --> */}
                {/* <!-- single blog item --> */}
                <div className="single-blog-item">
                  <a href="blog-details.html" className="single-blog-item__single">
                    <img src="assets/img/blog/02.jpg" alt="blog" />
                  </a>
                  <div className="blog__meta">
                    <span className="author">
                      <a href="#">
                        <img src="assets/img/icons/user.svg" alt="user" /> Tomal
                      </a>
                    </span>
                    <span className="date">
                      <img src="assets/img/icons/calendar.svg" alt="calendar" />{" "}
                      15 Aug 2024
                    </span>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Modifying Your CV to Suit Employment Prospects
                    </a>
                  </h4>
                </div>
                {/* <!-- single blog item end --> */}
                {/* <!-- single blog item --> */}
                <div className="single-blog-item">
                  <a href="blog-details.html" className="single-blog-item__single">
                    <img src="assets/img/blog/03.jpg" alt="blog" />
                  </a>
                  <div className="blog__meta">
                    <span className="author">
                      <a href="#">
                        <img src="assets/img/icons/user.svg" alt="user" />
                        Shakib
                      </a>
                    </span>
                    <span className="date">
                      <img src="assets/img/icons/calendar.svg" alt="calendar" />{" "}
                      09 Aug 2024
                    </span>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Customizing Your Resume for Varied Job Roles
                    </a>
                  </h4>
                </div>
                {/* <!-- single blog item end --> */}
                {/* <!-- single blog item --> */}
                <div className="single-blog-item">
                  <a href="blog-details.html" className="single-blog-item__single">
                    <img src="assets/img/blog/04.jpg" alt="blog" />
                  </a>
                  <div className="blog__meta">
                    <span className="author">
                      <a href="#">
                        <img src="assets/img/icons/user.svg" alt="user" /> Masum
                        Sakib
                      </a>
                    </span>
                    <span className="date">
                      <img src="assets/img/icons/calendar.svg" alt="calendar" />{" "}
                      10 Aug 2024
                    </span>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Navigating the Job Market: Tips for Job Seekers
                    </a>
                  </h4>
                </div>
                {/* <!-- single blog item end --> */}
              </div>
              {/* <!-- pagination --> */}
              <div className="cm-site-pagination">
                <nav aria-label="pagination-area">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" tabIndex="0">
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
            {/* <!-- blog content end --> */}
          </div>
        </div>
      </div>
      {/* <!-- content section end --> */}
    </>
  );
};

export default Blog;
