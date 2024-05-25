declare module 'react-slick' {
  import * as React from 'react';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    // Add more settings as needed
  }

  export interface SliderMethods {
    slickNext: () => void;
    slickPrev: () => void;
    slickGoTo: (index: number, dontAnimate?: boolean) => void;
    slickPause: () => void;
    slickPlay: () => void;
  }

  export class Slider extends React.Component<{ settings?: Settings }> implements SliderMethods {}
  export default Slider;
}
