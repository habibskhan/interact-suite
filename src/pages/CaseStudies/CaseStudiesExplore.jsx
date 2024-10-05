import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWindowSize } from "react-use";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import caseStudiesBanner from '../../assets/case-studies/case-studies-banner.png';
import { exploreData } from "../../data/caseStudiesExplore";
import "./styles.scss";

const CaseStudiesExplore = () => {
    const { width } = useWindowSize();
    const { id } = useParams();

    const caseStudy = exploreData[id];

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    if (!caseStudy) {
        return <div>Case study not found</div>;
    }

    return (
        <div className="case-studies-container">
            <main>
                <section className="ac_sec1">
                    <CommonBanner
                        banner={width > 767 ? caseStudiesBanner : caseStudiesBanner}
                        linkText1="Case Studies"
                        title="Case Studies"
                    />
                </section>
                <section className="case-study-explore av_sec3">
                    <div className="vertical_line_1"></div>
                    <div className="vertical_line_2"></div>
                    <div className="vertical_line_3"></div>
                    <SectionHeading
                        heading={caseStudy.title}
                        orangeHeading={caseStudy.orangeTitle}
                    />
                    <p className="desc">
                        {caseStudy.description}
                    </p>
                    <div className="explore-content">
                        <div className="scenario-challenges">
                            <h3>Scenario & Challenges :</h3>
                            <ul>
                                {caseStudy.scenarioChallenges.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="benefits">
                            <h3>Benefits :</h3>
                            <ul>
                                {caseStudy.benefits.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CaseStudiesExplore;