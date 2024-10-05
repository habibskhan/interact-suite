import React, { Suspense, lazy } from "react";
import "./acrossIndustries.scss";

const LazyAnimatedVideoBox = lazy(() =>
  import("../AnimatedVideoBox/AnimatedVideoBox")
);

const AcrossIndustries = ({ colData, columns, scrollRef }) => {
  return (
    <>
      <div className="across_ind" ref={scrollRef}>
        <div className="my_container">
          <div
            className={`across_row row ${
              columns ? columns : "row-cols-lg-5 row-cols-5"
            }`}
          >
            {colData.map((item, i) => (
              <div className="across_col col" key={i}>
                <div className="data_box">
                  <div className="icon_wrapper">
                    {/* <img
                      src={item.circleImg ? item.circleImg : acrossOuterBlueCircle}
                      alt="blue circle"
                      className="circle_icon"
                    />
                    <img src={item.icon} alt="blue circle" className="icon" /> */}
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyAnimatedVideoBox
                        videoSrc={item.icon}
                        vidClass="icon_video"
                      />
                    </Suspense>
                    {/* <video
                      muted
                      autoPlay
                      loop
                      playsInline
                      width="100%"
                      height="100%"
                      className="icon_video"
                    >
                      <source type="video/mp4" src={item.icon} />
                    </video> */}
                  </div>
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AcrossIndustries;
