import React from 'react';
import './styles.scss';
import IntuitiveDesign1 from '../../../assets/Intuitive-Design-desktop.png';
import IntuitiveDesign2 from '../../../assets/CX 4th section - mobile.png';
import { useWindowSize } from 'react-use';
import SectionHeading from '../../SectionHeading/SectionHeading';
import { rightWave } from '../../../images';

const features = [
    { id: 1, title: 'UI/UX Design', icon: 'design', color: 'blue' },
    { id: 2, title: 'Customer Segmentation', icon: 'segmentation', color: 'blue' },
    { id: 3, title: 'Customizable Templates', icon: 'templates', color: 'blue' },
    { id: 4, title: 'UI/UX Audit', icon: 'audit', color: 'blue' },
    { id: 5, title: 'Notifications', icon: 'notifications', color: 'blue' },
    { id: 6, title: 'Media Integration', icon: 'media', color: 'orange' },
    { id: 7, title: 'Web Mobile Compliant', icon: 'mobile', color: 'orange' },
    { id: 8, title: 'Real Time Payment Integration', icon: 'payment', color: 'orange' },
    { id: 9, title: 'UI/UX Strategy', icon: 'strategy', color: 'orange' },
    { id: 10, title: 'Data Visualisation', icon: 'data', color: 'orange' },
];


const FeatureDesign = () => {
    const { width } = useWindowSize();
    return (
        <div className="feature-design">
            <SectionHeading
                heading="Intuitive Design: Easy to use"
                orangeHeading="UX/UI"
            />
            {/* <img src={rightWave} alt="wave" className="rightWave" /> */}


            <p className="description">
                A user-friendly and customizable toolset empowers business users to design and deliver a diverse array of visually
                appealing customer communications effectively. 81% of organizations already cite CX as a competitive differentiator.
                More than two thirds of companies now compete primarily on the basis of customer experience. Companies that lead
                in customer experience outperform stragglers by nearly 80%. - Qwary
            </p>
            <div className="rhombusGrid">
                {/* features.map((feature) => (
                    <FeatureRhombus key={feature.id} feature={feature} />
                )) */}
                <img src={width > 768 ? IntuitiveDesign1 : IntuitiveDesign2} alt="Intuitive Design" className="intuitiveDesign" />
            </div>
        </div>
    );
};

export default FeatureDesign;
