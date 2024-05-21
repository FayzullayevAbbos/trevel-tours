import VisitCard from "./VisitCard";

function VisitSection() {
  const visitCountryData = [
    {
      title: "Dubai",
      about: "United Arab Emirated",
      description:
        "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
      image: "https://zamontour.uz/assets/images/dubai2.jpg",
      people: "8.66 Mil People",
      dest: "41.290 km2",
      price: "$1.100.200",
    },
    {
      title: " Antalya",
      about: "Turkey",
      description:
        "Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian's Gate.",
      image: "https://zamontour.uz/assets/images/country-02.jpg",
      people: "44.48 Mil People",
      dest: "275.400 km2",
      price: " $946.000",
    },
    {
      title: "Sharm El-Sheikh",
      about: "Egypt",
      description:
        "Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites. Specially the underwater wonders of Ras Mohammed national park that took Sharm city to whole different level. The city has diving and shipwreck sites that attract both advanced and recreational divers from around the world to discover the un parallel marine life deep down the red sea.",
      image: "https://zamontour.uz/assets/images/sharm2.jpg",
      people: "67.41 Mil People",
      dest: " 551.500 km2",
      price: " $425.600 ",
    },
    {
      title: "Istanbul",
      about: "Turkey",
      description:"Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey, divided into European and Asian side by Bosphorus, which connects the Sea of Marmara and Black Sea. It is the only city in the world that sits on two continents.",

      image: "https://zamontour.uz/assets/images/istanbul3.jpg",
      people: " 67.41 Mil People",
      dest: " 551.500 km2",
      price: " $425.600",
    },
  ];
  return (
    <section className='py-12 '>
      <div className='container mx-auto px-4 '>
        <div className='container mb-12'>
          <h2 className='md:text-4xl text-3xl font-bold text-left mb-1'>
            Visit One Of Our Countries Now
          </h2>
          <p className='text-[14px] text-gray-400 lg:w-1/2'>
            Discover the best offers in each city, curated just for
            you. Immerse yourself in a world of savings and indulge in
            unparalleled experiences.
          </p>
        </div>
        <div className='grid gap-8 grid-cols-1  lg:grid-row-2'>
          {visitCountryData.map((data, index) => (
            <VisitCard
              key={index}
              title={data.title}
              image={data.image}
              about={data.about}
              description={data.description}
              people={data.people}
              price={data.price}
              dest={data.dest}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisitSection;
