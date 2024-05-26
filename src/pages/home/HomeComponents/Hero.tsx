import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import HomoFooter from "./HomoFooter";
import population from "../../../assets/population.svg"  
import avg from '../../../assets/AVG.svg'
import aria from '../../../assets/aria.svg'
import { useTranslation } from "react-i18next";

function Hero() {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
 const [t] = useTranslation()
  const countries = [
    {
      name: "heroDubai",
      flag: "https://zamontour.uz/assets/images/dubai2.jpg",
    },
    {
      name: "heroIstambul",
      flag: "https://zamontour.uz/assets/images/istanbul.jpg",
    },
    {
      name: "heroAntalya",
      flag: "https://zamontour.uz/assets/images/antalya2.jpg",
    },
    {
      name: "heroSharm",
      flag: "https://zamontour.uz/assets/images/sharm.jpg",
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
      className={`w-full mx-auto bg-cover  bg-center ove bg-no-repeat h-[100vh]   `}
    >
      <div className=' w-full h-full relative  top-[-50px]'>
        <div className='w-full h-full mx-auto grid place-content-center gap-4'>
          <p className='font-bold text-[16px] md:text-[20px] text-center  text-white h-full'>
            {t('heroTitle')}
          </p>
          <h1 className='text-[36px] md:text-[50px] text-center  font-bold text-white'>
            {t(countries[currentCountryIndex].name)}
          </h1>
          <Button full={true} name={t("go")} />
        </div>
        <div className=' absolute bottom-[-200px] hero-footer lg:max-w-[1500px]   mx-auto   w-[95%]  '>
          <div className=' rounded-[20px] md:rounded-[58px] bg-white grid place-content-center grid-cols-2 grid-row-2 lg:grid-cols-4'>
            <HomoFooter
            key={1}
              name={t("heroPopulation")}
              amount={"54.34 M"}
              img={population}
            />
            <HomoFooter
            key={2}
              name={t("heroAria")}
              amount={`543.59 ${t("visitKM")}`}
              img={aria}
            />
            <HomoFooter
            key={3}
              name={t("heroAVG")}
              amount={"$433.89"}
              img={avg}
            />
            <Button full={false} name={t("heroButton")}/>
          </div>
          <div className='grid grid-cols-4    gap-10 mt-10 '>
            {countries.map((_, i) => (
              <div key={i+100} onClick={()=> {
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
