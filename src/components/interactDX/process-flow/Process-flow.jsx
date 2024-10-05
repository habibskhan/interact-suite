import React from "react";
import "./styles.scss";
import step1Icon from "../../../assets/process-flow/step-1.png";
import step2Icon from "../../../assets/process-flow/step-2.png";
import step3Icon from "../../../assets/process-flow/step-3.png";
import step4Icon from "../../../assets/process-flow/step-4.png";
import step5Icon from "../../../assets/process-flow/step-5.png";
import step6Icon from "../../../assets/process-flow/step-6.png";
import step7Icon from "../../../assets/process-flow/step-7.png";
import wayLine from "../../../assets/process-flow/way line.png";
import wayLine2 from "../../../assets/process-flow/way line2.png";
import Line from "../../../assets/process-flow/Line.png";
import SectionHeading from "../../SectionHeading/SectionHeading";

const steps = [
  {
    id: 1,
    title: "API connectors for data extraction",
    icon: step1Icon,
  },
  {
    id: 2,
    title: "Core System OSS/BSS, CRM, Claim, Card, Loans, Others etc.",
    icon: step2Icon,
  },
  {
    id: 3,
    title:
      "GUI designer for template designing (Policy document, Welcome kits, Statements, Bills, Letter, Alerts etc.)",
    icon: step3Icon,
  },
  {
    id: 4,
    title:
      "Personalising/ Scheduling/ Message/ Queuing/ Prioritising/graphical Rule Builder",
    icon: step4Icon,
  },
  {
    id: 5,
    title:
      "Output: PDF, Excel, Post Script, Interactive documents, audio Video",
    icon: step5Icon,
  },
  {
    id: 6,
    title:
      "Personalising/ Scheduling/ Message/ Queuing/ Prioritising/graphical Rule Builder",
    icon: step6Icon,
  },
  {
    id: 7,
    title:
      "Personalising/ Scheduling/ Message/ Queuing/ Prioritising/graphical Rule Builder",
    icon: step7Icon,
  },
];

const ProcessSection = () => {
  return (
    <div className="processSection">
      <SectionHeading
        heading={"Simplified Process for Easy Integrations and Designs of"}
        orangeHeading={"Communication Templates"}
      />
      <div className="stepsContainer">
        <img src={wayLine} alt='line-1' className="wayLine1" />
        {steps.map((step, index) => (
          <div key={step.id} className="step">
            <div className="tile">
              <img
                src={step.icon}
                alt={`Step ${step.id}`}
                className="icon"
              />
            </div>
            <p className="section_desc stepTitle">{step.title}</p>
          </div>
        ))}
        <img src={wayLine2} alt='line-2' className="wayLine2" />
        <img src={Line} alt='line-2' className="Line" />
      </div>
    </div>
  );
};

export default ProcessSection;
