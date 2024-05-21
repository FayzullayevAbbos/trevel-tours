import Offer from "./Offer";


function Offers() {
  const cities = [
    {
      imageUrl: "src/assets/offerIstambul.jpeg",
      cityName: "Istanbul",
      price: 420,
      checkIns: 234,
      deals: [
        "5 Days Trip + Hotel Included",
        "Airplane Bill Included",
        "Daily Places Visit",
      ],
    },
    {
      imageUrl: "src/assets/offerDubai.jpeg",
      cityName: "Dubai",
      price: 700,
      checkIns: 300,
      deals: [
        "5 Days Trip + Hotel Included",
        "Airplane Bill Included",
        "Daily Places Visit",
      ],
    },
    {
      imageUrl: "src/assets/OfferAntalya.jpeg",
      cityName: "Antalya",
      price: 999,
      checkIns: 500,
      deals: [
        "5 Days Trip + Hotel Included",
        "Airplane Bill Included",
        "Daily Places Visit",
      ],
    },
  ];
  return (
    <section className='mt-10 lg:pb-10  mx-auto'>
      <div className='w-full grid place-content-center gap-3 pb-20'>
        <span className='text-center font-bold text-[30px]'>
          Best Weekly Offers In Each City
        </span>
        <span className='lg:max-w-[627px] text-center leading-8 text-[#AFAFAF]'>
          Discover the best weekly offers in each city, curated just
          for you. Immerse yourself in a world of savings and indulge
          in unparalleled experiences.
        </span>
      </div>
      <div className=' px-3 '>
       

        <div className='  grid  overflow-hidden  xl:grid-cols-3  sm:grid-cols-2 md:overflow-hidden  lg:container lg:mx-auto  lg:gap-10  '>
          <div className=''>
            {
              <Offer
                key={0}
                imageUrl={cities[0].imageUrl}
                cityName={cities[0].cityName}
                price={cities[0].price}
                checkIns={cities[0].checkIns}
                deals={cities[0].deals}
              />
            }
          </div>
          <div className='hidden sm:block'>
            {
              <Offer
                key={1}
                imageUrl={cities[1].imageUrl}
                cityName={cities[1].cityName}
                price={cities[1].price}
                checkIns={cities[1].checkIns}
                deals={cities[1].deals}
              />
            }
          </div>
          <div className=' hidden xl:block'>
            {
              <Offer
                key={2}
                imageUrl={cities[2].imageUrl}
                cityName={cities[2].cityName}
                price={cities[2].price}
                checkIns={cities[2].checkIns}
                deals={cities[2].deals}
              />
            }
          </div>
        </div>
        <div className='flex justify-center items-center  gap-3 mt-10'>
          <div className='w-[46px] h-[46px] px-2 py-2 border-[#925FE2] border rounded-[50%] cursor-pointer text-[#925FE2] hover:text-white hover:bg-[#925FE2] '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>
            </svg>
          </div>
          <div className='w-[46px] h-[46px] px-2 py-2 border-[#925FE2] border rounded-[50%] cursor-pointer text-[#925FE2] hover:text-white hover:bg-[#925FE2] '>
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
