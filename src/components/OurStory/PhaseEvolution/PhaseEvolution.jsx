import React, { useState, useEffect } from 'react';
import './styles.scss';
import foundation from '../../../assets/our-story/foundation.jpg';
import enhancement from '../../../assets/our-story/Group 18573.jpg';
import maturation from '../../../assets/our-story/Group 18575.jpg';
import enhancementMin from '../../../assets/our-story/enhancement.png';
import maturationMin from '../../../assets/our-story/maturation.png';

const evolutionStages = [
    {
        id: 1,
        title: "Phase 1: Foundation",
        description: "Interact Suite was initially designed to facilitate communication via email and web channels. We began with the basics—delivering static PDFs and providing customer analytics through web platforms in industries such as banking, insurance and telecommunications, we introduced the delivery of billing statements through email. This phase laid the groundwork for a more sophisticated solution, catering to essential client needs. ",
        imageMin: enhancementMin,
        imageExpanded: foundation
    },
    {
        id: 2,
        title: "Phase 2: Enhancement",
        description: "Understanding the evolving needs of our clients, we transitioned from static PDFs to interactive web outputs. Our focus shifted to creating auto-responsive outputs that seamlessly adapt across all devices. This transformation marked a significant improvement in client experience, offering dynamic and engaging communication tools.  ",
        imageMin: enhancementMin,
        imageExpanded: foundation
    },
    {
        id: 3,
        title: "Phase 3: Maturation",
        description: "Today,Interact Suite stands as a mature, robust platform. It is fully auto-responsive and compatible across all devices and browsers. Our suite boasts an array of features designed to solve diverse customer communication challenges. These include advanced digital marketing solutions, targeted campaigns, real-time alerts and notifications, and cutting-edge UX/UI design.",
        imageMin: maturationMin,
        imageExpanded: foundation
    }
];

const PhaseEvolution = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [expandedMobile, setExpandedMobile] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsExpanded(false);

        const timer = setTimeout(() => {
            setIsExpanded(true);
        }, 300);

        return () => clearTimeout(timer);
    }, [activeSlide, expandedMobile]);

    const handleSlideClick = (index) => {
        if (isMobile) {
            setExpandedMobile(index);
        } else {
            setActiveSlide(index);
        }
    };

    return (
        <div className="evolution-container">
            {evolutionStages.map((stage, index) => (
                <div
                    key={stage.id}
                    className={`slide ${!isMobile && index === activeSlide ? 'active' : ''} ${isMobile && expandedMobile === index ? 'expanded-mobile' : ''}`}
                    onClick={() => handleSlideClick(index)}
                >
                    <div className="slide-content">
                        <div
                            className={`slide-background ${isMobile && expandedMobile !== index ? 'collapsed' : ''}`}
                            style={{ backgroundImage: `url(${((!isMobile && index === activeSlide) || (isMobile && expandedMobile === index)) ? stage.imageExpanded : stage.imageMin})` }}
                        ></div>
                        <div className="slide-overlay"></div>
                        <div className={`slide-text ${isExpanded ? 'visible' : ''}`}>
                            <h3>{stage.title}</h3>
                            {((!isMobile && index === activeSlide) || (isMobile && expandedMobile === index)) && <p>{stage.description}</p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PhaseEvolution;