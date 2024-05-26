import DestCard from "./DestCard";

const ExploreDestinations: React.FC = () => {
  const destinations = [
    {
      title: "Cheap Railway Tickets With Us",
      about: "whole world",
      description:
        "Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network.",
      image: "	https://zamontour.uz/assets/images/afr.jpg",
      
    },
    {
      title: "Discover Exciting Air Travel Deals",
      about: "Global Destinations",
      description:
        "Embark on an airborne adventure and explore destinations worldwide. Whether it's the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe. Immerse yourself in the richness of diverse cultures, all easily accessible through our extensive air travel network.",
      image: "https://zamontour.uz/assets/images/airplane.jpg",
     
    },
    // Add more destinations as needed
  ];

  return (
    <section className='py-12 overflow-hidden'>
      <div className='container mx-auto px-4 mt-8'>
        <div className='container mb-12'>
          <h2 className='text-3xl font-semibold text-left mb-1'>
            Explore Destinations with Ease
          </h2>
          <p className='text-[14px] text-gray-400 lg:w-1/2'>
            Find the best deals on railway and airplane tickets in
            each city, carefully selected for you.
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
