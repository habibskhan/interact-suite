import React from "react";
import "./tabs.scss";
import { greyArrow, whiteArrow } from "../../../../images";

const Tabs = ({ tabName, isTab, setIsTab }) => {
  return (
    <>
      <div className="commModel_tab_section">
        <div className="row tab_row">
          {tabName.map((tab, i) => (
            <div className="col-md-6 tab_col" key={i}>
              <div
                className={`tab_wrapper ${isTab === i ? "active" : ""}`}
                onClick={() => setIsTab(i)}
              >
                <h4
                  className={`tab_title ${isTab === i ? "active" : ""}`}
                  dangerouslySetInnerHTML={{ __html: tab.title }}
                ></h4>
                <img
                  src={isTab === i ? whiteArrow : greyArrow}
                  alt="arrow"
                  className={`arrow ${isTab === i ? "active" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
