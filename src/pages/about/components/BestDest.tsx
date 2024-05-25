import {  useState } from "react";

const BestDest = () => {
  
  function changeFullImage(index: number) {
    setIndex(index);
    setDest((prevDestinations) =>
      prevDestinations.map((dest, i) =>
        i === index
          ? { ...dest, full: true }
          : { ...dest, full: false },
      ),
    );
  }

  

  const [destinations, setDest] = useState([
    {
      key: 1,
      name: "Dubai",
      population: "2M",
      description: "Aholisi: 2M",
      imageUrl: "https://zamontour.uz/assets/images/dubai.jpg",
      full: true,
    },
    {
      key: 2,
      name: "Antalya",
      population: "3.5M",
      description: "Aholisi: 3.5M",
      imageUrl: "https://zamontour.uz/assets/images/antalya.jpg",
      full: false,
    },
    {
      key: 3,
      name: "Istanbul",
      population: "4.1M",
      description: "Aholisi: 4.1M",
      imageUrl: "https://zamontour.uz/assets/images/istanbul.jpg",
      full: false,
    },
    {
      key: 4,
      name: "Sharm El-Sheikh",
      population: "4M",
      description: "Aholisi: 4M",
      imageUrl: "https://zamontour.uz/assets/images/sharm.jpg",
      full: false,
    },
    {
      key: 5,
      name: "Paris",
      population: "3M",
      description: "Aholisi: 3M",
      imageUrl: "https://zamontour.uz/assets/images/best-05.jpg",
      full: false,
    },
  ]);
  
  

 
  return (
    <section className='mt-10 lg:pb-10 pb-5 px-3 mx-auto'>
      <div className='w-full grid place-content-center gap-3 pb-20'>
        <span className='text-center font-bold text-[30px]'>
          Best Locations
        </span>
        <span className='lg:max-w-[627px] text-center leading-8 text-[#AFAFAF]'>
          Discover the best offers in each city, curated just for you.
          Immerse yourself in a world of savings and indulge in
          unparalleled experiences.
        </span>
      </div>
      <div className='grid grid-cols-6 sm:grid-cols-11 grid-flow-row-dense grid-rows-1 gap-3 mx-auto w-full max-w-[760px] transition duration-1000'>
        {destinations.map((destination, index: number) => (
          <div
            key={destination.name}
            className={`bg-white  shadow-lg  overflow-hidden rounded-[40px] h-[400px] flex items-end  text-white bg-center bg-cover ${
              destination.full
                ? "sm:col-span-7 col-span-2 "
                : "sm:w-[60px] col-span-1 justify-center"
            }`}
            style={{
              backgroundImage: `url(${destination.imageUrl})`,
              backgroundRepeat: "none",
            }}
          >
            <div
              className={` w-full flex items-center flex-col sm:flex-row transition duration-1000 ${
                destination.full
                  ? " justify-start pl-3"
                  : "justify-center mb-3"
              } `}
            >
              <div
                onClick={() => changeFullImage(index)}
                className='w-[45px] cursor-pointer h-[45px] p-2 rounded-[50%] transition duration-1000 bg-white'
              >
                <svg
                  width={30}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='rgba(146,95,226,1)'
                >
                  <path d='M12 2L16.2426 6.24264L14.8284 7.65685L12 4.82843L9.17157 7.65685L7.75736 6.24264L12 2ZM2 12L6.24264 7.75736L7.65685 9.17157L4.82843 12L7.65685 14.8284L6.24264 16.2426L2 12ZM22 12L17.7574 16.2426L16.3431 14.8284L19.1716 12L16.3431 9.17157L17.7574 7.75736L22 12ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM12 22L7.75736 17.7574L9.17157 16.3431L12 19.1716L14.8284 16.3431L16.2426 17.7574L12 22Z'></path>
                </svg>
              </div>
              <div
                className={`p-2 ${
                  destination.full ? "flex mb-3" : "hidden"
                } flex-col transition duration-1000`}
              >
                <h3 className='sm:text-xl text-[10px] font-semibold '>
                  {destination.name}
                </h3>
                <p className='font-meduim hidden sm:block sm:text-[14px] text-[8px]'>
                  {destination.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDest;
