import Card from "./Card";

function VisaCard() {
  const visaSupportData = [
    {
      country: "China",
      image: "https://zamontour.uz/assets/images/china.jpg",
      checkIns: 234,
      benefits: [
        "Best Prices",
        "Short Processing Time",
        "Trustworthy Assistance",
      ],
    },
    {
      country: "Hong Kong",
      image: "https://zamontour.uz/assets/images/hongkong.jpg",
      checkIns: 234,
      benefits: [
        "Best Prices",
        "Short Processing Time",
        "Trustworthy Assistance",
      ],
    },
    {
      country: "European (Schengen)",
      image: "https://zamontour.uz/assets/images/europe.jpeg",
      checkIns: 234,
      benefits: [
        "Best Prices",
        "Short Processing Time",
        "Trustworthy Assistance",
      ],
    },
  ];
  return (
    <div className=' grid  overflow-hidden  xl:grid-cols-3  sm:grid-cols-2 md:overflow-hidden  lg:container lg:mx-auto  lg:gap-10 '>
      <div className=''>
        <Card
          key={0}
          benefits={visaSupportData[0].benefits}
          checkIns={visaSupportData[0].checkIns}
          country={visaSupportData[0].country}
          image={visaSupportData[0].image}
        />
      </div>
      <div className='hidden sm:block'>
        <Card
          key={1}
          benefits={visaSupportData[1].benefits}
          checkIns={visaSupportData[1].checkIns}
          country={visaSupportData[1].country}
          image={visaSupportData[1].image}
        />
      </div>
      <div className=' hidden xl:block'>
        <Card
          key={2}
          benefits={visaSupportData[2].benefits}
          checkIns={visaSupportData[2].checkIns}
          country={visaSupportData[2].country}
          image={visaSupportData[2].image}
        />
      </div>
    </div>
  );
}

export default VisaCard;
