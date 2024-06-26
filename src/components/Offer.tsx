import React from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

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

  const [t] = useTranslation()
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
      <div className='p-6 absolute top-[50%] right-0 -translate-y-1/2 bg-white rounded-xl md:h-[70%] h-res xl:h-auto shadow-2xl flex flex-col justify-between '>
        <div className='flex  justify-between items-center'>
          <div className=''>
            <h2 className='text-xl font-semibold text-gray-800'>
              {cityName}
            </h2>
            <p className='text-gray-600 md:text-[12px] text-[12px]  lg:text-[16px] sm:text-[16px] flex items-center'>
              <svg
                className='w-4 h-4 mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10 2a6 6 0 00-6 6c0 4.41 6 10 6 10s6-5.59 6-10a6 6 0 00-6-6zM7 8a3 3 0 116 0 3 3 0 01-6 0z'></path>
              </svg>
              {checkIns} {t("offersLoc")}
            </p>
          </div>

          <div className='mt-2 md:text-[12px] text-[12px]  lg:text-[16px] sm:text-[16px]  text-teal-500  font-semibold'>
            ${price}
          </div>
        </div>

        <div className='my-2'>
          <h3 className='text-gray-700 font-semibold'>
            {t("offersDealIncludes")}
          </h3>
          <ul className='mt-2 text-gray-600 md:text-[12px] text-[12px]  lg:text-[16px] sm:text-[16px] '>
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
                {t(deal)}
              </li>
            ))}
          </ul>
        </div>
        <Button full={false} name={t("offersButton")} />
      </div>
    </div>
  );
};

export default Offer;
