import React from "react";
import Button from "./Button";

interface CityCardProps {
 
  imageUrl: string;
  cityName: string;
  price: number;
  checkIns: number;
  deals: string[];
}

const Offer: React.FC<CityCardProps> = ({

  imageUrl,
  cityName,
  price,
  checkIns,
  deals,
}) => {
  return (
    <div
      className='flex flex-col w-full relative bg-white rounded-l-2xl overflow-hidden '   
    >
      <div className='w-[80%] h-full '>
        <img
          src={imageUrl}
          alt={`${cityName} Image`}
          className='h-full w-full'
        />
      </div>
      <div className='p-6 absolute top-[50%] right-0 -translate-y-1/2 bg-white rounded-xl h-[70%] lg:h-auto shadow-2xl flex flex-col justify-between '>
        <div className='flex  justify-between items-center'>
          <div className=''>
            <h2 className='text-xl font-semibold text-gray-800'>
              {cityName}
            </h2>
            <p className='text-gray-600 flex items-center'>
              <svg
                className='w-4 h-4 mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10 2a6 6 0 00-6 6c0 4.41 6 10 6 10s6-5.59 6-10a6 6 0 00-6-6zM7 8a3 3 0 116 0 3 3 0 01-6 0z'></path>
              </svg>
              {checkIns} Check-ins
            </p>
          </div>

          <div className='mt-2 text-teal-500 text-xl font-semibold'>
            ${price}
          </div>
        </div>

        <div className='my-2'>
          <h3 className='text-gray-700 font-semibold'>
            Deal includes:
          </h3>
          <ul className='mt-2 text-gray-600'>
            {deals.map((deal, index) => (
              <li key={index} className='flex items-center mt-1'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10 2a6 6 0 00-6 6c0 4.41 6 10 6 10s6-5.59 6-10a6 6 0 00-6-6zM7 8a3 3 0 116 0 3 3 0 01-6 0z'></path>
                </svg>
                {deal}
              </li>
            ))}
          </ul>
        </div>
        <Button full={false} name='Make a Reservation' />
      </div>
    </div>
  );
};

export default Offer;
