import React from "react";

const Author = () => {
  return (
    //   {/* <!-- author --> */}
    <div className="cm-author-view mode sticky-top">
      <div className="cm-author-content ">
        <div className="cm-author-image m-img">
          <img src="assets/img/author/author.jpg" alt="author" />
          {/* <a href="#" className="author-dribble-link">
                              <img src="assets/img/icons/dribble.svg" alt="">
                          </a> */}
        </div>
        <div className="cm-author-info">
          <h3 className="cm-author-name">Purna Saikiran</h3>
          <span className="cm-author-designation">Web Design & Developer</span>
        </div>
        <div className="cm-author-hiring">
          <a href="/contact" className="cm-btn primary">
            Hire Me!
          </a>
          <a href="#" className="cm-btn">
            Download CV
          </a>
        </div>
        <div className="cm-author-description">
          <p>
            Specializing in strategy, improving design maturity & design
            systems.
          </p>
        </div>
        <div className="cm-author-social-links">
          <a href="#" className="social-links">
            <img
              src="assets/img/icons/facebook.svg"
              alt="facebook"
              height="18"
              width="18"
              className="svg"
            />
          </a>
          <a href="#" className="social-links">
            <img
              src="assets/img/icons/twitter.svg"
              alt="twitter-x"
              height="18"
              width="18"
              className="svg"
            />
          </a>
          <a href="#" className="social-links">
            <img
              src="assets/img/icons/instagram.svg"
              alt="instagram"
              height="18"
              width="18"
              className="svg"
            />
          </a>
          <a href="#" className="social-links">
            <img
              src="assets/img/icons/linkedin.svg"
              alt="linkedin"
              height="18"
              width="18"
              className="svg"
            />
          </a>
        </div>
      </div>
    </div>
    // {/* <!-- author end --> */}
  );
};

export default Author;
