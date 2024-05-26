import React from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";
interface Card {
  country: string;
  image: string;
  checkIns: number;
  benefits: string[];
}

const Card: React.FC<Card> = ({
  country,
  image,
  checkIns,
  benefits,
}) => {
  const [t] = useTranslation()
  return (
    <div
      
      className='flex flex-col w-full relative rounded-l-2xl h-[400px] overflow-hidden '
    >
      <img
        src={image}
        alt={country}
        className=' w-3/4 h-3/2 '
      />
      <div className='p-6 absolute -right-[0] top-10  bg-white rounded-xl  z-10 lg:h-auto shadow-2xl flex flex-col justify-between'>
        <h3 className='text-xl font-semibold mb-2'>{country}</h3>
        <p className='text-gray-600 mb-4  md:text-[12px] text-[12px]  lg:text-[16px] sm:text-[16px] '>
          {checkIns} {t("offersLoc")}
        </p>
        <ul className='list-disc list-inside text-gray-600 md:mb-5  md:text-[12px] text-[12px]  lg:text-[16px] sm:text-[16px] mb-3'>
          {benefits.map((benefit, i) => (
            <li key={i}>{t(benefit)}</li>
          ))}
        </ul>
        <Button full={false} name={t("visaButton")} />
      </div>
    </div>
  );
};

export default Card;
