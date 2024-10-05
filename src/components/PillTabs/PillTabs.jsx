import React from "react";
import "./pillTabs.scss";
import { useWindowSize } from "react-use";

const PillTabs = ({ pillTabList, setIsTab, isTab }) => {
  const { width } = useWindowSize();

  const handleProductTabChange = (e) => {
    const productIndexId = e.target.selectedOptions[0].dataset.productindexid;
    setIsTab(Number(productIndexId));
  };

  return (
    <>
      <div className="tab_pills_wrapper">
        {width >= 992 ? (
          <div className="pill_wrapper">
            {pillTabList.map((btn, i) => (
              <button
                className={`pill_btn ${isTab === i ? "active" : ""}`}
                onClick={() => setIsTab(i)}
                key={i}
              >
                {btn.tabName}
              </button>
            ))}
          </div>
        ) : (
          <div className="select_wrapper">
            <select className="pill_btn" onChange={handleProductTabChange}>
              {pillTabList.map((btn, i) => (
                <option value={btn.tabName} data-productindexid={i} key={i}>
                  {btn.tabName}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </>
  );
};

export default PillTabs;
