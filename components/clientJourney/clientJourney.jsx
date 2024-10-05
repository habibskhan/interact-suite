import React, { useState, useEffect, useRef } from "react";
import "./clientJourney.scss";
import { greyArrow, whiteArrow } from "../../images";
import CommonCta from "../commonCta/CommonCta";
import { useWindowSize } from "react-use";

const ClientJourney = ({ dataList }) => {
  const { width } = useWindowSize();
  const [over, setOver] = useState(0);
  const activeAccordionRef = useRef(null);
  // const [isheight, setIsHeight] = useState();
  // const sectionRef = useRef(null);

  const handleItemClick = (index) => {
    setOver((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollToActiveAccordion = () => {
    if (activeAccordionRef.current) {
      activeAccordionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // useEffect(() => {
  //   setIsHeight(sectionRef.current.clientHeight);
  //   // console.log("heigh is", isheight);
  // });

  useEffect(() => {
    scrollToActiveAccordion();
  }, [over]);

  return (
    <>
      <section className="client_journey">
        {width >= 992 ? (
          // <div className="row journey_row" ref={sectionRef}>
          <div className="row journey_row">
            <div className="col-lg-5 journey_col">
              {dataList.map((item, i) => (
                <div
                  className={`left_box ${over === i ? "active" : ""}`}
                  // style={{minHeight: (isheight / dataList.length ) }}
                  key={i}
                  onMouseOver={() => setOver(i)}
                >
                  <img
                    src={over === i ? whiteArrow : greyArrow}
                    alt="arrow"
                    className={`grey_arrow ${over === i ? "active" : ""}`}
                  />
                  <h4 className={`title ${over === i ? "active" : ""}`}>
                    {item.heading}
                  </h4>
                </div>
              ))}
            </div>
            <div className="col-lg-7 journey_col">
              {dataList.map((item, i) => (
                <div
                  className={`right_box ${over === i ? "active" : ""}`}
                  key={i}
                >
                  <div className="content_wrapper">
                    <h6 className="sub_title">{item.title}</h6>
                    <div className="desc_wrapper">
                      {item?.description.map((desc, index) => (
                        <p
                          key={index}
                          className="section_desc"
                          dangerouslySetInnerHTML={{ __html: desc }}
                        ></p>
                      ))}
                    </div>
                    {item.link ? (
                      <CommonCta
                        linkText="KNOW MORE"
                        link={item.link}
                        linkCta
                      />
                    ) : null}
                  </div>
                  <div className="img_wrapper">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="journey_img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          dataList.map((acc, index) => (
            <div
              className={`accordion-btn-wrapper ${
                over === index ? "active" : ""
              }`}
              key={index}
              ref={over === index ? activeAccordionRef : null}
            >
              <div
                className={`left_box ${over === index ? "active" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <img
                  src={over === index ? whiteArrow : greyArrow}
                  alt="arrow"
                  className={`grey_arrow ${over === index ? "active" : ""}`}
                />
                <h4 className={`title ${over === index ? "active" : ""}`}>
                  {acc.heading}
                </h4>
              </div>

              <div className={`right_box ${over === index ? "active" : ""}`}>
                <div className="content_wrapper">
                  <h6 className="sub_title">{acc.title}</h6>
                  <div className="desc_wrapper">
                    {acc?.description.map((desc, index) => (
                      <p
                        key={index}
                        className="section_desc"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      ></p>
                    ))}
                  </div>
                  {acc.link && (
                    <CommonCta linkText="KNOW MORE" link={acc.link} linkCta />
                  )}
                </div>
                <div className="img_wrapper">
                  <img
                    src={width <= 767 && acc.mbImg ? acc.mbImg : acc.img}
                    alt={acc.alt}
                    className="journey_img"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default ClientJourney;
