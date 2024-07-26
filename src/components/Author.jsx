import React from "react";
import { Link } from "react-router-dom";

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
          <span className="cm-author-designation">Fullstack Developer</span>
        </div>
        <div className="cm-author-hiring">
          <Link to="/contact" className="cm-btn primary">
            Hire Me!
          </Link>
          <a href="/Purna_Saikiran_Resume.pdf" className="cm-btn" download>
            Download CV
          </a>
        </div>
        <div className="cm-author-description">
          <p>
            Combining functionality and aesthetics through efficient development
            frameworks with a touch of my magic!
          </p>
        </div>
        <div className="cm-author-social-links">
          <a
            href="https://www.facebook.com/om.saikiran"
            target="_blank"
            className="social-links"
          >
            <img
              src="assets/img/icons/facebook.svg"
              alt="facebook"
              height="18"
              width="18"
              className="svg"
            />
          </a>
          <a
            href="https://twitter.com/purna_saik30757"
            target="_blank"
            className="social-links"
          >
            <img
              src="assets/img/icons/twitter.svg"
              alt="twitter-x"
              height="18"
              width="18"
              className="svg"
            />
          </a>
          <a
            href="https://www.instagram.com/purna_saikiran/"
            target="_blank"
            className="social-links"
          >
            <img
              src="assets/img/icons/instagram.svg"
              alt="instagram"
              height="18"
              width="18"
              className="svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/purna-saikiran"
            target="_blank"
            className="social-links"
          >
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
