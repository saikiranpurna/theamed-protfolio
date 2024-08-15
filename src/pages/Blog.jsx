import React from "react";
import ContentCircle from "../components/ContentCircle";

const Blog = () => {
  const data = [
    {
      name: "Purna Saikiran",
      date: "Jul 19, 2024",
      imgUrl: "assets/img/blog/quilljs.jpg",
      title:
        "Building a Custom Quill.js(Advanced) Text Editor with Social Media Embeds",
      url: "https://medium.com/@saikiransai949/building-a-custom-quill-js-advanced-text-editor-with-social-media-embeds-7becf0a2e733",
    },
    {
      name: "Purna Saikiran",
      date: "Jul 16, 2024",
      imgUrl: "assets/img/blog/quilljs.jpg",
      title:
        "Enhance Your React App’s Text Editing Skill with Quill.js(Basic): Step-by-Step Implementation",
      url: "https://medium.com/@saikiransai949/enhance-your-react-apps-text-editing-with-quill-js-basic-step-by-step-implementation-37a857aaf809",
    },
  ];
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
              <ContentCircle />
              <div className="cm-content-sub">
                <div className="icon">
                  <img
                    className="svg"
                    src="assets/img/icons/blog.svg"
                    alt="blog"
                  />
                </div>
                <p>News and Blogs</p>
              </div>
              <h1 className="main-title">
                The <span>Purna's</span> best <br />
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
                {data.map((item, index) => {
                  return (
                    <div className="single-blog-item" key={index}>
                      <a href={item.url} target="_blank" className="single-blog-item__single">
                        <img src={item.imgUrl} alt="blog" />
                      </a>
                      <div className="blog__meta">
                        <span className="author">
                          <a href="#">
                            <img src="assets/img/icons/user.svg" alt="user" />{" "}
                            {item.name}
                          </a>
                        </span>
                        <span className="date">
                          <img
                            src="assets/img/icons/calendar.svg"
                            alt="calendar"
                          />{" "}
                          {item.date}
                        </span>
                      </div>
                      <h4 className="blog-title" >
                        <a href={item.url} target="_blank">{item.title.slice(0,75) + '...'}</a>
                      </h4>
                    </div>
                  );
                })}
              </div>
              {/* <!-- pagination --> */}
              {/* <div className="cm-site-pagination">
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
              </div> */}
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
