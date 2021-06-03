import React, { useRef, useEffect, useState } from "react";
import { IOptionsSlider } from "../types/options";

export const useElementOnScreen = (options: IOptionsSlider) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    };
  }, [containerRef, options]);

  console.log(isVisible);

  return containerRef;
};
