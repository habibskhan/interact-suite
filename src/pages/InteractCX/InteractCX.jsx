import React, { useEffect } from "react";
import { useWindowSize } from "react-use";
import ConsistencyImg from "../../assets/Consistency.jpg";
import Convenience from "../../assets/convenience.png";
import Interactivity from "../../assets/interactivity.png";
import MultiLang from "../../assets/multi-lingual.png";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import LineGraph from "../../components/interactCx/CustomerJourneyChart/CustomerJourneyChart";
import FeatureDesign from "../../components/interactCx/featureDesign/FeatureDesign";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SmartData from "../../components/SmartData/SmartData";
import { CUSTOMER_EXP_TEXTS } from "../../data/interactCX";
import "./styles.scss";
import {
  interactcxbg,
  rightWave,
  smallwave,
  waveVideoBg,
  whitesmallwave,
} from "../../images";

import cxBannerImg from "../../assets/cx-banner.png";
import cxBannerMoboImg from "../../assets/cx-banner-mobo.png";
import ForbesGraph from "../../assets/line-graph.png";

export const smartDataCol = [
  {
    id: 1,
    img: Interactivity,
    alt: "Interactivity",
    title: "Interactivity",
    desc: "Experience dynamic visualization capabilities that empower real-time engagement for customers on both mobile and web platforms. Interact with content effortlessly through interactive charts, graphs, and sliders, elevating your browsing experience to new heights.",
  },
  {
    id: 2,
    img: ConsistencyImg,
    alt: "consistency",
    title: "Consistency",
    desc: "Centralization fosters an enhanced customer experience by enabling designs to be crafted in a channel-agnostic manner and subsequently delivered through the preferred channels of our clientele. Consistent messaging, akin to uniform experiences, cultivates trust, thereby fostering customer loyalty. ",
  },
  {
    id: 3,
    img: Convenience,
    alt: "Convenience",
    title: "Convenience",
    desc: "Interact CX enhances convenience by efficiently delivering tailored messages to customers, expediting the process. Furthermore, it simplifies the creation of a seamless onboarding experience through features like pre-populated digital forms and electronic signature capabilities.",
  },
  {
    id: 4,
    img: MultiLang,
    alt: "MultiLang",
    title: "Multi-Lingual & Multi-Currency",
    desc: "Multilingual and multicurrency enhance the customer experience globally. It generates communications in multiple languages, both local and regional, supporting both Unicode and non-Unicode characters. It seamlessly integrates with any payment gateway, ensuring smooth and flexible customer service.",
  },
];

const InteractCX = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="interact-cx">
      <main>
        <section className="ac_sec1">
          <CommonBanner
            banner={width > 767 ? cxBannerImg : cxBannerMoboImg}
            linkText1="Product & Solutions"
            linkText2="CX"
            title="Interact CX"
          />
        </section>

        <section className="av_sec2 cx-exp">
          <SectionHeading
            heading="What is "
            orangeHeading="Customer Experience?"
          />
          <div className="my_container">
            <div className="content_wrapper">
              {CUSTOMER_EXP_TEXTS.map((text, index) => (
                <p key={index} className="section_desc">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="cx_chart">
          <video
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            height="100%"
            className="interactcxbg"
          >
            <source type="video/mp4" src={interactcxbg} />
          </video>

          <section className="linegraph">
            <LineGraph />
          </section>
        </section>

        <section className="av_sec3 cx_sec3">
          {/* <img src={rightWave} alt="wave" className="rightWave" /> */}
          <video
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            className="small_wave"
          >
            <source type="video/mp4" src={whitesmallwave} />
          </video>

          <FeatureDesign />
        </section>

        <section className="av_sec3 cx_sec4">
          <SectionHeading
            heading="Why choose"
            orangeHeading="Interact CX?"
            description={
              "Explore the transformative power of Interact CX, empowering organizations to effortlessly curate highly <br> personalized and relevant communications, seamlessly reaching customers across all preferred <br> communication channels."
            }
          />

          <SmartData smartDataCol={smartDataCol} />
        </section>
      </main>
    </div>
  );
};

export default InteractCX;
