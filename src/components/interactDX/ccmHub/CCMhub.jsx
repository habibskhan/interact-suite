import React from "react";
import "./styles.scss";

import callCenter from "../../../assets/CCM Hub/Call centre.png";
import Social from "../../../assets/CCM Hub/Social.png";
import Retailer from "../../../assets/CCM Hub/Retailer.png";
import Mobile from "../../../assets/CCM Hub/Mobile.png";
import webPortal from "../../../assets/CCM Hub/web portal.png";
import commerce from "../../../assets/CCM Hub/E-commerce.png";
import KIOSK from "../../../assets/CCM Hub/KIOSK.png";

import Consistent from "../../../assets/CCM Hub/Consistent omni-channel.png";
import Agile from "../../../assets/CCM Hub/Agile &devops.png";
import Powered from "../../../assets/CCM Hub/Powered by insight & cognitive.png";
import Designed from "../../../assets/CCM Hub/Designed to engage.png";
import { ccmhub02, images } from "../../../images";

const ccmList = [
  {
    id: 1,
    video: images.dxCallCenter.image,
    icon: callCenter,
    alt: "callCenter",
    title: "Call Center",
  },
  {
    id: 2,
    video: images.dxSocial.image,
    icon: Social,
    alt: "Social",
    title: "Social",
  }, 
  {
    id: 3,
    video: images.dxRetail.image,
    icon: Retailer,
    alt: "Retailer",
    title: "Retailer",
  },
  {
    id: 4,
    video: ccmhub02,
    icon: images.dxEmail.image,
    alt: "Email",
    title: "Email",
  },
  {
    id: 5,
    video: images.dxMobile.image,
    icon: Mobile,
    alt: "Mobile",
    title: "Mobile",
  },
  {
    id: 6,
    video: images.dxWebportal.image,
    icon: webPortal,
    alt: "webPortal",
    title: "Web Portal",
  },
  {
    id: 7,
    video: images.dxEcommerce.image,
    icon: commerce,
    alt: "commerce",
    title: "E-commerce",
  },
  {
    id: 8,
    video: images.dxKiosk.image,
    icon: KIOSK,
    alt: "KIOSK",
    title: "KIOSK",
  },
];

const features = [
  { video: images.dxConsistentSmall.image, icon: Consistent, text: "Consistent omnichannel" },
  { video: images.dxAgileSmall.image, icon: Agile, text: "Agile & devops" },
  { video: images.dxPoweredSmall.image, icon: Powered, text: "Powered by insight & cognitive" },
  { video: images.dxDesignedSmall.image, icon: Designed, text: "Designed to engage" },
];

const CCMhub = () => {
  return (
    <div className="ccm-hub">
      <h2>CCM HUB</h2>

      <div className="grid">
        {ccmList.map((node) => (
          <div key={node.id} className="node">
            {/* <img src={node.icon} alt={node.alt} /> */}
            <video muted autoPlay loop playsInline width="100%" height="100%">
              <source type="video/mp4" src={node.video} />
            </video>
            <span>{node.title}</span>
          </div>
        ))}
      </div>

      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            {/* <img src={feature.icon} alt={feature.text} /> */}
            <video muted autoPlay loop playsInline width="100%" height="100%">
              <source type="video/mp4" src={feature.video} />
            </video>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CCMhub;
