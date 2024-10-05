import React, { useEffect, useState } from "react";
import "./header.scss";
import { useLocation, useWindowSize } from "react-use";
import { Link, NavLink } from "react-router-dom";
import {
  avURL,
  awardsURL,
  caseStudiesURL,
  contactUsURL,
  customerAnalyticsURL,
  cxURL,
  dmURL,
  dxURL,
  homepageURL,
  industriesAndUseCasesURL,
  ourStoryURL,
  partnersURL,
} from "../helpers/constant-words";
import {
  downArrow,
  downloadIcon,
  greyArrow,
  interactFooterLogo,
  interactHeaderLogo,
  whiteArrow,
} from "../../images";
import HeaderNavItem from "./HeaderNavItem";
const body = document.querySelector("body");

const menuData = [
  {
    id: 1,
    type: "text",
    mainTitle: "Our story",
    mainLink: ourStoryURL,
  },
  {
    id: 2,
    type: "text",
    mainTitle: "Product & Solutions",
    // mainLink : "",
    dropdown: [
      {
        dropDownTitle: "Interact DX",
        dropDownLink: dxURL,
      },
      {
        dropDownTitle: "Interact CX",
        dropDownLink: cxURL,
      },
      {
        dropDownTitle: "Interact AV",
        dropDownLink: avURL,
      },
      {
        dropDownTitle: "Interact DM",
        dropDownLink: dmURL,
      },
      {
        dropDownTitle: "Analytics",
        dropDownLink: customerAnalyticsURL,
      },
    ],
  },
  {
    id: 3,
    type: "text",
    mainTitle: "Industries & Use cases",
    mainLink: industriesAndUseCasesURL,
  },
  {
    id: 4,
    type: "text",
    mainTitle: "Awards",
    mainLink: awardsURL,
  },
  {
    id: 5,
    type: "text",
    mainTitle: "Case studies",
    mainLink: caseStudiesURL,
  },
  {
    id: 6,
    type: "text",
    mainTitle: "Partners",
    mainLink: partnersURL,
  },
  {
    id: 7,
    type: "text",
    mainTitle: "Contact us",
    mainLink: contactUsURL,
  },
];

const Header = () => {
  const [isBg, setIsbg] = useState(false);
  const { pathname: locationPathname } = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [navActiveIndex, setNavActiveIndex] = useState(null);
  const { width } = useWindowSize();
  const [isHover, setIsHover] = useState();
  const [isDropHover, setIsDropHover] = useState();
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const navlinkList = menuData.map((nav, i) => (
    <li className="link_item" key={`menu-item-${menuData[i].id}`}>
      {nav.dropdown ? (
        <div
          className={`dropdown ${isHover === i ? "active" : ""}`}
          onMouseOver={() => setIsHover(i)}
          onMouseOut={() => setIsHover(false)}
        >
          <span className={`nav_tab ${isDropdownActive ? "active" : ""}`}>
            <span>{nav.mainTitle}</span>
            <img src={downArrow} alt="down arrow" className="dropdown_arrow" />
          </span>
          <ul className="dropdown_menu_wrapper">
            {nav.dropdown.map((drop, index) => (
              <li
                className="dropdown_menu"
                onMouseOver={() => setIsDropHover(index)}
                onMouseOut={() => setIsDropHover(false)}
                key={index}
              >
                <Link
                  className={`dropdown_menu_link ${
                    isDropHover === index ? "active" : ""
                  }`}
                  to={drop.dropDownLink}
                >
                  <img
                    src={isDropHover === index ? whiteArrow : greyArrow}
                    alt="arrow"
                    className={`arrow`}
                  />
                  <p className="title">{drop.dropDownTitle}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav_tab active" : "nav_tab"
            }
            to={nav.mainLink}
          >
            {nav.mainTitle}
          </NavLink>
        </div>
      )}
    </li>
  ));

  useEffect(() => {
    if (
      window.location.pathname === dxURL ||
      window.location.pathname === cxURL ||
      window.location.pathname === avURL ||
      window.location.pathname === dmURL ||
      window.location.pathname === customerAnalyticsURL
    ) {
      setIsDropdownActive(true);
    } else {
      setIsDropdownActive(false);
    }
    setIsHover(false);
  }, [locationPathname]);

  useEffect(() => {
    body.style.overflow = "auto";
    // if (locationPathname === "/") {
    //   setIsbg(false);
    // } else {
    //   setIsbg(true);
    // }
    setIsMenuActive(false);
  }, [locationPathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });

  const handleScroll = () => {
    // if (window.location.pathname === "/")
    if (window.scrollY > 60) {
      setIsbg(true);
    } else {
      setIsbg(false);
    }
  };

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHamburgerClick = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  };

  const handleNavIndex = (i) => {
    if (navActiveIndex === i) {
      setNavActiveIndex(null);
    } else {
      setNavActiveIndex(i);
    }
  };

  useEffect(() => {
    setNavActiveIndex(false);
  }, [isMenuActive]);

  return (
    <>
      <header className={`header`}>
        {width >= 1024 ? (
          <div className={`navlinks_wrapper ${isBg ? "active" : ""}`}>
            <div className="logo_wrapper">
              <Link to={homepageURL}>
                <img
                  className="logo_img"
                  src={isBg ? interactFooterLogo : interactHeaderLogo}
                  alt="interact Logo"
                  onClick={scrollHandler}
                />
              </Link>
            </div>
            <div className="link_wrapper">
              <ul className="link_list">{navlinkList}</ul>
              <Link className="down_link">
                <img
                  src={downloadIcon}
                  alt="download icon"
                  className="download_icon"
                />
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="my_container">
              <div className="hamburger_link_wrapper">
                <div
                  className={`hamburger_wrapper ${
                    isMenuActive ? "active" : ""
                  }`}
                >
                  <div className="logo_wrapper">
                    <Link className="logo_link" to={homepageURL}>
                      <img
                        src={interactFooterLogo}
                        alt="interact logo"
                        className="interact_logo img-fluid"
                      />
                    </Link>
                  </div>
                  <div
                    className={`hamburger_lines ${
                      isMenuActive ? "active" : "" || isBg ? "black" : ""
                    }`}
                    onClick={handleHamburgerClick}
                  >
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                  </div>
                </div>
                {!isMenuActive && (
                  <Link className="down_link">
                    <img
                      src={downloadIcon}
                      alt="download icon"
                      className="download_icon"
                    />
                  </Link>
                )}
              </div>
            </div>
            <div
              className={`mobile_header_wrapper ${
                isMenuActive ? "active" : ""
              }`}
            >
              <ul className="mobile_links_wrapper">
                {menuData.map((navData, i) => (
                  <HeaderNavItem
                    navData={navData}
                    key={parseInt(navData.id)}
                    arrIndex={i}
                    handleNavIndex={handleNavIndex}
                    navActiveIndex={navActiveIndex}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
