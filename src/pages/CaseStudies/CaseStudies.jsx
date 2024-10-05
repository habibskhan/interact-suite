import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import techno2 from '../../assets/Techno-orange.png';
import techno1 from '../../assets/Techno-white.png';
import "./styles.scss";

import img1 from '../../assets/case-studies/CCM+ Banking.png';
import img2 from '../../assets/case-studies/CX+ Banking.png';
import img3 from '../../assets/case-studies/Telecom.png';
import img4 from '../../assets/case-studies/Unity UK.png';

import caseStudiesBanner from '../../assets/case-studies/case-studies-banner.png';
import caseStudiesMoboBanner from '../../assets/case-studies/Case Studies.png';
import { useWindowSize } from "react-use";
import CommonBanner from "../../components/CommonBanner/CommonBanner";

const caseStudiesData = [
    {
        heading: "CCM+Banking",
        title: "A Leading bank from Africa Implements Interact Suite as a Centralised Customer Communication Platform",
        description: "A leading African bank with a presence in Kenya, Tanzania, and Burundi has implemented the Interact Suite as its centralized customer communication management hub.",
        imageUrl: img1,
        learnMoreLink: "ccm-banking"
    },
    {
        heading: "CX+Banking",
        title: "Interact Suite: Driving Interactive Customer Experience for a Leading Global Bank",
        description: "One of the leading global bank are constantly upgrading their services to serve the customers better. As per the growing requirements and changing technologies, the bank has implemented the Interact Suite.",
        imageUrl: img2,
        learnMoreLink: "cx-banking"
    },
    {
        heading: "Telecom",
        title: "A Leading Global Telecom Company Enhances Billing Efficiency & Customer Experience with Interact Suite",
        description: "Global telecom service provider having more than 60% market share redefines customer experience using Interact Suite.",
        imageUrl: img3,
        learnMoreLink: "telecom"
    },
    {
        heading: "Utility UK",
        title: "A Leading Satellite Service Provider in Europe Enhances Customer Billing Experience with Interact Suite",
        description: "The leading pioneer in mobile satellite communications has been driving global connectivity for nearly four decades. They have implemented Interact Suite as a central platform for the Billing Experience.",
        imageUrl: img4,
        learnMoreLink: "utility-uk"
    }
];

const CaseStudies = () => {
    const { width } = useWindowSize();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);


    return (
        <div className="case-studies-container">
            <main>
                {/* <section className="hero">
                    <div className="hero-content">
                        <h1>Case Studies</h1>
                        <div className="techno-images">
                            <img src={techno2} alt="Techno orange" className="techno-image-left" />
                            <img src={techno1} alt="Techno white" className="techno-image-right" />
                        </div>
                    </div>
                </section> */}

                <section className="ac_sec1">
                    <CommonBanner
                        banner={width > 767 ? caseStudiesBanner : caseStudiesMoboBanner}
                        linkText1="Case Studies"
                        title="Case Studies"
                    />
                </section>

                <section className="case-study-cards av_sec3">
                    <div className="vertical_line_1"></div>
                    <div className="vertical_line_2"></div>
                    <div className="vertical_line_3"></div>
                    {caseStudiesData.map((study, index) => (
                        <Link key={index} to={study.learnMoreLink}>
                            <div className="case-study-card">
                                <div className="card-content">
                                    {/* <h2>{study.heading}</h2> */}
                                    <h3>{study.title}</h3>
                                    <p>{study.description}</p>
                                    <a href={study.learnMoreLink} className="learn-more">Learn More</a>
                                </div>
                                <div className="card-image">
                                    <img src={study.imageUrl} alt={`Case Study ${index + 1}`} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default CaseStudies;