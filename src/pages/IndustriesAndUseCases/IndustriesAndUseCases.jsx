import React, { useRef, useEffect } from "react";
import "./industriesAndUseCases.scss";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import {
  mbUseCasesBanner,
  scrollRightArrow,
  useCasesBanner,
  whitesmallwave,
} from "../../images";
import CardBox from "../../components/CardBox/CardBox";
import {
  acrossIndData,
  cloudImg,
  cloudPlatformData,
  industryServeData,
  mbCloudPlatformData,
  typesOfCommData,
} from "../../data/industriesAndUseCasesData";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import AcrossIndustries from "../../components/AcrossIndustries/AcrossIndustries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import VideoAudio from "../../components/VideoAudio/VideoAudio";
import Quotes from "../../components/Quotes/Quotes";
import { useWindowSize } from "react-use";

const IndustriesAndUseCases = () => {
  const { width } = useWindowSize();
  const scrollRef = useRef();

  const cloudList = cloudImg.map((logo, i) => (
    <SwiperSlide key={i}>
      <img
        src={width <= 767 && logo.mbImg ? logo.mbImg : logo.img}
        alt={logo.alt}
        className={`leader_logo ${logo.class ? logo.class : ""}`}
      />
    </SwiperSlide>
  ));

  const scrollLeft = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const scrollRight = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="usecases_sec1">
        <CommonBanner
          banner={width > 767 ? useCasesBanner : mbUseCasesBanner}
          linkText1="Industries & Use cases"
          title="Industries & Use cases"
        />
      </section>

      <section className="usecases_sec2">
        <SectionHeading heading="Industries" orangeHeading="We Serve" />
        <CardBox cardData={industryServeData} columns="col-md-4 col-6" />
      </section>

      <section className="usecases_sec3">
        {/* <img
          src={width > 767 ? acrossIndBG : mbAcrossIndBG}
          alt="background"
          className="bg_img"
        /> */}
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
        <SectionHeading
          heading="Business Use Cases"
          orangeHeading="Across Industries"
        />
        <AcrossIndustries colData={acrossIndData} scrollRef={scrollRef} />
        {width <= 991 && (
          <div className="scroll_wrapper">
            <div className="scroll_arrows">
              <img
                src={scrollRightArrow}
                alt="left arrow"
                className="scroll_left"
                onClick={() => scrollLeft(-30)}
              />
              <img
                src={scrollRightArrow}
                alt="right arrow"
                className="scroll_right"
                onClick={() => scrollRight(30)}
              />
            </div>
            <p className="scroll_text">Scroll to explore</p>
          </div>
        )}
      </section>

      <section className="usecases_sec4">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <SectionHeading
          heading="Cloud"
          orangeHeading="Implementations"
          description="the dynamic landscape of digital transformation, the Interact Suite stands as a beacon of innovation and efficiency. Seamlessly integrating with the most formidable cloud partners, we bring you an unparalleled experience of connectivity and collaboration. Our suite is designed to harness the full potential of each cloud partner, ensuring optimal performance, security, and scalability. <br/><br/> The Interact Suite is consistently ranked among the top 100 technology solution providers and boasts technology experts across Asia, Middle East, Africa, North America and Europe."
        />
        <Swiper
          className="cloud_slider"
          slidesPerView={3}
          allowTouchMove={false}
          loop={true}
          speed={3999}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.7,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {cloudList}
        </Swiper>
      </section>

      <section className="usecases_sec5">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
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
        <SectionHeading heading="Secure" orangeHeading="Cloud Platform" />
        <VideoAudio
          data={width > 990 ? cloudPlatformData : mbCloudPlatformData}
          columns5={true}
        />
      </section>

      <section className="usecases_sec6">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
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
        {width > 767 ? (
          <SectionHeading
            heading="Type of Communications Deployed - <br/>"
            orangeHeading="Reference Implementations"
          />
        ) : (
          <SectionHeading
            heading="Type of <br/> Communications Deployed -"
            orangeHeading="Reference Implementations"
          />
        )}
        <Quotes quoteData={typesOfCommData} />
      </section>
    </>
  );
};

export default IndustriesAndUseCases;
