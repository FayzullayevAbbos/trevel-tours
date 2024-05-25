import Button from "../../../components/Button";
import population from "../../../assets/population.svg"  
import avg from '../../../assets/AVG.svg'
import aria from '../../../assets/aria.svg'
import { Link } from "react-scroll";
interface Data {
  image: string;
  title: string;
  about: string;
  description: string;
  people: string;
  dest: string;
  price: string;
}

function VisitCard({
  image,
  title,
  about,
  description,
  people,
  dest,
  price,
}: Data) {
  return (
    <div className=' overflow-hidden flex items-start flex-col md:flex-row  gap-3 container lg:pr-[200px] border-b pb-8'>
      <img
        src={image}
        alt={title}
        className='md:w-[260px]   rounded-2xl '
      />
      <div className='px-6'>
        <div className=' flex justify-between items-center mb-4'>
          {" "}
          <div className=''>
            <h2 className='text-xl font-semibold '>{title}</h2>
            <div className='text-gray-400'>{about}</div>
          </div>
          <Button full={false} name='Explore More' />
        </div>

        <p className='text-gray-400 pb-4  border-b  '>
          {description}
        </p>

        <div className='flex  justify-between py-4 border-b'>
          <div className=' flex items-center gap-1'>
            <img
              className='w-[18px] lg:w-[26px] lg:h-[22px] h-[18px]'
              src={population}
              alt='population'
            />
            <p className='text-[12px] lg:text-lg'>{people}</p>
          </div>
          <div className=' flex items-center gap-1'>
            <img
              className='w-[18px] lg:w-[26px] lg:h-[22px] h-[18px]'
              src={aria}
              alt='population'
            />
            <p className='text-[12px] lg:text-lg'>{dest}</p>
          </div>
          <div className=' flex items-center gap-1'>
            <img
              className='w-[18px] lg:w-[26px] lg:h-[22px] h-[18px]'
              src={avg}
              alt='population'
            />
            <p className='text-[12px] lg:text-lg'>{price}</p>
          </div>
        </div>
        <div className='py-8'>
          <div className='primary-color flex items-center gap-2  cursor-pointer hover:gap-3 hover:transition-all  hover:duration-900 '>
          <Link to={"contacts"} smooth={true} duration={500}>
            <div className=''> Need Directions ? </div>

            <div className='w-[19px] h-[19px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'></path>
              </svg>
            </div>
          </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitCard;
