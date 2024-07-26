import React from "react";
import ContentCircle from "../components/ContentCircle";

const Contact = () => {
  let textPath = `<textPath xlink:href="#circle">
    Purna Sai Web Design and Development
  </textPath>`;
  return (
    <>
      {/* <!-- content section --> */}
      <div
        className="cm-content-area"
        data-barba="container"
        data-barba-namespace="contact"
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
                    src="assets/img/icons/contact.svg"
                    alt=""
                  />
                </div>
                <p>Contact our office</p>
              </div>
              <h1 className="main-title">
              Get in  <span>Touch</span>
                <u>
                  <img src="assets/img/content/line.svg" alt="" />
                </u>
              </h1>
            </div>

            {/* <!-- contact content --> */}
            <div className="cm-contact-area">
              <div className="cm-contact-method">
                <h3 className="section-title">Reach Out:- </h3>
                <div className="cm-contact-method__content">
                  {/* <!-- single contact item --> */}
                  <div className="single-contact-item">
                    <div className="single-contact-item__top">
                      <div className="cm-icon">
                        <img
                          src="assets/img/icons/phone-call.svg"
                          alt="call"
                          height="50"
                          width="50"
                        />
                      </div>
                      <div className="cm-text">
                        <p>Contact Phone</p>
                      </div>
                    </div>
                    <div className="single-contact-item__bottom">
                      <a href="callto:5555">+91 9491279543</a>
                      <a href="callto:5555">+91 7997738131</a>
                    </div>
                  </div>
                  {/* <!-- single contact item end --> */}
                  {/* <!-- single contact item --> */}
                  <div className="single-contact-item">
                    <div className="single-contact-item__top">
                      <div className="cm-icon">
                        <img
                          src="assets/img/icons/mail-open.svg"
                          alt="mail-open"
                          height="50"
                          width="50"
                        />
                      </div>
                      <div className="cm-text">
                        <p>Contact Email</p>
                      </div>
                    </div>
                    <div className="single-contact-item__bottom">
                      <a href="mailto:saikiransai949@gmail.com">
                        saikiransai949@gmail.com
                      </a>
                      <a href="mailto:saikiransai543@gmail.com">
                        saikiransai543@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* <!-- single contact item end --> */}
                  {/* <!-- single contact item --> */}
                  <div className="single-contact-item">
                    <div className="single-contact-item__top">
                      <div className="cm-icon">
                        <img
                          src="assets/img/icons/location-dot.svg"
                          alt="location"
                          height="50"
                          width="50"
                        />
                      </div>
                      <div className="cm-text">
                        <p>Contact Location</p>
                      </div>
                    </div>
                    <div className="single-contact-item__bottom">
                      <p className="location-text">
                        Westren Aqua, Hyderabad, <br />
                        Telangana, India
                      </p>
                    </div>
                  </div>
                  {/* <!-- single contact item end --> */}
                </div>
              </div>
              {/* <!-- location map --> */}
              <div className="cm-location-map">
                <h3 className="section-title">Location Map</h3>
                <div className="cm-location-map__content">
                  <div className="cm-map-iframe">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1560352618667!2d78.3665527259347!3d17.452244283446085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c444f936a9%3A0xf95512f160665a78!2sWestern%20Aqua%2C%20Whitefields%2C%20HITEC%20City%2C%20Kondapur%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1713357576893!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* <!-- contact form --> */}
              <div className="cm-contact-form">
                <h3 className="section-title">Talk to Us</h3>
                <div className="cm-contact-form__content">
                  <form
                    action="mail-sender.php"
                    method="POST"
                    className="cm-form"
                  >
                    <div className="single-input">
                      <div className="single-input__item">
                        <label htmlFor="fname">
                          Your first name <span>*</span>
                        </label>
                        <input type="text" name="fname" id="fname" required />
                      </div>
                      <div className="single-input__item">
                        <label htmlFor="lname">
                          Your last name <span>*</span>
                        </label>
                        <input type="text" name="lname" id="lname" required />
                      </div>
                    </div>
                    <div className="single-input">
                      <div className="single-input__item">
                        <label htmlFor="email">
                          Your email address <span>*</span>
                        </label>
                        <input type="email" name="email" id="email" required />
                      </div>
                      <div className="single-input__item">
                        <label htmlFor="phone">
                          Your phone number <span>*</span>
                        </label>
                        <input type="number" name="phone" id="phone" required />
                      </div>
                    </div>
                    <div className="single-input">
                      <div className="single-input__item w-full">
                        <label htmlFor="msg">
                          Your message <span>*</span>
                        </label>
                        <textarea name="msg" id="msg" required></textarea>
                      </div>
                    </div>
                    <button type="submit" className="cm-btn primary">
                      Submit Now
                    </button>
                  </form>
                  {/* <!-- message sending notification --> */}
                  <div className="contact__msg mt-40"></div>
                </div>
              </div>
            </div>
            {/* <!-- contact content end --> */}
          </div>
        </div>
      </div>
      {/* <!-- content section end --> */}
    </>
  );
};

export default Contact;
