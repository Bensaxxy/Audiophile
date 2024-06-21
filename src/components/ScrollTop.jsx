import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const smoothScrollToTop = () => {
      const startPosition = window.pageYOffset;
      const distance = startPosition;
      const duration = 1000; // Duration in milliseconds
      let startTime = null;

      const easeInOutQuad = (time, from, distance, duration) => {
        time /= duration / 2;
        if (time < 1) return (distance / 2) * time * time + from;
        time--;
        return (-distance / 2) * (time * (time - 2) - 1) + from;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          -distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    smoothScrollToTop();
  }, [pathname]);

  return null;
  s;
};

export default ScrollTop;
