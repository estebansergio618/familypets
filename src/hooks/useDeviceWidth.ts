import { useState, useEffect } from "react";

const useDeviceWidth = () => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : null;
    return width
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};

export {useDeviceWidth}