import React, { useEffect, useState } from "react";
import "./events.scss";
import { eventsBanner, mbEventsBanner } from "../../images";
import { useWindowSize } from "react-use";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import PillTabs from "../../components/PillTabs/PillTabs";
import { eventPillsTab } from "../../data/events";
import Gallery from "../../components/Gallery/Gallery";

const Events = () => {
  const { width } = useWindowSize();
  const [isPillTab, setIsPillTab] = useState(0);
  // const eventPillsTabLength = eventPillsTab[isPillTab]["gallery"].length;

  // const [visibleImages, setVisibleImages] = useState(
  //   eventPillsTab.reduce((acc, tab, index) => {
  //     acc[index] = 8; // Initialize 8 images visible for each tab
  //     return acc;
  //   }, {})
  // );

  // const handleLoadMore = () => {
  //   setVisibleImages((prevVisibleImages) => ({
  //     ...prevVisibleImages,
  //     [isPillTab]: prevVisibleImages[isPillTab] + 4, // Increase the visible count for the active tab
  //   }));
  // };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="events_sec1">
        <CommonBanner
          banner={width > 767 ? eventsBanner : mbEventsBanner}
          linkText1="Events"
          title="Events"
        />
      </section>

      <section className="events_sec2">
        {/* <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div> */}
        <PillTabs
          pillTabList={eventPillsTab}
          isTab={isPillTab}
          setIsTab={setIsPillTab}
        />
        <div className="gallery_container">
          <Gallery
            galleryImages={eventPillsTab}
            isTab={isPillTab}
            // visible={visibleImages}
          />
          {/* {eventPillsTabLength >= 8 && (
            <div className="load_wrapper">
              <button className="load_more" onClick={handleLoadMore}>
                load More
              </button>
            </div>
          )} */}
        </div>
      </section>
    </>
  );
};

export default Events;
