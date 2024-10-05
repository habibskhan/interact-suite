import React, { useEffect } from "react";
import "./termsandconditions.scss";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { images } from "../../images";
import { CustomAccordion } from "../../components/Accordion/Accordion";

const faqData = [
  {
    title: "Lorem ipsum is a type of dummy text used randomly",
    content:
      "Cookies are small files of data that help us with the functionality of our website. On your first connection with our website, the cookie technology identifies your browser anonymously. We only use the cookies to understand the traffic movement on our website. No personal information is disseminated to us through cookies at any point.",
  },
  {
    title: "Lorem ipsum is a type of dummy text used randomly",
    content:
      "Cookies are small files of data that help us with the functionality of our website. On your first connection with our website, the cookie technology identifies your browser anonymously. We only use the cookies to understand the traffic movement on our website. No personal information is disseminated to us through cookies at any point.",
  },
  {
    title: "Lorem ipsum is a type of dummy text used randomly",
    content:
      "Cookies are small files of data that help us with the functionality of our website. On your first connection with our website, the cookie technology identifies your browser anonymously. We only use the cookies to understand the traffic movement on our website. No personal information is disseminated to us through cookies at any point.",
  },
  {
    title: "Lorem ipsum is a type of dummy text used randomly",
    content:
      "Cookies are small files of data that help us with the functionality of our website. On your first connection with our website, the cookie technology identifies your browser anonymously. We only use the cookies to understand the traffic movement on our website. No personal information is disseminated to us through cookies at any point.",
  },
  {
    title: "Lorem ipsum is a type of dummy text used randomly",
    content:
      "Cookies are small files of data that help us with the functionality of our website. On your first connection with our website, the cookie technology identifies your browser anonymously. We only use the cookies to understand the traffic movement on our website. No personal information is disseminated to us through cookies at any point.",
  },
  {
    title: "Lorem ipsum is a type of dummy text used randomly",
    content:
      "Cookies are small files of data that help us with the functionality of our website. On your first connection with our website, the cookie technology identifies your browser anonymously. We only use the cookies to understand the traffic movement on our website. No personal information is disseminated to us through cookies at any point.",
  },
];

const TermsAndConditions = () => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, localStorage.getItem("position")), 0);
  }, []);

  return (
    <>
      <section className="terms_banner">
        <CommonBanner
          banner={images.termsBanner.image}
          linkText1="Terms & Conditions"
          title="Terms and Conditions"
        />
        <img
          src={images.waveStatic.image}
          alt={images.waveStatic.alt}
          className="wave_img"
        />
      </section>
      <section className="terms_sec1">
        <div className="my_container">
          <h1 className="section_heading">
            Terms of <span className="orange_heading">Service</span>
          </h1>
          <p className="terms_desc">
            The Interact Suite's Interact audio-video (AV) product represents a
            cutting-edge breakthrough in personalised media communications.
            Building on a decade of innovation, Interact AV combines
            award-winning, patented technology with the latest advancements in
            AI to deliver an unparalleled user experience.
          </p>
          <p className="terms_desc">
            ​​Unlike many competitors who depend on third-party technologies,
            Interact AV utilises a proprietary platform. This ensures that every
            aspect of the video production process—from codebase management to
            data routines and rendering processes—is fully controlled in-house.
            This unique approach guarantees the highest quality audio and video
            output while maintaining cost-efficiency.​​
          </p>
          <p className="terms_desc">
            Interact AV is designed to handle the demands of modern
            communication, offering a highly scalable and secure cloud
            architecture. This robust system can generate and deliver hundreds
            of millions of personalised, secure messages daily across a wide
            range of mediums and devices. Whether it is for marketing campaigns,
            customer service interactions, or educational content, Interact AV
            ensures each message reaches its intended audience with precision
            and security.
          </p>
          <p className="terms_desc">
            ​​Leveraging the latest in AI technology, Interact AV takes
            personalised media to new heights. This capability allows for
            dynamic, on-the-fly content creation that is tailored to the
            individual preferences and behaviours of each user. The result is a
            more engaging and relevant communication experience that drives
            better outcomes for businesses and their customers.
          </p>
          <p className="terms_desc">
            ​​Interact AV sets the standard for personalised audio-video
            communications, combining technological excellence with cutting-edge
            AI and cloud capabilities. Its proprietary, scalable, and secure
            platform ensures that businesses can deliver high-quality,
            personalised messages efficiently and cost-effectively. Experience
            the future of media communication with Interact AV, where innovation
            meets unparalleled performance.
          </p>
          <p className="terms_desc">
            According Forbes Research shows that people are likely to retain 95%
            of a message conveyed through a video, compared to 10% by text.
            Additionally, according to the results of a survey by Biteable, 74%
            of marketers get a higher ROI on video content than static images.
          </p>
          <p className="terms_desc">
            Discover how Interact AV revolutionizes communication for
            enterprises. Say goodbye to standard messages – our advanced
            audio-video platform transforms bills, statements, ads, tutorials,
            policy kits, welcome letters, renewal notices, payment reminders,
            product marketing catalogues and more into interactive, personalized
            videos. With channel and language agnostic features, our platform
            ensures universal accessibility. Craft targeted messages based on
            customer profiles to enhance engagement and drive cross-selling
            opportunities. Experience real-time video generation and elevate
            customer interaction. Explore how our immersive, personalized videos
            can boost engagement by 20%, increasing upsell potential.
          </p>
          <p className="terms_desc">
            According to Forbes research, companies with the strongest
            omnichannel experiences retain 89% of their customers on average,
            compared to 33% retention for companies with weak omnichannel
            customer experience.
          </p>
          <p className="terms_desc">
            The percentage of companies investing in omnichannel experience has
            increased to more than 80% from 20%.​ (ROI)
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
