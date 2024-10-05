import React from 'react'
import './styles.scss';

import salesImage from '../../../assets/interactDM/sales.png';
import roiImage from '../../../assets/interactDM/roi.png';
import trustImage from '../../../assets/interactDM/trust.png';
import engagementImage from '../../../assets/interactDM/engagement.png';
import sharesImage from '../../../assets/interactDM/shares.png';
import SectionHeading from '../../SectionHeading/SectionHeading';

export const benefitsData = [
    {
        image: salesImage,
        title: "Boosts conversions and sales",
        alt: "Boosts conversions and sales"
    },
    {
        image: roiImage,
        title: "Shows great ROI",
        alt: "Shows great ROI"
    },
    {
        image: trustImage,
        title: "Builds trust",
        alt: "Builds trust"
    },
    {
        image: engagementImage,
        title: "Engagement",
        alt: "Engagement"
    },
    {
        image: sharesImage,
        title: "Encourages social shares",
        alt: "Encourages social shares"
    }
];

const BenefitItem = ({ image, title, alt }) => (
    <div className="benefit" style={{ backgroundImage: `url(${image})` }}>
        <div className="title-overlay">{title}</div>
    </div>
);

const CustomerDoc = () => {
    return (
        <div className="customer-doc">
            <div className="heading">
                <SectionHeading
                    heading={"Integrated Marketing Embedded on"}
                    orangeHeading={"Customer Facing Documents"}
                />
                <p>Interact DM leverages rules and analytics for targeted, personalised advertising. It includes a dynamic query builder for precise messaging and robust customer segmentation capabilities. Users can create and manage email campaigns seamlessly. The solution also provides comprehensive 360-degree delivery and status reports to customer care and operations, ensuring informed and effective communication strategies.</p>
            </div>


            <div className="benefits">
                {benefitsData.map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                ))}
            </div>

        </div>
    );
};

export default CustomerDoc;
