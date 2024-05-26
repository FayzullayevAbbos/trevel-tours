import React, { useRef } from "react";

import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const VisaSupport: React.FC = () => {
  const [t] = useTranslation();
  const sliderRef = useRef<any>(null);
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  const settings: any = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const visaSupportData = [
    {
      country: "heroAntalya",
      image: "https://zamontour.uz/assets/images/china.jpg",
      checkIns: 234,
      benefits: ["offersDeal1", "offersDeal2", "offersDeal3"],
    },
    {
      country: "heroIstambul",
      image: "https://zamontour.uz/assets/images/hongkong.jpg",
      checkIns: 234,
      benefits: ["offersDeal1", "offersDeal2", "offersDeal3"],
    },
    {
      country: "heroDubai",
      image: "https://zamontour.uz/assets/images/europe.jpeg",
      checkIns: 234,
      benefits: ["offersDeal1", "offersDeal2", "offersDeal3"],
    },
  ];
  return (
    <section className='py-12 bg-gray-100'>
      <div className='xl:container mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-center mb-8'>
          {t("visaSupport")}
        </h2>
        <p className='mx-auto  mb-12 lg:max-w-[627px] text-center leading-8 text-[#AFAFAF]'>
          {t("visaP")}
        </p>

        <div className='slider-container  md:overflow-hidden  xl:container  lg:mx-auto  lg:gap-10 '>
          <Slider ref={(slider) => slider} {...settings}>
            <div className=''>
              <Card
                key={1}
                benefits={visaSupportData[0].benefits}
                checkIns={visaSupportData[0].checkIns}
                country={visaSupportData[0].country}
                image={visaSupportData[0].image}
              />
            </div>
            <div className=''>
              <Card
                key={2}
                benefits={visaSupportData[1].benefits}
                checkIns={visaSupportData[1].checkIns}
                country={visaSupportData[1].country}
                image={visaSupportData[1].image}
              />
            </div>
            <div className=''>
              <Card
                key={3}
                benefits={visaSupportData[2].benefits}
                checkIns={visaSupportData[2].checkIns}
                country={visaSupportData[2].country}
                image={visaSupportData[2].image}
              />
            </div>
          </Slider>
        </div>
        <div className='flex justify-center items-center  gap-3 '>
          <div
            onClick={previousSlide}
            className='w-[46px] h-[46px] px-2 py-2 border-[#925FE2] border rounded-[50%] cursor-pointer text-[#925FE2] hover:text-white hover:bg-[#925FE2] '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>
            </svg>
          </div>
          <div
            onClick={nextSlide}
            className='w-[46px] h-[46px] px-2 py-2 border-[#925FE2] border rounded-[50%] cursor-pointer text-[#925FE2] hover:text-white hover:bg-[#925FE2] '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSupport;
