import React, { Suspense, lazy } from "react";
import "./whyUseInteractAVProgress.scss";

const LazyAnimatedVideoBox = lazy(() =>
  import("../AnimatedVideoBox/AnimatedVideoBox")
);

const WhyUseInteractAVProgress = ({ progressData, columns }) => {
  return (
    <>
      <div className="whyuse_progress">
        <div className="my_container">
          <div
            className={`row data_row row-cols-lg-5 row-cols-md-3 row-cols-2`}
          >
            {progressData.map((item, i) => (
              <div className={`data_col ${columns ? columns : "col"}`} key={i}>
                <div className="data_box">
                  <div className="img_wrapper">
                    {/* <img
                      src={orangeCircleCommon}
                      alt="orange circle"
                      className="org_circle"
                    />
                    <img
                      src={blueCircleCommon}
                      alt="blue circle"
                      className="blue_circle"
                    /> 
                    <div className="circle_text">
                      <h4 className="data_percent">{item.percent}</h4>
                    </div>*/}
                      <Suspense fallback={<div>Loading...</div>}>
                        <LazyAnimatedVideoBox videoSrc={item.video} vidClass="vid" />
                      </Suspense>
                    {/* <video
                      className="vid"
                      muted
                      autoPlay
                      loop
                      playsInline
                      width="100%"
                      height="100%"
                    >
                      <source type="video/mp4" src={item.video} />
                    </video> */}
                  </div>
                  <div className="content_wrapper">
                    <p
                      className="desc"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUseInteractAVProgress;
