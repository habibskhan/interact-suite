import React, { useEffect, useRef, useState } from "react";
import "./homepage.scss";
import {
  customerOfferBanner,
  customerOfferBannerMb,
  greyArrow,
  homeBanner,
  homeMbBanner,
  lightBluelueGlowCircle,
  offersBorderTab1,
  offersBorderTab2,
  orangeDot,
  orangeDotWhite,
  scrollRightArrow,
  tooltipDownBox,
  tooltipUpBox,
  waveVideoBg,
  whiteArrow,
  whitesmallwave,
} from "../../images";
import CommonCta from "../../components/commonCta/CommonCta";
import ClientJournery from "../../components/clientJourney/clientJourney";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  cardData,
  circleData,
  clientJournery,
  futureDigitalData,
  hoverCardData,
  leaderLogo,
  unpluggedData,
} from "../../data/home";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Tabs from "../../components/Tabs/Tabs";
import CardBox from "../../components/CardBox/CardBox";
import CircleProgress from "../../components/CircleProgress/CircleProgress";
import { useWindowSize } from "react-use";

const Homepage = () => {
  const { width } = useWindowSize();
  const [isTab, setIsTab] = useState(0);
  const [isClicked, setIsClicked] = useState(0);
  const [isTooltip, setIsTooltip] = useState(0);
  const [isChild, setIsChild] = useState(0);
  const scrollRef = useRef();
  const customerTextLength = unpluggedData[isTab]["data"].length;

  const leadersLogoList = leaderLogo.map((logo, i) => (
    <SwiperSlide key={i}>
      <img src={logo.img} alt={logo.alt} className="leader_logo" />
    </SwiperSlide>
  ));

  const futureDigitalList = futureDigitalData.map((item, i) => (
    <div className="dot_wrapper" key={i}>
      {item?.data.map((details, index) => (
        <div
          className="dot_data"
          key={index}
          onMouseOver={() => {
            setIsTooltip(i);
            setIsChild(index);
          }}
          onMouseOut={() => {
            setIsTooltip(false);
            setIsChild(false);
          }}
        >
          <img src={orangeDotWhite} alt="dot" className="dot_icon_white" />
          <img src={orangeDot} alt="dot" className="dot_icon" />
          <div
            className={`content_box ${
              isTooltip === i && isChild === index ? "active" : ""
            }`}
          >
            <img
              src={i === 0 ? tooltipDownBox : tooltipUpBox}
              alt={details.text}
              className="text_box"
            />
            <div class="triangle-down"></div>
            <img src={details.icon} alt="tootip icon" className="tootip_icon" />
            <p
              className="tooltip_text"
              dangerouslySetInnerHTML={{ __html: details.text }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  ));

  const hoverCardList = hoverCardData.map((item, i) => (
    <div className="col-lg-4 col-md-6 hovercard_col" key={i}>
      <div className="hover_card">
        <div className="img_wrapper">
          <img
            src={width <= 767 && item.mbImg ? item.mbImg : item.img}
            alt={item.alt}
            className="card_img"
          />
        </div>
        <div className="desc_wrapper">
          <p className="section_desc">{item.desc}</p>
        </div>
      </div>
    </div>
  ));

  const scrollLeft = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const scrollRight = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const scrollToSection = (scrollid, offset) => {
    const id = scrollid;
    const yOffset = offset;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
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
      <section className="home_sec1">
        <div className="banner_wrapper">
          <img
            src={width > 767 ? homeBanner : homeMbBanner}
            alt="banner"
            className="banner_img"
          />
          <div className="my_container">
            <div className="text_wrapper">
              <h1 className="heading">Interact Suite</h1>
              <p className="desc">Where Engagement Meets Innovation</p>
              <CommonCta
                linkText="SCHEDULE A DEMO"
                link={() => false}
                linkCta
              />
            </div>

            <div
              class="mouse_scroll"
              onClick={() => scrollToSection("transform", 0)}
            >
              <div class="mouse">
                <div class="wheel"></div>
              </div>
              <div class="text">Scroll to explore</div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_sec2" id="transform">
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
          orangeHeading1="Digital Transformation "
          heading="of end-to-end Client Journey’s"
        />
        <ClientJournery dataList={clientJournery} />
      </section>

      <section className="home_sec3">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        {width >= 992 ? (
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
        ) : (
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
        )}
        <SectionHeading
          heading="Trusted by the World's"
          orangeHeading="Global Leaders"
        />
        <Swiper
          className="logo_slider"
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
          {leadersLogoList}
        </Swiper>
      </section>

      <section className="home_sec4">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        {/* {width >= 992 && (
          <video
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            className="right_wave"
          >
            <source type="video/mp4" src={smallwave} />
          </video>
        )} */}
        <SectionHeading
          heading="Customer Delight."
          orangeHeading="Unplugged"
          description="Interact Suite enhances customer experience and helps our clients increase their customer engagement"
        />

        {width >= 992 ? (
          <>
            <Tabs tabName={unpluggedData} isTab={isTab} setIsTab={setIsTab} />
            <div className="unplugged_data_wrapper">
              <img
                src={customerOfferBanner}
                alt="offer banner"
                className="offer_banner"
              />
              {/* <img src={wifi} alt="offers" className="wifi_icon" /> */}
              {isTab === 0 && (
                <div className="offers_wrapper">
                  <img
                    src={offersBorderTab1}
                    alt="offers"
                    className="offers_img"
                  />
                  <h2 className="title">
                    What <br /> Interact Suite <br /> Offers
                  </h2>
                  <div className="content_wrapper">
                    {unpluggedData[isTab]["data"].map((item, i) => (
                      <p
                        className={`text ${
                          customerTextLength === 5 ? "points5" : ""
                        }`}
                        key={i}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></p>
                    ))}
                  </div>
                </div>
              )}
              {isTab === 1 && (
                <div className="offers_wrapper">
                  <img
                    src={offersBorderTab2}
                    alt="offers"
                    className="offers_img"
                  />
                  <h2 className="title title5">
                    Your <br /> Customers <br /> Can Get
                  </h2>
                  <div className="content_wrapper">
                    {unpluggedData[isTab]["data"].map((item, i) => (
                      <p
                        className={`text ${
                          customerTextLength === 5 ? "points5" : ""
                        }`}
                        key={i}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="mobile_unplugged_wrapper" id="offers_id">
            {unpluggedData.map((acc, i) => (
              <div
                className={`accordion-btn-wrapper ${
                  isClicked === i ? "active" : ""
                }`}
                key={i}
              >
                <div
                  className={`accordion-heading ${
                    isClicked === i ? "active" : ""
                  }`}
                  onClick={() => {
                    setIsClicked(i);
                    scrollToSection("offers_id", 116 * i);
                  }}
                >
                  <img
                    src={isClicked === i ? whiteArrow : greyArrow}
                    alt="arrow"
                    className={`arrow ${isClicked === i ? "active" : ""}`}
                  />
                  <h4 className={`tab_name ${isClicked === i ? "active" : ""}`}>
                    {acc.title}
                  </h4>
                </div>

                <div
                  className={`accordion-items ${
                    isClicked === i ? "active" : ""
                  }`}
                >
                  <img
                    src={customerOfferBannerMb}
                    alt="offer banner"
                    className="offer_banner"
                  />
                  <div className="my_container">
                    <h4 className="heading">{acc.title}</h4>
                    <div className="row data_row">
                      {acc?.data.map((item, i) => (
                        <div
                          className={`data_col ${
                            item.singleCol ? item.singleCol : "col-6"
                          }`}
                          style={{ padding: item.singleCol ? "0" : "" }}
                          key={i}
                        >
                          <div className="data_box">
                            <img
                              src={lightBluelueGlowCircle}
                              alt="blue circle"
                              className="blue_cricle"
                            />
                            <div className="icon_wrapper">
                              <img
                                src={item.img}
                                alt="blue circle"
                                className="icon"
                              />
                            </div>
                            <p
                              className="desc"
                              dangerouslySetInnerHTML={{ __html: item.desc }}
                            ></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="home_sec5">
        <div className="vertical_line_1 white_vertical_line"></div>
        <div className="vertical_line_2 white_vertical_line"></div>
        <div className="vertical_line_3 white_vertical_line"></div>
        <video
          className="wave_vid"
          muted
          autoPlay
          loop
          playsInline
          width="100%"
          height="100%"
        >
          <source type="video/mp4" src={waveVideoBg} />
        </video>
        <SectionHeading
          heading="Future Perfect Digital Offerings For Enhanced "
          orangeHeading="<br/> Customer Experience"
        />
        <div className="future_wrapper" ref={scrollRef}>
          <div className="my_container">{futureDigitalList}</div>
        </div>
        {width <= 767 && (
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

      <section className="home_sec6">
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
        <SectionHeading
          heading="Why"
          orangeHeading="Interact Suite?"
          description="Interact Suite, supports digitisation of end-to-end client journeys from presales, acquisition, onboarding, cross-sell, up-sell, customer servicing, encompassing entire customer lifecycle."
        />
        <CardBox cardData={cardData} />
      </section>

      <section className="home_sec7">
        <CircleProgress circleData={circleData} />
      </section>

      <section className="home_sec8">
        <SectionHeading heading="Customer " orangeHeading="Speaks" />
        <div className="my_container">
          <div className="row hovercard_row">{hoverCardList}</div>
        </div>
      </section>

      <section className="home_sec9">
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
        <div className="my_container">
          <div className="content_wrapper">
            <h2 className="heading">
              Transform your customer experience. <br /> Schedule a demo or
              contact us at{" "}
              <a href="mailto:info@interactsuite.com" className="link">
                info@interactsuite.com
              </a>
            </h2>
            {/* <div className="cta_wrapper">
              <CommonCta linkText="KNOW MORE" link={() => false} linkCta />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
