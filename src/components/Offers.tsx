import { useRef } from "react";
import Offer from "./Offer";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";


function Offers() {
  const [t] = useTranslation()
  const sliderRef = useRef<any>(null);
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings:any = {
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
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const cities = [
    {
      imageUrl: "https://zamontour.uz/assets/images/deals-04.jpg",
      cityName: "heroIstambul",
      price: 420,
      checkIns: 234,
      deals: [
        "offersDeal1",
        "offersDeal2",
        "offersDeal3",
      ],
    },
    {
      imageUrl: "https://zamontour.uz/assets/images/offers-02.jpg",
      cityName: "heroDubai",
      price: 700,
      checkIns: 300,
      deals: [
        "offersDeal1",
        "offersDeal2",
        "offersDeal3",
      ],
    },
    {
      imageUrl: "https://zamontour.uz/assets/images/deals-01.jpg",
      cityName: "heroAntalya",
      price: 999,
      checkIns: 500,
      deals: [
        "offersDeal1",
        "offersDeal2",
        "offersDeal3",
      ],
    },
  ];
  return (
    <section className='mt-10 ove lg:pb-10 pb-5  mx-auto'>
      <div className='w-full grid place-content-center gap-3 pb-20'>
        <span className='text-center font-bold text-[30px]'>
         {t("bestOffers")}
        </span>
        <span className='w-[80%] mx-auto text-center leading-8 text-[#AFAFAF]'>
          {t( "discoverBestOffers")}
        </span>
      </div>
      <div className=' px-3 '>
        <div className=' slider-container   overflow-hidden    lg:container lg:mx-auto  lg:gap-10  '>
          <Slider
             ref={slider => (slider)} {...settings}
          >
            <div className=''>
              {
                <Offer
                  key={1}
                  imageUrl={cities[0].imageUrl}
                  cityName={t(cities[0].cityName)}
                  price={cities[0].price}
                  checkIns={cities[0].checkIns}
                  deals={cities[0].deals}
                />
              }
            </div>
            <div className=''>
              {
                <Offer
                  key={2}
                  imageUrl={cities[1].imageUrl}
                  cityName={cities[1].cityName}
                  price={cities[1].price}
                  checkIns={cities[1].checkIns}
                  deals={cities[1].deals}
                />
              }
            </div>
            <div className=''>
              {
                <Offer
                  key={3}
                  imageUrl={cities[2].imageUrl}
                  cityName={cities[2].cityName}
                  price={cities[2].price}
                  checkIns={cities[2].checkIns}
                  deals={cities[2].deals}
                />
              }
            </div>
          </Slider>
        </div>
        <div className='flex justify-center items-center  gap-3 mt-10'>
          <div onClick={previousSlide} className='w-[46px] h-[46px] px-2 py-2 border-[#925FE2] border rounded-[50%] cursor-pointer text-[#925FE2] hover:text-white hover:bg-[#925FE2] '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>
            </svg>
          </div>
          <div onClick={nextSlide} className='w-[46px] h-[46px] px-2 py-2 border-[#925FE2] border rounded-[50%] cursor-pointer text-[#925FE2] hover:text-white hover:bg-[#925FE2] '>
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
}

export default Offers;
