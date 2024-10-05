import React from "react";
import "./tabs.scss";
import { greyArrow, whiteArrow } from "../../images";

const Tabs = ({ tabName, isTab, setIsTab }) => {
  return (
    <>
      <div className="tab_section">
        <div className="row tab_row">
          {tabName.map((tab, i) => (
            <div className="col-md-6 tab_col" key={i}>
              <div
                className={`tab_wrapper ${isTab === i ? "active" : ""}`}
                onClick={() => setIsTab(i)}
              >
                <img
                  src={isTab === i ? whiteArrow : greyArrow}
                  alt="arrow"
                  className={`arrow ${isTab === i ? "active" : ""}`}
                />
                <h4 className={`tab_name ${isTab === i ? "active" : ""}`}>
                  {tab.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
