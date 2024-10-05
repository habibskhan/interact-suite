import React, { useState } from "react";
import "./styles.scss";
import FlowDiagram from "../flow-diagram/Flow-Diagram";
import Tabs from "./Tabs/Tabs";
import SectionHeading from "../../SectionHeading/SectionHeading";
import CCMhub from "../ccmHub/CCMhub";
import core from "../../../assets/interact-dx/com-model/Image 23.png";
import repo from "../../../assets/interact-dx/com-model/data_rep.png";
import template from "../../../assets/interact-dx/com-model/Template_Generation.png";
import Broadcast from "../../../assets/interact-dx/com-model/broadcast.png";
import event from "../../../assets/interact-dx/com-model/events.png";
import api from "../../../assets/interact-dx/com-model/rpi.png";
import { images } from "../../../images";

const flows = [
  {
    color: "cyan",
    items: [
      { name: "Core", icon: core, video: images.dxCore.image },
      { name: "Data Repository", icon: repo, video: images.dxDataRepository.image },
      { name: "Template Generation", icon: template, video: images.dxTemplateGeneration.image },
      { name: "Broadcast", icon: Broadcast, video: images.dxBroadcast.image },
    ],
  },
  {
    color: "blue",
    items: [
      { name: "OSS/BSS", icon: core, video: images.dxOss.image },
      { name: "Template Layout", icon: repo, video: images.dxTemplateLayout.image },
      { name: "Broadcast", icon: Broadcast, video: images.dxBroadcastBlue.image },
    ],
  },
  {
    color: "orange",
    items: [
      { name: "CRM", icon: core, video: images.dxCrm.image },
      { name: "Event Configuration", icon: event, video: images.dxEvents.image },
      { name: "Broadcast", icon: Broadcast, video: images.dxBroadcastOrange.image },
    ],
  },
  {
    color: "purple",
    items: [
      { name: "Core", icon: core, video: images.dxCorePurple.image },
      { name: "API", icon: api, video: images.dxApi.image },
      { name: "Broadcast", icon: Broadcast, video: images.dxBroadcastPurple.image },
    ],
  },
];

const unpluggedData = [
  {
    id: 1,
    title: "Chaotic De-centralised Communication Model",
  },
  {
    id: 2,
    title: "Interact Suite <br/> Centralised CCM HUB",
  },
];

const CommunicationModel = () => {
  const [isTab, setIsTab] = useState(0);
  return (
    <section className="centralisedHub">
      <SectionHeading
        heading="Centralised"
        orangeHeading="Communications Hub"
        description="According to Forbes research, companies with the strongest omnichannel experiences retain 89% of their customers on average, compared to 33% retention for companies with weak omnichannel customer experience. The percentage of companies investing in omnichannel experience has increased to more than 80% from 20%. (ROI)"
      />

      <div className="communicationModel">
        <Tabs tabName={unpluggedData} isTab={isTab} setIsTab={setIsTab} />

        {isTab === 0 && (
          <main className="main">
            <div className="modelContainer">
              {flows.map((flow, index) => (
                <FlowDiagram
                  key={index}
                  items={flow.items}
                  color={flow.color}
                />
              ))}
            </div>
          </main>
        )}

        {isTab === 1 && (
          <main className="main">
            <div className="modelContainer modelContainer2">
              <CCMhub />
            </div>
          </main>
        )}
      </div>
    </section>
  );
};

export default CommunicationModel;
