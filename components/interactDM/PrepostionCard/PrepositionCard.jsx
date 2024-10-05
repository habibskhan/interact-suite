
import React from "react";
import styles from './styles.scss'
import CardBox from "../../CardBox/CardBox";
import SectionHeading from "../../SectionHeading/SectionHeading";

export const cardData = [
    {
        id: 1,
        numb: 1,
        desc: `Social Media App Integrations​`,
    },
    {
        id: 2,
        numb: 2,
        desc: `Compatible Architecture easy to customize & Integrate ​`,
    },
    {
        id: 3,
        numb: 3,
        desc: `Integration With Multiple Data Sources​`,
    },
    {
        id: 4,
        numb: 4,
        desc: `Two-way communication through Push and pull API​`,
    },
    {
        id: 5,
        numb: 5,
        desc: `Consent Management Module ​(GDPR/PDPR)​`,
    },
];

const PrepositionCard = () => {
    return (
        <div className="prepositionCard">
            <SectionHeading
                heading={"Unique Value"}
                orangeHeading={"Proposition"}
            />
            <div className={'prepBox_wrapper'}>
                <CardBox
                    cardData={cardData}
                    columns="col-lg-4 col-md-4 col-6"
                    numb={true}
                    placement="center" />
            </div>
        </div>
    )
}

export default PrepositionCard