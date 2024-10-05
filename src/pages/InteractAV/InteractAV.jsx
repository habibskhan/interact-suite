import React, { useEffect } from "react";
import "./interactAV.scss";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import {
  commBg,
  interactAvBanner,
  mbCommBg,
  mbInteractAvBanner,
  mbWhyUse,
  whitesmallwave,
  whyUse,
} from "../../images";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SmartData from "../../components/SmartData/SmartData";
import ClientJourney from "../../components/clientJourney/clientJourney";
import {
  communicationData,
  policyData,
  quoteData,
  smartDataCol,
  videoAudioData,
  whyUseInteractAV,
  whyUseInteractAVProgress,
} from "../../data/interactAV";
import PersonCommunication from "../../components/PersonCommunication/PersonCommunication";
import WhyUseInteractAV from "../../components/whyUseInteractAV/WhyUseInteractAV";
import WhyUseInteractAVProgress from "../../components/WhyUseInteractAVProgress/WhyUseInteractAVProgress";
import VideoAudio from "../../components/VideoAudio/VideoAudio";
import Quotes from "../../components/Quotes/Quotes";
import { useWindowSize } from "react-use";

const InteractAV = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="ac_sec1">
        <CommonBanner
          banner={width > 767 ? interactAvBanner : mbInteractAvBanner}
          linkText1="Product & Solutions"
          linkText2="AV"
          title="Interact AV"
        />
      </section>

      <section className="av_sec2">
        <SectionHeading heading="What is " orangeHeading="Interact AV?" />
        <div className="my_container">
          <div className="content_wrapper">
            <p className="section_desc">
              {" "}
              The Interact Suite's Interact audio-video (AV) product represents
              a cutting-edge breakthrough in personalised media communications.
              Building on a decade of innovation, Interact AV combines
              award-winning, patented technology with the latest advancements in
              AI to deliver an unparalleled user experience.
            </p>
            <p className="section_desc">
              {" "}
              Unlike many competitors who depend on third-party technologies,
              Interact AV utilises a proprietary platform. This ensures that
              every aspect of the video production process—from codebase
              management to data routines and rendering processes—is fully
              controlled in-house. This unique approach guarantees the highest
              quality audio and video output while maintaining cost-efficiency.
            </p>
            <p className="section_desc">
              {" "}
              Interact AV is designed to handle the demands of modern
              communication, offering a highly scalable and secure cloud
              architecture. This robust system can generate and deliver hundreds
              of millions of personalised, secure messages daily across a wide
              range of mediums and devices. Whether it is for marketing
              campaigns, customer service interactions, or educational content,
              Interact AV ensures each message reaches its intended audience
              with precision and security.
            </p>
            <p className="section_desc">
              Leveraging the latest in AI technology, Interact AV takes
              personalised media to new heights. This capability allows for
              dynamic, on-the-fly content creation that is tailored to the
              individual preferences and behaviours of each user. The result is
              a more engaging and relevant communication experience that drives
              better outcomes for businesses and their customers.
            </p>
            <p className="section_desc">
              {" "}
              Interact AV sets the standard for personalised audio-video
              communications, combining technological excellence with
              cutting-edge AI and cloud capabilities. Its proprietary, scalable,
              and secure platform ensures that businesses can deliver
              high-quality, personalised messages efficiently and
              cost-effectively. Experience the future of media communication
              with Interact AV, where innovation meets unparalleled performance.
            </p>
            <p className="section_desc Medium">
              {" "}
              According Forbes Research shows that people are likely to retain
              95% of a message conveyed through a video, compared to 10% by
              text. Additionally 74% of marketers get a higher ROI on video content than
              static images.
            </p>
          </div>
        </div>
      </section>

      <section className="av_sec3">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <SmartData smartDataCol={smartDataCol} />
      </section>

      <section className="av_sec4">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        {/* <img src={rightWave} alt="wave" className="right_wave" /> */}
        <video
          muted
          autoPlay
          loop
          playsInline
          width="100%"
          className="right_wave"
        >
          <source type="video/mp4" src={whitesmallwave} />
        </video>
        <SectionHeading
          heading="Business use-cases for"
          orangeHeading="<br/> Audio Video Communications"
        />
        <VideoAudio data={videoAudioData} />
      </section>

      <section className="av_sec5">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <ClientJourney dataList={policyData} />
      </section>

      <section className="av_sec6">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <video
          muted
          autoPlay
          loop
          playsInline
          width="100%"
          className="right_wave"
        >
          <source type="video/mp4" src={whitesmallwave} />
        </video>
        <SectionHeading
          heading="Elevate your customer communication with <br/> our user-friendly solution. Streamlined for <br/> efficiency, "
          orangeHeading='it offers personalized interactions <br/> to boost satisfaction and loyalty."'
          description="User-friendly solution for best- in-class engaging customer communications"
        />
        <Quotes quoteData={quoteData} />
      </section>

      <section className="av_sec7">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <div className="av_sec7_wrapper">
          <img
            src={width > 767 ? commBg : mbCommBg}
            alt="background"
            className="comm_bg"
          />
          <SectionHeading
            heading="Create Personalised Communication"
            orangeHeading="with Interact AV"
          />
          <PersonCommunication communicationData={communicationData} />
        </div>
      </section>

      <section className="av_sec8">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <div className="av_sec8_wrapper">
          <img
            src={width > 767 ? whyUse : mbWhyUse}
            alt="background"
            className="whyuse_bg"
          />
          <SectionHeading heading="Why use" orangeHeading="Interact AV?" />
          <WhyUseInteractAVProgress progressData={whyUseInteractAVProgress} />
          <WhyUseInteractAV
            cardData={whyUseInteractAV}
            columns="col-lg-4 col-md-4 col-6"
          />
        </div>
      </section>
    </>
  );
};

export default InteractAV;
