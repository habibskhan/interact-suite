import React, { useEffect } from "react";
import "./faq.scss";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { Wave03, circle80, icon01, icon02, images } from "../../images";
import { CustomAccordion } from "../../components/Accordion/Accordion";

const animData = [
  icon01,
  icon02,
  circle80,
  circle80,
  circle80,
  circle80,
  circle80,
  circle80,
];

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

const FAQ = () => {
  // const videoRef = useRef([]);

  // useEffect(() => {
  //   let options = {
  //     rootMargin: "0px",
  //     threshold: [0.25, 0.75],
  //   };

  //   let handlePlay = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         videoRef.current.play();
  //       } else {
  //         videoRef.current.pause();
  //       }
  //     });
  //   };

  //   let observer = new IntersectionObserver(handlePlay, options);

  //   observer.observe(videoRef.current);
  // });

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, localStorage.getItem("position")), 0);
  }, []);

  return (
    <>
      <section className="faq_banner">
        <CommonBanner
          banner={images.faqBanner.image}
          linkText1="FAQs"
          title="FAQs"
        />
        <img
          src={images.waveStatic.image}
          alt={images.waveStatic.alt}
          className="wave_img"
        />
      </section>
      <section className="faq_sec1">
        <div className="my_container">
          <h1 className="section_heading">
            Commonly Asked <span className="orange_heading">Questions</span>
          </h1>
          <div className="accordion_container">
            <CustomAccordion firstActive items={faqData} />
          </div>
        </div>
      </section>

      <section className="animated_video_sec">
        <div className="my_container">
          <div className="row">
            {animData.map((video, i) => (
              <div
                className="col-md-3"
                key={`animated-video-${i}`}
                style={{ padding: "5px" }}
              >
                <video
                  id="vid"
                  muted
                  autoPlay
                  loop
                  // ref={videoRef}
                  playsInline
                  width="100%"
                  height="100%"
                  className={`animated-video-${i}`}
                >
                  <source type="video/mp4" src={video} />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wave_sec">
        <div className="animated_video_bg">
          <video
            id="vid"
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            height="100%"
          >
            <source type="video/mp4" src={Wave03} />
          </video>
        </div>
      </section>
    </>
  );
};

export default FAQ;
