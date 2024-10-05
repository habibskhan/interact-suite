import ClientJourney from "../../components/clientJourney/clientJourney";
import CampaignManagement from "../../components/interactDM/campaignManagement/CampaignManagement";
import CustomerDoc from "../../components/interactDM/customerDoc/CustomerDoc";
import InteractiveContentManagement from "../../components/interactDM/interactiveContentManagement/InteractiveContentManagement";
import MarketingAlerts from "../../components/interactDM/marketingAlerts/MarketingAlerts";
import PrepositionCard from "../../components/interactDM/PrepostionCard/PrepositionCard";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import {
  CUSTOMER_COMMUNICATION_TEXTS,
  HERO_TITLE
} from "../../data/interactDM";
import "./styles.scss";
import dmBanner from '../../assets/dm-banner.png';
import dmBannerMobo from '../../assets/DX-banner-mobo.png';

import moduleName4 from '../../assets/interactDM/Branding & Design.jpg';
import moduleName5 from '../../assets/interactDM/Content Marketing.jpg';
import moduleName2 from '../../assets/interactDM/Mobile & Email Marketing.jpg';
import moduleName6 from '../../assets/interactDM/Performance Marketing.jpg';
import moduleName3 from '../../assets/interactDM/Social Media Management.jpg';
import moduleName1 from '../../assets/interactDM/Web portal & Mobile Apps.jpg';
import { useWindowSize } from "react-use";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { useEffect } from "react";
import { rightWave, whitesmallwave } from '../../images';


export const clientJournery = [
  {
    id: 1,
    heading: "Web portal & Mobile Apps",
    title: "Web portal & Mobile Apps",
    description: [
      `<ul>
    <li>Build a static or an E-commerce website which is mobile responsive</li>
    <li>Monitor website performance and user engagement metrics</li>
    <li>Ensure website optimizes for SEO, monitor website analytics and track visitor activity</li>
    <li>Develop and maintain mobile applications for IOS and Android platforms</li>
  </ul>`,
    ],
    img: moduleName1,
    alt: "MarketingServicesBanner",
  },
  {
    id: 2,
    heading: "Mobile & Email Marketing",
    title: "Mobile & Email Marketing",
    description: [
      `<ul>
    <li>Create campaigns tailored specifically to mobile users</li>
    <li>Utilise Bulk SMS and Email campaigns to reach customers</li>
    <li>Utilise WhatsApp groups to reach a wider audience</li>
    <li>Create multi-lingual messages to reach global consumers</li>
  </ul>
      `
    ],
    img: moduleName2,
    alt: "MarketingServicesBanner",
  },
  {
    id: 3,
    heading: "Social Media Management",
    title: "Social Media Management",
    description: [
      `<ul>
    <li>Manage your online presence across social media platforms</li>
    <li>Leverage influencers, bloggers and brand advocates</li>
    <li>Create and manage paid campaigns</li>
    <li>Implement 360⁰ campaigns, alerts, and notifications</li>
  </ul>
      `,
    ],
    img: moduleName3,
    alt: "MarketingServicesBanner",
  },
  {
    id: 4,
    heading: "Branding & Design",
    title: "Branding & Design",
    description: [
      `<ul>
    <li>Develop a unique visual identity that reflects the brand’s message, values, and goals</li>
    <li>Develop a unique tagline, style, voice, and tone that reflects the brand’s personality</li>
    <li>Design for a range of digital and print media such as websites, flyers, brochures, business cards, promotional materials, etc.</li>
  </ul>
      `,
    ],
    img: moduleName4,
    alt: "MarketingServicesBanner",
  },
  {
    id: 5,
    heading: "Content Marketing",
    title: "Content Marketing",
    description: [
      `<ul>
    <li>Create content for Emailers, Videos, and Photography</li>
    <li>Leverage influencers and industry experts for data-driven personalized videos</li>
    <li>Incorporate the best practices into the content to increase visibility across all social channels</li>
    <li>Optimize content with relevant keywords and phrases</li>
  </ul>`,
    ],
    img: moduleName5,
    alt: "MarketingServicesBanner",
  },
  {
    id: 6,
    heading: "Performance Marketing",
    title: "Performance Marketing",
    description: [
      `<ul>
    <li>Develop and implement a comprehensive performance marketing strategy to maximize ROI</li>
    <li>Manage campaigns on various platforms such as Google Ads, Bing Ads, Facebook Ads, Twitter Ads, and LinkedIn Ads</li>
    <li>Implement Conversion Rate Optimization</li>
    <li>Utilize Google Analytics and reporting</li>
    <li>Track and analyze data to measure performance</li>
  </ul>`,
    ],
    img: moduleName6,
    alt: "MarketingServicesBanner",
  },
];


const InteractDM = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="dm-home">
      <main>

        <section className="ac_sec1">
          <CommonBanner
            banner={width > 767 ? dmBanner : dmBannerMobo}
            linkText1="Product & Solutions"
            linkText2="DM"
            title="Interact DM"
          />
        </section>

        <section className="av_sec2 dm-exp">
          <SectionHeading
            heading={"Digital Marketing"}
            orangeHeading={"Software & Services"}
          />
          <div className="my_container">
            <div className="content_wrapper">
              {CUSTOMER_COMMUNICATION_TEXTS.map((text, index) => (
                <p key={index} className={index === 3 ? 'section_desc Medium' : 'section_desc'}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="dm_sec3">
          <CampaignManagement />
        </section>

        <section className="dm_sec4">
          {/* <img src={rightWave} alt="wave" className="leftWave" /> */}
          <video
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            className="left_wave"
          >
            <source type="video/mp4" src={whitesmallwave} />
          </video>
          <InteractiveContentManagement />
        </section>

        <section className="dm_sec5">
          <PrepositionCard />
        </section>

        <section className="av_sec3 dm_sec5">
          {/* <img src={rightWave} alt="wave" className="rightWave" /> */}
          <video
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            className="right_wave"
          >
            <source type="video/mp4" src={whitesmallwave} />
          </video>
          <MarketingAlerts />
        </section>

        <section className="av_sec3 dm_sec7">
          <video
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            className="left_wave"
          >
            <source type="video/mp4" src={whitesmallwave} />
          </video>

          <CustomerDoc />
        </section>

        <section className="av_sec3 marketing-service dm_sec8" id="transform">
          {/* <img src={rightWave} alt="wave" className="rightWave" /> */}
          <video
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            className="right_wave"
          >
            <source type="video/mp4" src={whitesmallwave} />
          </video>

          <div className="heading">
            <SectionHeading
              heading="Digital Marketing Services to"
              orangeHeading="complement the software’s "
            />
            <p className="desc">
              According to Forbes digital marketing often earns a more substantial ROI than traditional marketing and advertising tactics. Brands with superior customer experience bring in 5.7 times more revenue than competitors that lag in customer experience.
            </p>
          </div>
          <ClientJourney dataList={clientJournery} />
        </section>
      </main>
    </div>
  );
};

export default InteractDM;
