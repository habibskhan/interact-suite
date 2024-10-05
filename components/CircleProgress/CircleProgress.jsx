import React, { Suspense, lazy } from "react";
import "./circleProgress.scss";

const LazyAnimatedVideoBox = lazy(() =>
  import("../AnimatedVideoBox/AnimatedVideoBox")
);

const CircleProgress = ({circleData}) => {
  return (
    <>
      <div className="data_container">
        <div className="my_container">
          <div className="row data_row">
            {circleData.map((item, i) => (
              <div className="col-md-4 col-6 data_col" key={i}>
                <div className="data_box">
                  <div className="img_wrapper">
                    {/* <img
                      src={orangeCircle}
                      alt="orange circle"
                      className="org_circle"
                    />
                    <img
                      src={blueGlowCircle}
                      alt="blue circle"
                      className="blue_circle"
                    /> */}
                    {/* <div className="circle_text">
                      <p className="data_text">Upto</p>
                      <h4 className="data_percent">{item.percent}</h4>
                    </div> */}
                    <div className="circular_video">
                      <Suspense fallback={<div>Loading...</div>}>
                        <LazyAnimatedVideoBox videoSrc={item.vid} />
                      </Suspense>
                      {/* <video
                        id="vid"
                        muted
                        autoPlay
                        loop
                        playsInline
                        width="100%"
                        height="100%"
                      >
                        <source type="video/mp4" src={item.vid} />
                      </video> */}
                    </div>
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

export default CircleProgress;
