import React from "react";
import CardBox from "../../CardBox/CardBox";
import "./styles.scss";
import SectionHeading from "../../SectionHeading/SectionHeading";

export const cardData = [
  {
    id: 1,
    numb: 1,
    desc: `Enhance service quality and boost revenues by engaging customers through their preferred channels and languages.`,
  },
  {
    id: 2,
    numb: 2,
    desc: `Accelerate time-to-market for both existing and new products/services, eliminating the need to wait for monthly cycles to send out communication.`,
  },
  {
    id: 3,
    numb: 3,
    desc: `Drive targeted, personalized cross-sell and up-sell opportunities with banner ads and real-time alerts tailored to individual customers.`,
  },
  {
    id: 4,
    numb: 4,
    desc: `Maintain a consistent "look and feel" across all channels with centralized design and formatting of communication templates.`,
  },
  {
    id: 5,
    numb: 5,
    desc: `Reduce operational costs by shifting online, minimizing call center dependency, and consolidating statements for greater efficiency.`,
  },
];

const HelpCard = () => {
  return (
    <div className="cardBox_wrapper">
      
      <SectionHeading heading="How Do We" orangeHeading="Help?" />
      <CardBox
        cardData={cardData}
        columns="col-lg-4 col-md-4 col-6"
        numb={true}
        placement="center"
      />
    </div>
  );
};

export default HelpCard;
