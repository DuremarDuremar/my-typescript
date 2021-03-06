import { useRef, useEffect, useCallback } from "react";
import { throttle } from "throttle-debounce-ts";

import { IOptionsSlider } from "../types/options";

const options: IOptionsSlider = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};

export const useElementOnScreen = (
  setIsVisible: React.Dispatch<React.SetStateAction<number>>,
  page: number = 0,
  component?: string
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onThrottle = throttle(160, (entries: any) => {
    const [entry] = entries;

    if (entry.isIntersecting === true) {
      if (component === "top") {
        setIsVisible((prev) => (prev !== page ? prev + 1 : prev));
      } else {
        setIsVisible((prev) => (prev <= page ? prev + 8 : prev));
      }
    }
  });

  const callbackFunction = useCallback(onThrottle, [onThrottle]);

  useEffect(() => {
    let observerRefValue: any = null;

    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [callbackFunction, containerRef]);

  return containerRef;
};
