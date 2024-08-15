import React from "react";
import ContentCircle from "../components/ContentCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from 'swiper/modules';
const About = () => {
  const SliderData = [
    {
      url: "assets/img/lib/react.png",
      title: "react",
    },
    {
      url: "assets/img/lib/html.png",
      title: "html5",
    },
    {
      url: "assets/img/lib/css.png",
      title: "css3",
    },
    {
      url: "assets/img/lib/js.png",
      title: "javascript",
    },
    {
      url: "assets/img/lib/next.png",
      title: "next",
    },
    {
      url: "assets/img/lib/redux.png",
      title: "redux",
    },
    {
      url: "assets/img/lib/node.png",
      title: "node",
    },
  ];

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
              <ContentCircle />
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
                <span>MERN</span> Stack Expert & <span>Full-Stack</span>{" "}
                Developer
                <br />
                <u className="cm-inline">
                  <img src="assets/img/content/line.svg" alt="" />
                </u>
              </h1>
            </div>
            {/* <!-- about brief --> */}
            <div className="cm-about-brief">
              <div className="cm-about-left">
                <p>
                  As a highly skilled MERN Stack developer, I, Purna Saikiran,
                  bring a passion for building scalable, efficient, and dynamic
                  web applications to the table.
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
                  With a strong foundation in MongoDB, Express.js, React.js, and
                  Node.js, I excel at crafting seamless user experiences that
                  meet the needs of clients and organizations alike. My
                  expertise in JavaScript and its ecosystem enables me to tackle
                  complex projects with ease, and my dedication to staying
                  up-to-date with the latest industry trends ensures that my
                  skills are always in demand.
                </p>
                <p className="cm-margin">
                  I work closely with clients to understand their needs and
                  goals, and I am committed to providing transparent and regular
                  updates throughout the development process. Whether it's
                  working with designers to craft a seamless user experience or
                  collaborating with back-end developers to integrate APIs, I am
                  a team player who is dedicated to delivering high-quality
                  solutions that meet the needs of all stakeholders.
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
                <Swiper
                  spaceBetween={40}
                  slidesPerView={3}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      autoplay: {
                        delay: 1500,
                        disableOnInteraction: false,
                      },
                    },
                    768: {
                      slidesPerView: 2,
                      autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                      },
                    },
                    1024: {
                      slidesPerView: 3,
                      autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                      },
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  // onSlideChange={() => console.log("slide change")}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  {SliderData.map((item, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <div className="single-project">
                        <img src={item.url} alt={item.title} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
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
