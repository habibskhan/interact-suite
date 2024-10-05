import {
  avURL,
  customerAnalyticsURL,
  cxURL,
  dmURL,
  dxURL,
} from "../components/helpers/constant-words";
import {
  futureBillIcon,
  futureComm,
  futureUIUX,
  images,
} from "../images";

export const clientJournery = [
  {
    id: 1,
    heading: "Interact DX",
    title: "Customer Communication Management (CCM HUB)",
    description: [
      `Interact DX is an <span class='regular'>advanced & centralized customer communication
      management platform</span> that enables you to create all form of communications across an 
      organization from hybrid data sources / legacy systems, delivering the same 
      <span class='regular'>across all channels i.e., email / web / SMS / WhatsApp...</span>
      `,
    ],
    link: dxURL,
    img: images.interactDX.image,
    mbImg: images.interactDXMb.image,
    alt: images.interactDX.alt,
  },
  {
    id: 2,
    heading: "Interact CX",
    title: "Customer Experience Management",
    description: [
      `Interact CX enhances <span class='regular'>visualisation capabilities providing an easy-to-use interface for customers, partners, employees, dealers and more…</span>
      Simplified smart UI/UX provides users the ability to complete a desired task quickly with and impressive look and feel.
      `,
      `<span class='regular'>Engage Customers with interactive content delivery across devices and browsers</span>`,
    ],
    link: cxURL,
    img: images.interactCX.image,
    mbImg: images.interactCXMb.image,
    alt: images.interactCX.alt,
  },
  {
    id: 3,
    heading: "Interact AV",
    title: "Personalised Data Driven Audio Video Messaging based on AI",
    description: [
      `Interact AV provides <span class='regular'>audio video technology to generate real-time personalised video messages</span> based on user profiles. Use of Artificial Intelligence (AI) within audiovisual communications  improves engagement for <span class='regular'>recommendations, servicing, renewals, welcome kits, promotions, KYC documents, targeted marketing and explanatory videos</span>.
      `,
    ],
    link: avURL,
    img: images.interactAV.image,
    mbImg: images.interactAVMb.image,
    alt: images.interactAV.alt,
  },
  {
    id: 4,
    heading: "Interact DM",
    title: "Digital Marketing Software & Services",
    description: [
      `Interact DM provides a platform <span class='regular'>for Marketing  of products and services using digital technologies,</span> 
      including web portals, mobile, SMS, WhatsApp. Interact DM excels in all digital marketing solutions such 
      as real time alerts and notifications, campaign management, targeted marketing on client communications, 
      WhatsApp implementations, Personalised Videos, Dynamic Videos for customer communications, social media 
      analytics, branding, design and performance marketing
      `,
    ],
    link: dmURL,
    img: images.interactDM.image,
    mbImg: images.interactDMMb.image,
    alt: images.interactDM.alt,
  },
  {
    id: 5,
    heading: "Analytics",
    title: "Empowering customers to enhance customer loyalty",
    description: [
      `Analytics are indispensable tools for end customers and organisations in-order to make informed decisions. <span class='regular'>Harnessing personalised spending & earnings, data-driven insights</span> into customer behavior, market trends, operational efficiency, organisations can propel strategic initiatives and sustain a competitive edge.`,
    ],
    link: customerAnalyticsURL,
    img: images.analytics.image,
    mbImg: images.analyticsMb.image,
    alt: images.analytics.alt,
  },
];

export const leaderLogo = [
  {
    id: 1,
    img: images.leaderHDFC.image,
    alt: images.leaderHDFC.alt,
  },
  {
    id: 2,
    img: images.leaderAdityaBirla.image,
    alt: images.leaderAdityaBirla.alt,
  },
  {
    id: 3,
    img: images.leaderAxisBank.image,
    alt: images.leaderAxisBank.alt,
  },
  {
    id: 4,
    img: images.leaderBajaj.image,
    alt: images.leaderBajaj.alt,
  },
  {
    id: 5,
    img: images.leaderDialog.image,
    alt: images.leaderDialog.alt,
  },
  {
    id: 6,
    img: images.leaderICICI.image,
    alt: images.leaderICICI.alt,
  },
  {
    id: 7,
    img: images.leaderMayBank.image,
    alt: images.leaderMayBank.alt,
  },
  {
    id: 8,
    img: images.leaderNBK.image,
    alt: images.leaderNBK.alt,
  },
  {
    id: 9,
    img: images.leaderOmantel.image,
    alt: images.leaderOmantel.alt,
  },
];

export const unpluggedData = [
  {
    id: 1,
    title: "What Interact Suite Offers",
    data: [
      {
        img: images.timeManagement.image,
        desc: `Create a single bill or consolidated statement for multiple product offerings`,
      },
      {
        img: images.creditCard.image,
        desc: `Customers can view communications on the go anywhere any time`,
      },
      {
        img: images.monitor.image,
        desc: `Enhanced security to <br /> pay bills safely and securely`,
      },
      {
        img: images.socialMedia.image,
        desc: `Get real time access to advanced analytics on communications, bills and statements`,
      },
      {
        img: images.offerPersonalData.image,
        desc: `Digital Marketing software's for Campaigns, Alerts & Analytics`,
      },
      {
        img: images.offerCommunication.image,
        desc: `Personalised data driven audio video communication`,
      },
      {
        img: images.billIcon.image,
        singleCol: "col-12",
        desc: `Easy to use self-serve product with an intuitive <br /> GUI editor to create templates for various communications <br /> across email, SMS, WhatsApp & print`,
      },
    ],
  },
  {
    id: 2,
    title: "Your Customers Can Get",
    data: [
      {
        img: images.billIcon.image,
        desc: `Online and offline access across digital devices`,
      },
      {
        img: images.timeManagement.image,
        desc: `Secured payment gateway & password protection`,
      },
      {
        img: images.creditCard.image,
        desc: `Segmented & personalised offers`,
      },
      {
        img: images.monitor.image,
        desc: `Dynamically generated interactive analytics`,
      },
      {
        img: images.socialMedia.image,
        singleCol: "col-12",
        desc: `A unified view of multiple <br /> products and services`,
      },
    ],
  },
];

export const futureDigitalData = [
  {
    id: 1,
    data: [
      {
        icon: futureUIUX,
        text: "Smart UI/UX",
      },
      {
        icon: futureBillIcon,
        text: "Consolidated Statements & Bills",
      },
      {
        icon: futureComm,
        text: "Campaign Management",
      },
      {
        icon: futureUIUX,
        text: "Enhanced Security Compliance",
      },
      {
        icon: futureBillIcon,
        text: "Real Time Alerts & Notifications",
      },
      {
        icon: futureComm,
        text: "Personalised Advisory & Recommendations",
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        icon: futureUIUX,
        text: "Interactive Communication",
      },
      {
        icon: futureUIUX,
        text: "Improves ROI",
      },
      {
        icon: futureUIUX,
        text: "Integrated Marketing",
      },
      {
        icon: futureUIUX,
        text: "Customer Loyalty & Retention",
      },
    ],
  },
];

export const cardData = [
  {
    id: 1,
    img: images.whyCentralised.image,
    desc: "Centralised Communication <br/> Management Hub",
  },
  {
    id: 2,
    img: images.whyInnovative.image,
    desc: "Innovative & <br/> Smart UX/UI",
  },
  {
    id: 3,
    img: images.whyResponsive.image,
    desc: "Auto responsive Interactive <br/> Communication <br/> Across Delivery Channels",
  },
  {
    id: 4,
    img: images.whyMultilingual.image,
    desc: "Multilingual Personalised <br/> Audio-Video Messaging",
  },
  {
    id: 5,
    img: images.whyDigital.image,
    desc: "Integrated Digital Marketing, <br/> Alerts, Notifications and <br/> Campaigns",
  },
  {
    id: 6,
    img: images.whyProduct.image,
    desc: "Product research & development, <br/> delivery and operational services <br/> available across the globe",
  },
  {
    id: 7,
    img: images.whyDecades.image,
    desc: "More than 1.5 decades of <br/> experience in the domain of <br/> digital customer <br/> communications management",
  },
  {
    id: 8,
    img: images.whyImplementation.image,
    desc: "Implementations scaled to <br/> millions of transactions, customers, <br/> terabytes of data, and thousands of <br/> templates",
  },
];

export const hoverCardData = [
  {
    img: images.hoverDialog.image,
    alt: images.hoverDialog.alt,
    desc: '"Aurionpro has supported us to centralise and automate our delivery and operations, significantly enhancing the customer experience in bill presentment with the Interact Suite solution."',
  },
  {
    img: images.hoverIDFC.image,
    alt: images.hoverIDFC.alt,
    desc: "“Interact Suite’s performance is excellent and we appreciate the skills and knowledge base of the team in the domain of communication such as customer statements, advices, welcome letters etc.”",
  },
  {
    img: images.hoverHDFC.image,
    mbImg: images.hoverHDFCMobile.image,
    alt: images.hoverHDFC.alt,
    desc: "“Flexibility in the Interact Suite application made it easy to adapt to integrations with the existing application frameworks such as online portal, core policy admin systems, and document management systems.”",
  },
  {
    img: images.hoverICICI.image,
    alt: images.hoverICICI.alt,
    desc: "“We needed a product that could reduce the time to market by empowering business managers to easily create content such as marketing messages, campaigns, and cross sell-up sell offers, and to control how and when this content is included in correspondence. Interact Suite aligned to this expectation.”",
  },
];

export const circleData = [
  {
    id: 1,
    percent: "80%",
    desc: "Cost reduction in print, postage and delivery",
    vid: images.homeProgress80.image,
  },
  {
    id: 2,
    percent: "70%",
    desc: "Conversion from prospects to customer",
    vid: images.homeProgress70.image,
  },
  {
    id: 3,
    percent: "50%",
    desc: "Reduction in TAT to resolve customer queries",
    vid: images.homeProgress50.image,
  },
  {
    id: 4,
    percent: "40%",
    desc: "Increase in customer loyalty",
    vid: images.homeProgress40.image,
  },
  {
    id: 5,
    percent: "20%",
    desc: "Increase in cross-sell and up-sell",
    vid: images.homeProgress20.image,
  },
  {
    id: 6,
    percent: "200+",
    desc: "Millions communications distributed monthly",
    vid: images.homeProgress200.image,
  },
];
