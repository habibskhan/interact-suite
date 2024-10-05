import React from "react";
import "./videoAudio.scss";
import { polygon6 } from "../../images";
import { useWindowSize } from "react-use";

const VideoAudio = ({ data, columns5 }) => {
  const { width } = useWindowSize();
  return (
    <>
      <section
        className={`videoaudio_sec ${columns5 ? "videoaudio_sec5" : ""}`}
      >
        <div className="my_container">
          <div className="row vidaud_row">
            {data.map((item, i) => (
              <div
                className={`${
                  columns5
                    ? "col-md-2 vidaud_col5"
                    : "col-md-4 col-4 vidaud_col"
                }`}
                key={i}
              >
                <div
                  className={`content_box ${columns5 ? "content_box5" : ""}`}
                >
                  <img
                    src={
                      width > 990
                        ? item.coloredHexagon
                          ? item.coloredHexagon
                          : polygon6
                        : item.coloredHexagonMb
                        ? item.coloredHexagonMb
                        : polygon6
                    }
                    alt="hexagon"
                    className="polygon_img"
                  />
                  <div className="content_wrapper">
                    <img
                      src={width <= 990 &&  item.mbImg ? item.mbImg : item.img}
                      alt={item.alt}
                      className="data_img"
                    />
                    <p
                      className="desc"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                      style={{
                        color:
                          width > 990
                            ? item.coloredHexagon
                              ? "#ffffff"
                              : ""
                            : item.coloredHexagonMb
                            ? "#ffffff"
                            : "",
                      }}
                    ></p>
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

export default VideoAudio;
