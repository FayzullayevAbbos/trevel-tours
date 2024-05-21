import React from "react";
import VisaCard from "./VisaCard";

const VisaSupport: React.FC = () => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-center mb-8'>
          Visa Support
        </h2>
        <p className='mx-auto  mb-12 lg:max-w-[627px] text-center leading-8 text-[#AFAFAF]'>
          Experience stress-free travel with our expert visa support.
          We provide seamless assistance and comprehensive guidance,
          ensuring a smooth journey.
        </p>
        <VisaCard />
        <div className='flex justify-center items-center  gap-3 '>
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
};

export default VisaSupport;
