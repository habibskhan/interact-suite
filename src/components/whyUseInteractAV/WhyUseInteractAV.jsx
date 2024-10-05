import React from "react";
import "./whyUseInteractAV.scss";

const WhyUseInteractAV = ({ cardData, columns }) => {
  return (
    <>
      <section className="whyuse_sec">
        <div className="my_container">
          <div className="row cardbox_row">
            {cardData.map((item, i) => (
              <div
                className={`cardbox_col ${
                  item.col
                    ? item.col
                    : columns
                    ? columns
                    : "col-lg-4 col-md-4 col-6"
                }`}
                style={{
                  padding:
                    (typeof item.col === "string" &&
                      item.col.includes("col-12")) ||
                    (typeof item.col === "string" &&
                      item.col.includes("col-md-12")) ||
                    (typeof item.col === "string" &&
                      item.col.includes("col-lg-12"))
                      ? "0"
                      : "",
                }}
                key={i}
              >
                <div
                  className="box"
                  // id={`box${i+1}`}
                >
                  <div className="img_wrapper">
                    <img src={item.img} alt="icon" className="card_img" />
                  </div>
                  <div className="content_wrapper">
                    <h4
                      className="card_text"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUseInteractAV;
