import { useRef, useEffect, useCallback } from "react";
import { IOptionsSlider } from "../types/options";
import { throttle } from "throttle-debounce-ts";

export const useElementOnScreen = (
  options: IOptionsSlider,
  setIsVisible: React.Dispatch<React.SetStateAction<number>>,
  page: number
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onThrottle = throttle(25, (entries: any) => {
    const [entry] = entries;

    if (entry.isIntersecting === true) {
      setIsVisible((prev) => (prev !== page ? prev + 1 : prev));
    }
    console.log(entry.isIntersecting);
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
