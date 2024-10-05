import React, { useEffect } from "react";
import "./styles.scss";
import CommunicationModel from "../../components/interactDX/communication-model/Communication-Model";
import HelpCard from "../../components/interactDX/help-card/Help-Card2";
import PersonalisedCommunication from "../../components/interactDX/personalised-communication/Personalised-Communication";
import ProcessFlow from "../../components/interactDX/process-flow/Process-flow";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { CUSTOMER_COMMUNICATION_TEXTS } from "../../data/interactDX";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { useWindowSize } from "react-use";
import dxBanner from "../../assets/Dx-banner.png";
import dxBannerMobo from "../../assets/DX-banner-mobo.png";
import { whitesmallwave } from "../../images";

const Home = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="home">
      <main>
        {/* <section className="hero">
          <div>
            <h1>{HERO_TITLE}</h1>
            <div className="techno">
              <img src={techno2} alt="Techno orange" className="left" />
              <img src={techno1} alt="Techno white" className="right" />
            </div>
          </div>
        </section> */}
        <section className="dx_sec1">
          <CommonBanner
            banner={width > 767 ? dxBanner : dxBannerMobo}
            linkText1="Product & Solutions"
            linkText2="DX"
            title="Interact DX"
          />
        </section>

        <section className="customerCommunication">
          <SectionHeading
            heading="What is Customer"
            orangeHeading="Communication Management?"
          />
          <div className="my_container">
            <div className="content_wrapper">
              {CUSTOMER_COMMUNICATION_TEXTS.map((text, index) => (
                <p
                  key={index}
                  className={`section_desc 
                    ${
                      index === CUSTOMER_COMMUNICATION_TEXTS.length - 1
                        ? "Medium"
                        : ""
                    }`}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <div className="personalised_wrapper">
          <PersonalisedCommunication />
        </div>

        <section className="dx_sec3">
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
          <HelpCard />
        </section>

        <section className="dx_sec4">
          <div className="vertical_line_1"></div>
          <div className="vertical_line_2"></div>
          <div className="vertical_line_3"></div>
          <CommunicationModel />
        </section>

        <section className="dx_sec5">
          <div className="vertical_line_1"></div>
          <div className="vertical_line_2"></div>
          <div className="vertical_line_3"></div>
          {width > 767 && (
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
          )}
          <ProcessFlow />
        </section>
      </main>
    </div>
  );
};

export default Home;
