import React from "react";
import leftArrow from "../../../assets/Arrow 1.png";
import rightArrow from "../../../assets/Arrow 2.png";
import { images } from "../../../images";
import SectionHeading from "../../SectionHeading/SectionHeading";
import "./styles.scss";

import linegraphmonitor from "../../../assets/interact-dx/4631450-200.png";
import mergedoc from "../../../assets/interact-dx/Image 18.png";
import monitor from "../../../assets/interact-dx/monitor.png";
import monitorresp from "../../../assets/interact-dx/responsive.png";
import BgImage from "../../../assets/interact-dx/comm_background.png";
import mbBgImage from "../../../assets/interact-dx/mb_comm_background.png";
import { useWindowSize } from "react-use";

const PersonalisedCommunication = () => {
  const { width } = useWindowSize();

  const steps = [
    {
      icon: monitor,
      video: images.dxCustomisedData.image,
      text: "Interact DX analyses, aggregates & customises data",
    },
    {
      icon: mergedoc,
      video: images.dxDashboard.image,
      text: "Dashboard created for client review and/or to further customise for each user",
    },
    {
      icon: linegraphmonitor,
      video: images.dxDocument.image,
      text: "Master document generated",
    },
    {
      icon: monitorresp,
      video: images.dxAppropriateUser.image,
      text: "Document produced and delivered in the appropriate form (print, digital, mobile etc.) to appropriate user",
    },
  ];

  return (
    <div className="personalisedCommunication">
      <img
        src={width > 767 ? BgImage : mbBgImage}
        alt="background"
        className="comm_bg"
      />
      <SectionHeading
        heading="Personalised Communication with"
        orangeHeading="Interact DX"
      />

      <div className="interactDxContainer">
        <div className="upload_container">
          <div className="section_desc uploadBox">
            Upload customer data to Interact DX platform
          </div>
          <img src={leftArrow} alt="" className="left_arrow" />
        </div>
        <div className="interactDxBox">Interact DX</div>
        <div className="upload_container">
          <img src={rightArrow} alt="" className="right_arrow" />
          <div className="section_desc uploadBox">
            Upload communication content to Interact DX platform
          </div>
        </div>
      </div>

      <div className="interactDxBox-mobo">
        <img src={leftArrow} alt="" className="left" />
        Interact DX
        <img src={rightArrow} alt="" className="right" />
      </div>

      <div className="stepsContainer">
        {steps.map((step, index) => (
          <div key={index} className="dataBox">
            <div className="imgWrapper">
              {/* <img
                src={orangeCircle}
                alt="Blue Glow Circle"
                className="blueCircle"
              />
              <img
                src={blueGlowCircle}
                alt="Blue Glow Circle"
                className="orangeCircle"
              /> */}
              {/* <div className="circleText">
                <img src={step.icon} alt="Step Icon" />
              </div>  */}
              <video
                id="vid"
                muted
                autoPlay
                loop
                playsInline
                width="100%"
                height="100%"
              >
                <source type="video/mp4" src={step.video} />
              </video>
            </div>
            <div className="contentWrapper">
              <p className="section_desc">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalisedCommunication;
