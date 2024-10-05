import React from 'react';
import './styles.scss';
import Consistency from '../../../assets/Consistency.jpg'
import Convenience from '../../../assets/convenience.png'
import Interactivity from '../../../assets/interactivity.png'
import MultiLang from '../../../assets/multi-lingual.png'
import SectionHeading from '../../SectionHeading/SectionHeading';

const ChooseUs = () => {

    const itemList = [
        {
            className: 'interactivity',
            title: 'Interactivity',
            image: Interactivity,
            alt: 'Person sketching app interface'
        },
        {
            className: 'consistency',
            title: 'Consistency',
            image: Consistency,
            content: 'Centralization fosters an enhanced customer experience by enabling designs to be crafted in a channel-agnostic manner and subsequently delivered through the preferred channels of our clientele. Consistent messaging, akin to uniform experiences, cultivates trust, thereby fostering customer loyalty.'
        },
        {
            title: 'Convenience',
            className: 'interactivity',
            image: Convenience,
            alt: 'Computer screen showing image gallery'
        },
        {
            title: 'Multi-Lingual & Multi-Currency',
            className: 'mobile',
            image: MultiLang,
            alt: 'Person holding smartphone'
        }
    ]

    return (<section className="choose-us">
        <SectionHeading
            heading={"Why choose"}
            orangeHeading={"Interact CX ?"}
        />
        <p className="choose-us__description">
            Explore the transformative power of Interact CX, empowering organizations to effortlessly curate highly
            personalized and relevant communications, seamlessly reaching customers across all preferred
            communication channels.
        </p>
        <div className="choose-us__grid">
            {itemList.map(({ className, title, content, image, alt }, index) => (
                <div key={index} className={`choose-us__grid-item choose-us__grid-item--${className}`}>
                    <img src={image} alt={alt} className="choose-us__image" />
                    <div className='choose-us__content'>
                        <h3 className="choose-us__subtitle">{title}</h3>
                        <p className="choose-us__text">{content}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
};

export default ChooseUs;