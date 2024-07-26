import React, { useEffect, useState } from "react";
import { CURRENT_TAB } from "../common/constants";
import { BiHome } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { TbArrowsUpDown } from "react-icons/tb";
import { FiFolderPlus } from "react-icons/fi";
import { GiSchoolBag } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FiPenTool } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useNavigate,useLocation } from "react-router-dom";

const SiteNavigation = (props) => {
  const [activeTab, setActiveTab] = useState("/");
  const navigate = useNavigate();
  const handleStore = (path = "/") => {
    setActiveTab(path)
    navigate(path);
  };
  const location = useLocation();
  useEffect(() => {
    const getPath = sessionStorage.getItem(CURRENT_TAB) || "/";
    // handleStore('/'+location.pathname);
    console.log(location.pathname)
  }, []);
  const data = [
    {
      title: "Home",
      url: "/",
      image: BiHome,
    },
    {
      title: "About",
      url: "/about",
      image: FaUserGraduate,
    },
    {
      title: "Service",
      url: "/service",
      image: TbArrowsUpDown,
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      image: FiFolderPlus,
    },
    {
      title: "Education",
      url: "/education",
      image: GiSchoolBag,
    },
    {
      title: "Pricing",
      url: "/pricing",
      image: FaMoneyCheckDollar,
    },
    {
      title: "Blog",
      url: "/blog",
      image: FiPenTool,
    },
    {
      title: "Contact",
      url: "/contact",
      image: IoChatboxEllipsesOutline,
    },
  ];

  return (
    //   {/* <!-- site navigation --> */}
    <div className="cm-navigation">
      <div className="cm-header-menu-bar sticky-top mode">
        <div
          className="icon offcanvase"
          onClick={() => props.setShowMenu(true)}
        >
          <img src="assets/img/icons/bars.svg" alt="menu" className="svg" />
        </div>
      </div>
      {/* <!-- tab item --> */}
      <div className="cm-tab-item ">
        <div className="tab-item-wrapper">
          <div className="tab-action-item mode">
            <ul>
              {data.map((item, index) => {
                const LogoComponent = item.image;
                return (
                  <li key={index}>
                    <figure
                      data-title={item.title}
                      className={`link ${activeTab == item.url ? "active" : ""}`}
                      onClick={() => handleStore(item.url)}
                    >
                      <LogoComponent width="18" height="16" className="svg" />
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cm-social-link-text">
            <ul>
              <li>
                <a href="https://www.facebook.com/om.saikiran" target="_blank">
                  fb
                </a>
              </li>
              <li>
                <a href="https://twitter.com/purna_saik30757" target="_blank">
                  tw
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/purna_saikiran/"
                  target="_blank"
                >
                  in
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/purna-saikiran"
                  target="_blank"
                >
                  ln
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- language switcher --> */}
      <div className="cm-language-switcher mode">
        <div className="language-switcher">
          <span>EN</span>
        </div>
      </div>
    </div>
    // {/* <!-- site navigation end --> */}
  );
};

export default SiteNavigation;
