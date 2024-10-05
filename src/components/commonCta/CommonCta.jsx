import React from "react";
import "./commoncta.scss";
import { Link } from "react-router-dom";
import { orangeRightArrow, whiteRightArrow } from "../../images";

const CommonCta = ({ link, linkText, linkCta, externalLink }) => {
  return (
    <>
      <section className="comm_cta_sec1">
        {linkCta ? (
          externalLink ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="cta_link"
            >
              <span className="cta_text">{linkText}</span>{" "}
              <img src={whiteRightArrow} alt="right arrow" className="white_right_arrow" />
              <img src={orangeRightArrow} alt="right arrow" className="orange_right_arrow" />
            </a>
          ) : (
            <Link to={link} className="cta_link">
              <span className="cta_text">{linkText}</span>{" "}
              <img src={whiteRightArrow} alt="right arrow" className="white_right_arrow" />
              <img src={orangeRightArrow} alt="right arrow" className="orange_right_arrow" />
            </Link>
          )
        ) : (
          <button className="cta_link">
            <span className="cta_text">{linkText}</span>{" "}
            <img src={whiteRightArrow} alt="right arrow" className="white_right_arrow" />
            <img src={orangeRightArrow} alt="right arrow" className="orange_right_arrow" />
          </button>
        )}
      </section>
    </>
  );
};

export default CommonCta;
