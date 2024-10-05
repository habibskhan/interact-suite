import React from "react";
import "./smartData.scss";
import { smartDataBack } from "../../images";
import { useWindowSize } from "react-use";

const SmartData = ({ smartDataCol, columns }) => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="smart_data">
        <div className="row smartdata_row">
          {smartDataCol.map((item, i) => (
            <div
              className={`${
                item.col ? item.col : columns ? columns : "col-lg-6"
              } smartdata_col`}
              key={i}
            >
              <div className="smart_box">
                <img
                  src={smartDataBack}
                  alt="blue background"
                  className="blue_back"
                />
                <div className="img_wrapper">
                  <img
                    src={width <= 767 && item.mbImg ? item.mbImg : item.img}
                    alt={item.alt}
                    className="smart_img"
                  />
                  <h2
                    className="title card_title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h2>
                </div>
                <div className="content_wrapper">
                  {width > 991 && (
                    <h2
                      className="title"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h2>
                  )}
                  <p className="section_desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SmartData;
