import React from "react";
import "./quotes.scss";

const Quotes = ({ quoteData }) => {
  return (
    <>
      <div className="quotes_sec_container">
        <div className="row quote_row">
          {quoteData.map((quote, i) => (
            <div className="col-lg-4 col-md-6 quote_col" key={i}>
              <div className="quote_box">
                <img
                  src={quote.boxBorder}
                  alt="quote border"
                  className="quote_border"
                />
                <img src={quote.img} alt={quote.alt} className="quote_icon" />
                <h4 className="quote_heading">{quote.heading}</h4>
                {quote.description.map((item, i) => (
                  <div className="quotes_description" key={i}>
                    {item.subHeading && (
                      <h6 className="sub_heading">{item.subHeading}</h6>
                    )}
                    <p className="quote_desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quotes;
