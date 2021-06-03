import { useRef, useEffect, useCallback } from "react";
import { IOptionsSlider } from "../types/options";

export const useElementOnScreen = (
  options: IOptionsSlider,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const callbackFunction = useCallback(
    (entries: any) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    },
    [setIsVisible]
  );

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
