import { useTranslation } from "react-i18next";
import VisitCard from "./VisitCard";

function VisitSection() {
  const visitCountryData = [
    {
      title: "heroDubai",
      about: "visitDubaiP",
      description:
      "visitDubaiAbout",
      image: "https://zamontour.uz/assets/images/dubai2.jpg",
      people: "8.66 ",
      dest: "41.290 ",
      price: "$1.100.200",
    },
    {
      title: "heroAntalya",
      about: "visitIstambulP",
      description:
      "visitIstambulAbout",
      image: "https://zamontour.uz/assets/images/country-02.jpg",
      people: "44.48 ",
      dest: "275.400 ",
      price: " $946.000",
    },
    {
      title: "heroSharm",
      about: "visitSharmP",
      description:
      "visitSharmAbout",
      image: "https://zamontour.uz/assets/images/sharm2.jpg",
      people: "67.41 ",
      dest: " 551.500",
      price: " $425.600 ",
    },
    {
      title: "heroIstambul",
      about: "visitAntalyaP",
      description:"visitAntalyaAbout",

      image: "https://zamontour.uz/assets/images/istanbul3.jpg",
      people: " 67.41 ",
      dest: " 551.500",
      price: " $425.600",
    },
  ];
  const [t] = useTranslation()
  return (
    <section className='py-12 ove'>
      <div className='container mx-auto px-4 '>
        <div className='container mb-12'>
          <h2 className='md:text-4xl text-3xl font-bold text-left mb-1'>
            {t("visitCounties")}
          </h2>
          <p className='text-[14px] text-gray-400 lg:w-1/2'>
           {t("visitCountAbout")}
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
