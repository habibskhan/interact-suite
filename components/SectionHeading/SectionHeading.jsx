import React from "react";

const SectionHeading = ({
  heading,
  description,
  orangeHeading,
  orangeHeading1,
}) => {
  return (
    <>
      <div className="heading_container">
        <div className="my_container">
          {heading && (
            <h2 className="section_heading text_center">
              {orangeHeading1 && (
                <span className="orange_heading">{orangeHeading1} </span>
              )}
              <span dangerouslySetInnerHTML={{ __html: heading }}></span> {""}
              {orangeHeading && (
                <span
                  className="orange_heading"
                  dangerouslySetInnerHTML={{ __html: orangeHeading }}
                ></span>
              )}
            </h2>
          )}
          {description && (
            <p
              className="section_desc32 text_center"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionHeading;
