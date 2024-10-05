import React, { memo, useRef, useState, useEffect } from "react";

const AnimatedVideoBox = memo(({ videoSrc, vidClass }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
          videoElement.currentTime = 0;
          setIsVisible(true);
        } else {
          videoElement.pause();
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [videoRef]);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      muted
      playsInline
      width="100%"
      height="100%"
      style={{ display: "block", margin: "auto" }}
      className={`${vidClass ? vidClass : ""}`}
    >
      Your browser does not support the video tag.
    </video>
  );
});

export default AnimatedVideoBox;
