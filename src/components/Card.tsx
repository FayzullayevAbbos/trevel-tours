import React from "react";
import Button from "./Button";
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
        <p className='text-gray-600 mb-4'>
          {checkIns} Check Ins
        </p>
        <ul className='list-disc list-inside text-gray-600 md:mb-5'>
          {benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
        <Button full={false} name='Make a Reservation' />
      </div>
    </div>
  );
};

export default Card;
