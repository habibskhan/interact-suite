import React, { Suspense, lazy } from "react";
import "./analytics.scss";

const LazyAnimatedVideoBox = lazy(() =>
  import("../AnimatedVideoBox/AnimatedVideoBox")
);

const Analytics = ({ data, columns }) => {
  return (
    <>
      <section className="analytics_wrapper">
        {/* <div className="my_container"> */}
        <div className="row customer_row">
          {data.map((item, i) => (
            <div
              className={`${
                columns ? columns : "col-lg-3 col-md-4 col-6"
              } customer_col`}
              key={i}
            >
              <div className="customer_box">
                <img src={item.img} alt={item.alt} className="customer_vid" />
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyAnimatedVideoBox videoSrc={item.vid} vidClass="customer_vid" />
                </Suspense>
                {/* <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  width="100%"
                  height="100%"
                  className="customer_vid"
                >
                  <source type="video/mp4" src={item.vid} />
                </video> */}
                <div className="content_wrapper">
                  <h4
                    className="customer_title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h4>
                  <p
                    className="customer_desc"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Analytics;
