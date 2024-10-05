import React from "react";
import "./gallery.scss";
import { useWindowSize } from "react-use";

const Gallery = ({ galleryImages, isTab,visible }) => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="gallery_wrapper">
        <div className="gallery_row">
          {/* {galleryImages[isTab]?.gallery.slice(0, visible[isTab]).map((data, index) => ( */}
          {galleryImages[isTab]?.gallery.map((data, index) => (
            <div className={`gallery_col`} key={index}>
              <img
                src={width > 991 ? data.img : data.mbImg}
                alt={data.alt}
                className="gallery_img"
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
