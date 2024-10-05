import React from "react";
import "./footer.scss";
import {
  facebookIcon,
  instagramIcon,
  interactFooterLogo,
  linkedInIcon,
  youtubeIcon,
} from "../../images";
import { eventsURL, faqURL, homepageURL, ppURL, termsURL } from "../helpers/constant-words";
import { Link } from "react-router-dom";

const Footer = () => {
  const currenyear = new Date();
  return (
    <>
      <footer className="footer_sec1">
        <div className="row footer_row">
          <div className="col-md-4 footer_col">
            <div className="add_wrapper">
              <Link to={homepageURL}>
                <img
                  src={interactFooterLogo}
                  alt="logo"
                  className="footer_logo"
                />
              </Link>
              <div className="data_wrapper">
                <p className="section_desc add_head">Address :</p>
                <a href="#" rel="noreferrer" className="add_link">
                  <p className="section_desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 footer_col">
            <div className="add_wrapper">
              <p className="section_desc footer_title">MORE INFORMATION</p>
              <ul className="data_wrapper">
                {/* <li className="link_list">
                  <Link className="section_desc footer_link">Careers</Link>
                </li> */}
                <li className="link_list">
                  <Link className="section_desc footer_link" to={eventsURL}>
                    Events
                  </Link>
                </li>
                <li className="link_list">
                  <Link className="section_desc footer_link" to={faqURL}>
                    FAQs
                  </Link>
                </li>
                <li className="link_list">
                  <Link className="section_desc footer_link" to={termsURL}>
                    Terms & Conditions
                  </Link>
                </li>
                <li className="link_list">
                  <Link className="section_desc footer_link" to={ppURL}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 footer_col">
            <div className="add_wrapper">
              <p className="section_desc footer_title">MORE INFORMATION</p>
              <div className="social_wrapper">
                <a href="" rel="noreferrer" className="social_link">
                  <img
                    src={youtubeIcon}
                    alt="youtube"
                    className="social_icon"
                  />
                </a>
                <a href="" rel="noreferrer" className="social_link">
                  <img
                    src={facebookIcon}
                    alt="youtube"
                    className="social_icon facebook_icon"
                  />
                </a>
                <a href="" rel="noreferrer" className="social_link">
                  <img
                    src={instagramIcon}
                    alt="youtube"
                    className="social_icon"
                  />
                </a>
                <a href="" rel="noreferrer" className="social_link">
                  <img
                    src={linkedInIcon}
                    alt="youtube"
                    className="social_icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_wrapper">
          <p className="copyright_text">
            Copyright {currenyear.getFullYear()}, Interctive suite |
            <a
              href="https://www.togglehead.in/"
              // target="_blank"
              // rel="noreferrer"
              className="copyright_crafted"
            >
              {" "}
              Crafted by Togglehead
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
