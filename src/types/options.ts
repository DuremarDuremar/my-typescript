export interface IOptionsSlider {
  root: Element | null;
  rootMargin: string;
  threshold: number | number[];
}

export interface ItransitionStyles {
  entering: {
    opacity: number;
  };
  entered: {
    opacity: number;
  };
  exiting: {
    opacity: number;
  };
  exited: {
    opacity: number;
  };
}
