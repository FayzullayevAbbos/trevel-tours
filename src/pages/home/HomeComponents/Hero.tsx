import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import HomoFooter from "./HomoFooter";

function Hero() {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  const countries = [
    {
      name: "dubai",
      flag: "src/assets/dubai.avif",
    },
    {
      name: "Istambul",
      flag: "src/assets/istambul.png",
    },
    {
      name: "Antaliya",
      flag: "src/assets/antalya.avif",
    },
    {
      name: "Sharm El-Sheikh",
      flag: "src/assets/Sharm-El-Sheikh.jpg",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountryIndex(
        (prevIndex) => (prevIndex + 1) % countries.length,
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${countries[currentCountryIndex].flag})`,
      }}
      className={`w-full  bg-cover  bg-center  bg-no-repeat h-[100vh]   `}
    >
      <div className=' w-full h-full relative px-6 top-[-50px]'>
        <div className='w-full h-full mx-auto grid place-content-center gap-4'>
          <p className='font-bold text-[16px] md:text-[20px] text-center  text-white h-full'>
            Take a Glimpse Into The Beautiful City Of:
          </p>
          <h1 className='text-[36px] md:text-[50px] text-center  font-bold text-white'>
            {countries[currentCountryIndex].name}
          </h1>
          <Button full={true} name='Go There' />
        </div>
        <div className=' absolute bottom-[-200px] hero-footer lg:max-w-[1500px]   mx-auto   w-full  '>
          <div className='mx-5 rounded-[20px] md:rounded-[58px] bg-white grid place-content-center grid-cols-2 grid-row-2 lg:grid-cols-4'>
            <HomoFooter
              name={"Population"}
              amount={"54.34 M"}
              img={"src/assets/population.svg"}
            />
            <HomoFooter
              name={"Territory:"}
              amount={"543.59 KM2"}
              img={"src/assets/aria.svg"}
            />
            <HomoFooter
              name={"AVG Price"}
              amount={"$433.89"}
              img={"src/assets/AVG.svg"}
            />
            <Button full={false} name='Explore More'/>
          </div>
          <div className='grid grid-cols-4  lg:mx-[100px] mx-5 gap-10 mt-10 lg:mt-[80px]'>
            {countries.map((e, i) => (
              <div onClick={()=> {
                setCurrentCountryIndex(i)
              }} className='w-full h-[2px] lg:h-[3px] bg-white cursor-pointer'>
                <div
                  className={`fill ${
                    currentCountryIndex == i ? "start" : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
