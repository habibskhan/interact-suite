import React, { Suspense, lazy } from "react";
import "./personCommunication.scss";

const LazyAnimatedVideoBox = lazy(() =>
  import("../AnimatedVideoBox/AnimatedVideoBox")
);

const PersonCommunication = ({ communicationData, column }) => {
  return (
    <>
      <div className="interact_comm">
        <div className="my_container">
          <h2 className="comm_heading">Interact AV</h2>
          <div className="row comm_row">
            {communicationData.map((item, i) => (
              <div
                className={`${column ? column : "col-lg-3 col-6"} comm_col`}
                key={i}
              >
                <div className="data_box">
                  <div className="img_wrapper">
                    {/* <img
                      src={orangeCircleCommon}
                      alt="orange circle"
                      className="org_circle"
                    />
                    <img
                      src={blueGlowCircle}
                      alt="blue circle"
                      className="blue_circle"
                    /> */}
                     <Suspense fallback={<div>Loading...</div>}>
                        <LazyAnimatedVideoBox videoSrc={item.vid} vidClass="circle_video" />
                      </Suspense>
                    {/* <video
                      muted
                      autoPlay
                      loop
                      playsInline
                      width="100%"
                      height="100%"
                      className="circle_video"
                    >
                      <source type="video/mp4" src={item.vid} />
                    </video> */}
                    <div className="comm_icon_wrapper">
                      {/* <img
                        src={item.img}
                        alt={item.alt}
                        className="comm_icon"
                      /> */}
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

export default PersonCommunication;
