import React from "react";
import { NavLink } from "react-router-dom";
import { greyArrow, whiteArrow } from "../../images";

const HeaderNavItem = ({
  navData,
  navActiveIndex,
  handleNavIndex,
  arrIndex,
}) => {

  if (navData.dropdown) {
    return (
      <li className="nav_item">
        <div
          className="nav_link_wrapper"
          onClick={() => handleNavIndex(arrIndex)}
        >
          <span
            className={`nav_link ${
              navActiveIndex === arrIndex ? "dropActive" : ""
            }`}
          >
            <img src={greyArrow} alt="arrow" className="arrow" />
            <img src={whiteArrow} alt="arrow" className="active_arrow" />
            {navData.mainTitle}
          </span>
        </div>

        <div
          className={`dropdown_box ${
            navActiveIndex === arrIndex ? "active" : ""
          }`}
        >
          {navData.dropdown.map((data, i) => (
            <div className="dropdown_list_item" key={i}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav_link active" : "nav_link"
                }
                to={data.dropDownLink}
              >
                <img src={whiteArrow} alt="arrow" className="active_arrow" />
                <img src={greyArrow} alt="arrow" className="arrow" />
                {data.dropDownTitle}
              </NavLink>
            </div>
          ))}
        </div>
      </li>
    );
  }

  return (
    <li className="nav_item">
      {navData.linktype === "external" ? (
        <a
          className="nav_link"
          href={navData.mainLink}
          target="_blank"
          rel="noreferrer"
        >
          {navData.mainTitle}
        </a>
      ) : (
        <>
          <NavLink
            className={({ isActive }) => {
              return `${isActive ? "nav_link active" : "nav_link"}`;
            }}
            to={navData.mainLink}
          >
            <img src={greyArrow} alt="arrow" className="arrow" />
            <img src={whiteArrow} alt="arrow" className="active_arrow" />
            {navData.mainTitle}
          </NavLink>
        </>
      )}
    </li>
  );
};

export default HeaderNavItem;
