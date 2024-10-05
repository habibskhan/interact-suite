import React from 'react';
import './styles.scss';

import whatsappIcon from '../../../assets/social-media/whatsapp.png'
import viberIcon from '../../../assets/social-media/viber.png'
import smsIcon from '../../../assets/social-media/sms.png'
import wechatIcon from '../../../assets/social-media/wechat.png'
import pixelatedEarth from '../../../assets/pixelated-earth.png'
import SectionHeading from '../../SectionHeading/SectionHeading';
import { animatedmap } from '../../../images';


const InteractiveContentManagement = () => {
    return (
        <div className="content-management">
            <div className="heading">
                <SectionHeading
                    heading={"Interactive Content Management for Social <br> Media Apps as a"}
                    orangeHeading={"Communication Channels"}
                />

                <div className='my_container'>
                    <p className="section_desc">The Interact DM offers seamless integration with popular social media platforms such as WhatsApp, Viber, SMS, and WeChat.</p>
                    <p className="section_desc Medium">Allows businesses to deliver personalised communications through clickable links, rich text, images, videos, and PDFs. Widespread use of social media, companies can reach a broader audience and enhance their brand recognition.</p>
                    <p className="section_desc">Social media integration also facilitates two-way communication, enabling businesses to interact with customers in real-time and respond to their queries and feedback promptly.</p>
                </div>
            </div>
            <div className="icons">
                <a href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                    <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                    <img src={wechatIcon} alt="WeChat" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                    <img src={viberIcon} alt="Viber" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                    <img src={smsIcon} alt="SMS" />
                </a>
            </div>


            {/* <img src={pixelatedEarth} alt="" className='earth-image' /> */}
            <video
                id="vid"
                muted
                autoPlay
                loop
                playsInline
                width="100%"
                height="100%"
                className="map_vid"
            >
                <source type="video/mp4" src={animatedmap} />
            </video>
        </div>
    );
};

export default InteractiveContentManagement;
