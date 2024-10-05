import React, { useEffect } from "react";
import { useWindowSize } from "react-use";
import growth from '../../assets/our-story/Driving Business Growth.png';
import revolution from '../../assets/our-story/Join The Revolution..png';
import OurStoryBannerMobo from '../../assets/our-story/Our Story.png';
import clientexp from '../../assets/our-story/Redefining.png';
import integraition from '../../assets/our-story/Seamless Integration.png';
import OurStoryBanner from '../../assets/our-story/our-story-banner.png';
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import LeaderProfile from "../../components/OurStory/LeaderProfile/LeaderProfile";
import PhaseEvolution from "../../components/OurStory/PhaseEvolution/PhaseEvolution";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ClientJourney from "../../components/clientJourney/clientJourney";
import { rightWave, whitesmallwave } from '../../images';
import "./styles.scss";

export const clientJournery = [
    {
        id: 1,
        heading: "Seamless Integration",
        title: "Seamless Integration",
        description: [
            `One of the standout features of Interact Suite is its ability to integrate seamlessly with multiple systems within an organisation. This is particularly beneficial for clients undergoing mergers and acquisitions as it provides a one-stop solution for all communication needs. By unifying disparate systems, Interact Suite delivers a consistent and cohesive communication experience to end customers.  `
        ],
        // link: "#",
        img: integraition,
        alt: "MarketingServicesBanner",
    },
    {
        id: 2,
        heading: "Redifining Client Experience",
        title: "​Redefining Client Experience",
        description: [
            `Interact Suite goes beyond traditional communication tools. It redefines the client experience by enabling businesses to construct personalised, impactful customer experience that resonate with their audience. Whether it is through automated email campaigns or interactive web content, Interact Suite ensures that every touchpoint is meaningful and engaging.  `,
        ],
        // link: "#",
        img: clientexp,
        alt: "MarketingServicesBanner",
    },
    {
        id: 3,
        heading: "Driving Business Growth",
        title: "Driving Business Growth",
        description: [
            `At its core, Interact Suite helps businesses grow. By enhancing customer communications, businesses can unlock new revenue streams, boost customer loyalty, and capitalise on digital cross-sell and up-sell opportunities. The analytical capabilities of Interact Suite provide valuable insights into customer behaviour, allowing businesses to tailor their strategies for maximum impact..
        `,
        ],
        // link: "#",
        img: growth,
        alt: "MarketingServicesBanner",
    },
    {
        id: 4,
        heading: "Join the Revolution",
        title: "Join the Revolution",
        description: [
            `Discover how Interact Suite can transform your customer communications and drive your business forward. Join the growing number of businesses that are leveraging our cutting-edge solution to enhance customer engagement, streamline operations, and achieve their business goals.  
Interact Suite—where innovation meets communication.`,
        ],
        // link: "#",
        img: revolution,
        alt: "MarketingServicesBanner",
    },
];

const OurStory = () => {
    const { width } = useWindowSize();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <div className="our-story">
            <main>
                <section className="ac_sec1">
                    <CommonBanner
                        banner={width > 767 ? OurStoryBanner : OurStoryBannerMobo}
                        linkText1="Our Story"
                        title="Our Story"
                    />
                </section>

                <section className="av_sec2 introduction">
                    <SectionHeading
                        heading={"Introducing"}
                        orangeHeading={"Interact Suite"}
                    />
                    <p>
                        Revolutionising Customer Communications, the Genesis of Interact Suite In the bustling world of business intelligence and AI solutions, we noticed a recurring theme in our client interactions. Numerous clients were grappling with challenges related to end-customer communications. They sought automated, seamless solutions for email communication, enhanced customer experiences, and effective digital cross-sell and up-sell opportunities. Inspired by these conversations, we realised there was a significant need for a comprehensive communication solution. Leveraging our expertise in data warehousing, mining, and analytics, we embarked on a mission to create a product that would not only address these issues but also drive better revenue generation and foster brand loyalty.
                    </p>
                </section>

                <section className="av_sec3 story_sec3">
                    {/* <img src={rightWave} alt="wave" className="leftWave" /> */}
                    <video
                        muted
                        autoPlay
                        loop
                        playsInline
                        width="100%"
                        className="left_wave"
                    >
                        <source type="video/mp4" src={whitesmallwave} />
                    </video>

                    <SectionHeading
                        heading={"The Evolution of"}
                        orangeHeading={"Interact Suite"}
                    />

                    <PhaseEvolution />
                </section>

                <section className="av_sec3">
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
                        heading={"The Power of"}
                        orangeHeading={"Interact Suite"}
                    />

                    <ClientJourney dataList={clientJournery} />
                </section>

                <section className="av_sec3">
                    <div className="vertical_line_1"></div>
                    <div className="vertical_line_2"></div>
                    <div className="vertical_line_3"></div>
                    <LeaderProfile />
                </section>
            </main>
        </div>
    );
};

export default OurStory;