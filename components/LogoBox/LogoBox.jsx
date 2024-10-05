import React from "react";
import "./logoBox.scss";
import { useWindowSize } from "react-use";

const LogoBox = ({ logos, columns }) => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="logobox_container">
        <div className="row logo_row">
          {logos.map((logo, i) => (
            <div
              className={`logo_col ${
                columns ? columns : "col-lg-4 col-md-6 col-6"
              }`}
              key={i}
            >
              <a href={logo.link} target="_blank" rel="noreferrer">
              <div className="logo_boxes">
                <img
                  src={width <= 767 && logo.mbImg ? logo.mbImg : logo.img}
                  alt={logo.alt}
                  className="logo"
                />
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoBox;
