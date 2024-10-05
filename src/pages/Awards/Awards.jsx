import React, { useEffect } from "react";
import "./awards.scss";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { awardsBanner, images, mbAwardsBanner } from "../../images";
import { useWindowSize } from "react-use";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const awardsData = [
  {
    img: images.awardsLakshya.image,
    mbImg: images.awardsLakshyaMb.image,
    alt: images.awardsLakshya.alt,
    title: "My Lakshya dealer portal for Kotak Life Insurance",
  },
  {
    img: images.awardsAPAC.image,
    mbImg: images.awardsAPACMb.image,
    alt: images.awardsAPAC.alt,
    title: "Leading Bank in APAC unveils <br/> E-Statement Interactivity",
  },
  {
    img: images.awardsSohar.image,
    mbImg: images.awardsSoharMb.image,
    alt: images.awardsSohar.alt,
    title:
      "Sohar International leads in Oman <br/> with launch of Interactive <br/> E-Statements",
  },
  {
    img: images.awardsDun.image,
    mbImg: images.awardsDunMb.image,
    alt: images.awardsDun.alt,
    title:
      "Dun & Bradsheet honours Interact <br/> Suite as Premier Product for Customer Experience and Communication Management",
  },
  {
    img: images.awardsPremier.image,
    mbImg: images.awardsPremierMb.image,
    alt: images.awardsPremier.alt,
    title:
      "Premier Bank in Middle East unveils <br/> Interact Suite for Enhanced <br/> Engagement",
  },
];

const Awards = () => {
  const { width } = useWindowSize();

  const awardsList = awardsData.map((item, i) => (
    <div className="col-lg-4 col-md-6 award_col" key={i}>
      <div className="content_wrapper">
        <div className="img_wrapper">
          <img
            src={width <= 767 && item.mbImg ? item.mbImg : item.img}
            alt={item.alt}
            className="awards_img"
          />
        </div>
        <p
          className="title"
          dangerouslySetInnerHTML={{ __html: item.title }}
        ></p>
      </div>
    </div>
  ));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="awards_sec1">
        <CommonBanner
          banner={width > 767 ? awardsBanner : mbAwardsBanner}
          linkText1="Awards"
          title="Awards"
        />
      </section>

      <section className="awards_sec2">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <SectionHeading heading="Awards &" orangeHeading="Recognitions" />
        <div className="row award_row">{awardsList}</div>
      </section>
    </>
  );
};

export default Awards;
