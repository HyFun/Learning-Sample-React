import { useState, useEffect } from "react";

export const useWindowResize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setWindowResize = () => {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);
  }
  useEffect(() => {
    setWindowResize()
  }, []);

  useEffect(() => {
    // const handleResize = () => {
    //   setWidth(document.documentElement.clientWidth);
    //   setHeight(document.documentElement.clientHeight);
    // };
    window.addEventListener("resize", setWindowResize);
    return () => {
      window.removeEventListener("resize", setWindowResize);
    };
  }, []);

  return [width, height];
};
