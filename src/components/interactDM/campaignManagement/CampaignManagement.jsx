import React from "react";
import "./styles.scss";
import CampaignFlow from "../../../assets/interactDM/CampaignFlow.png";
import CampaignFlowMobo from "../../../assets/interactDM/DM 3rd section - mobile.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { useWindowSize } from "react-use";
import technoEl from "../../../assets/Techno-white.png";
import { HexagonMobvideo, Hexagonvideo } from "../../../images";

const CampaignManagement = () => {
  const { width } = useWindowSize();
  return (
    <div className="campaign-management">
      <div className="techno-el">
        <img src={technoEl} alt="" className="left-el" />
        <img src={technoEl} alt="" className="right-el" />
      </div>

      <div className="heading">
        <SectionHeading
          heading="Campaign"
          orangeHeading="management"
          description="The Interact DM provides a robust Email campaign management system that is rule-based. This allows businesses to create and manage email campaigns that are tailored to specific customer segments. This targeted approach not only increases the effectiveness of email marketing campaigns but also enhances customer satisfaction and loyalty."
        />
      </div>
      <div className="hexagon-image">
        {/* <img
          src={width > 767 ? CampaignFlow : CampaignFlowMobo}
          alt="Design a campaign template"
          className="hexagon"
        /> */}
        <video
          id="vid"
          muted
          autoPlay
          loop
          playsInline
          width="100%"
          height="100%"
        >
          <source type="video/mp4" src={width > 767 ? Hexagonvideo : HexagonMobvideo} />
        </video>
      </div>
    </div>
  );
};

export default CampaignManagement;
