import { useTranslation } from "react-i18next";
import DestCard from "./DestCard";

const ExploreDestinations: React.FC = () => {
  const destinations = [
    {
      title: "exDestTrain",
      about: "exDestTrainP",
      description:
      "exDestAbout2",
      image: "	https://zamontour.uz/assets/images/afr.jpg",
      
    },
    {
      title: "exDestAir",
      about: "exDestAirP",
      description:
      "exDestAbout2",
      image: "https://zamontour.uz/assets/images/airplane.jpg",
     
    },
    // Add more destinations as needed
  ];
const [t]= useTranslation()
  return (
    <section className='py-12 overflow-hidden'>
      <div className='container mx-auto px-4 mt-8'>
        <div className='container mb-12'>
          <h2 className='text-3xl font-semibold text-left mb-1'>
            {t("exploreDestTitle")}
          </h2>
          <p className='text-[14px] text-gray-400 lg:w-1/2'>
            {t("exploreDestAbout")}
          </p>
        </div>
        <div className='grid gap-8 grid-cols-1  lg:grid-row-2'>
          {destinations.map((dest, index) => (
            <DestCard
              key={index}
              about={dest.about}
              image={dest.image}
              description={dest.description}
              title={dest.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
