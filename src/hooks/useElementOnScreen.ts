import { useRef, useEffect, useCallback } from "react";
import { IOptionsSlider } from "../types/options";
import { throttle } from "throttle-debounce-ts";

export const useElementOnScreen = (
  options: IOptionsSlider,
  setIsVisible: React.Dispatch<React.SetStateAction<number>>
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onThrottle = throttle(50, (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible((prev) => prev + 1);
    } else {
      setIsVisible(0);
    }
    // setIsVisible(entry.isIntersecting);
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
  }, [callbackFunction, containerRef, options]);

  return containerRef;
};
