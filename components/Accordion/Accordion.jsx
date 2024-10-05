import { useEffect, useRef, useState } from "react";
import "./accordion.scss";
import { minusicon, plusicon } from "../../images";

export const CustomAccordion = ({ items, firstActive = false }) => {
  const [openIndex, setOpenIndex] = useState(firstActive === true ? 0 : "");
  const activeAccordionRef = useRef(null);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollToActiveAccordion = () => {
    if (activeAccordionRef.current) {
      activeAccordionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  useEffect(() => {
    scrollToActiveAccordion();
  }, [openIndex]);

  return (
    <>
      {items.map((item, index) => (
        <div
          className={`accordion-wrapper ${openIndex === index ? "active" : ""}`}
          key={index}
          ref={openIndex === index ? activeAccordionRef : null}
        >
          <div
            className="accordion-title"
            onClick={() => handleItemClick(index)}
          >
            <span>{item.title}</span>
            <img
              className="plus-minus"
              src={openIndex === index ? minusicon : plusicon}
            />
          </div>
          <div
            className={`accordion-item ${openIndex === index ? "active" : ""}`}
          >
            <div
              className="accordion-content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
