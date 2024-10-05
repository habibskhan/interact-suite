import React from "react";
import "./commonBanner.scss";
import { homepageURL } from "../helpers/constant-words";
import { Link } from "react-router-dom";
import { homeIcon, rightWave, whitesmallwave } from "../../images";

const CommonBanner = ({
  banner,
  title,
  link1,
  link2,
  linkText1,
  linkText2,
}) => {
  return (
    <>
      <div className="com_banner_container">
        {/* <img src={rightWave} alt="wave" className="right_wave" /> */}
        <video
          muted
          autoPlay
          loop
          playsInline
          width="100%"
          className="right_wave"
        >
          <source type="video/mp4" src={whitesmallwave} />
        </video>
        <img src={banner} alt="banner" className="banner" />
        <div className="my_container">
          <div className="breadcrumb">
            <div className="link_wrapper">
              <Link to={homepageURL}>
                <img src={homeIcon} alt="home" className="home_icon" />
              </Link>
              <Link
                to={link1}
                className={`link space ${!linkText2 ? "disabled" : ""}`}
              >
                {" > " + linkText1}
              </Link>
              {linkText2 && (
                <Link to={link2} className={`link disabled`}>
                  {" > " + linkText2}
                </Link>
              )}
            </div>
          </div>
          <div className="content_wrapper">
            <h1
              className="banner_heading"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonBanner;
