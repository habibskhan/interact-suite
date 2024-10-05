import React from 'react';
import { useWindowSize } from 'react-use';
import technoEl from '../../../assets/Techno-white.png';
import { HexagonMobvideo, Hexagonvideo, images } from '../../../images';
import AnimatedVideoBox from '../../AnimatedVideoBox/AnimatedVideoBox';
import SectionHeading from '../../SectionHeading/SectionHeading';
import './styles.scss';


const MarketingAlerts = () => {
    const { width } = useWindowSize();

    const sourceSystems = [
        { name: 'OLTP Systems', video: images.dmOLTP.image },
        { name: 'CRM', video: images.dmCRM.image },
        { name: '3rd Party', video: images.dm3rdParty.image },
        { name: 'Integration with Apps', video: images.dmAppIntegration.image },
        { name: 'Business Application', video: images.dmBusinessApp.image },
        { name: 'Core Systems/ OSS/BSS', video: images.dmCore.image }
    ];

    const etlProcesses = [
        { name: 'Extract', video: images.dmExtract.image },
        { name: 'Transform', video: images.dmTransform.image },
        { name: 'Load', video: images.dmLoad.image }
    ];


    return (
        <div className="marketing-alert">
            <div className="heading">
                <SectionHeading
                    heading={"Create Your Own"}
                    orangeHeading={"Transactional & Marketing Alerts"}
                />
                <p>One of the key features of the Interact DM is the capability to send real-time transactional and promotional alerts. This service ensures that customers receive timely and relevant updates about their transactions and promotional offers. By keeping customers, informed and engaged, businesses can foster a stronger connection and encourage repeat interactions. These alerts are configurable on customer behaviour and preferences.​</p>
            </div>

            <div className='image-box'>
                <section className="create-alert">
                    <div className='top_content'>
                        <div className="source-systems">
                            {sourceSystems.map(({ name, video }, index) => (
                                <div key={index} className="system">
                                    {/* <Suspense fallback={<div>Loading...</div>}>
                                        <video
                                            ref={videoRef}
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                            width="100%"
                                            height="100%"
                                            className={'icon'}
                                        >
                                            <source type="video/mp4" src={video} />
                                        </video>
                                    </Suspense> */}
                                    {/* <div className='icon'></div> */}
                                    <AnimatedVideoBox videoSrc={video} vidClass={"icon"} />
                                    <span className='title'>{name}</span>
                                </div>
                            ))}
                            <div className="dashed-arrow arrow-right"></div>

                        </div>

                        <div className="etl-processes">
                            {etlProcesses.map(({ name, video }, index) => (
                                <div key={index} className="process">
                                    {/* <Suspense fallback={<div>Loading...</div>}>
                                        <video
                                            ref={videoRef}
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                            width="100%"
                                            height="100%"
                                            className={'icon'}
                                        >
                                            <source type="video/mp4" src={video} />
                                        </video>
                                    </Suspense> */}
                                    <AnimatedVideoBox videoSrc={video} vidClass={"icon"} />
                                    {/* <div className='icon'></div> */}
                                    <span className='title'>{name}</span>
                                </div>
                            ))}
                            <div className="dashed-arrow arrow-down"></div>
                        </div>
                    </div>

                    <div className='bottom_content'>
                        <div className="wysiwyg-editor">
                            Create alerts & notifications using WYSIWYG Editor for SMS/Email/Whatsapp
                        </div>
                        <div className="data-mart">
                            {/* <Suspense fallback={<div>Loading...</div>}>
                                <video
                                    ref={videoRef}
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    width="100%"
                                    height="100%"
                                    className={'icon'}
                                >
                                    <source type="video/mp4" src={images.dmInteract.image} />
                                </video>
                            </Suspense> */}

                            <AnimatedVideoBox videoSrc={images.dmInteract.image} vidClass={"icon"} />

                            {/* <div className='icon'></div> */}
                            <span className='title'> Interact DataMart</span>

                            <div className="dashed-arrow arrow-left"></div>
                        </div>
                    </div>
                </section>

                <div className='alert-flow-image'>
                    <div className='techno-el'>
                        <img src={technoEl} alt="" className='left-el' />
                        <img src={technoEl} alt="" className='right-el' />
                    </div>
                    <video
                        id="vid"
                        muted
                        autoPlay
                        loop
                        playsInline
                        width="100%"
                        height="100%"
                    >
                        <source type="video/mp4" src={width > 767 ? Hexagonvideo : HexagonMobvideo} />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default MarketingAlerts;