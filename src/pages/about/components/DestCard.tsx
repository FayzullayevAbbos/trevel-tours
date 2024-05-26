import { useTranslation } from "react-i18next";
import Button from "../../../components/Button";

interface Data {
  image: string;
  title: string;
  about: string;
  description: string;
}
function DestCard({ image, title, about, description }: Data) {
  const [t] = useTranslation()
  return (
    
      <div className=' overflow-hidden flex flex-col md:flex-row  container border-b pb-8'>
        <img
          src={image}
          alt={title}
          className='md:w-1/3  h-full rounded-2xl '
        />
        <div className='p-6'>
          <div className=' flex justify-between items-center mb-4'>
            {" "}
            <div className=''>
              <h3 className='text-xl font-semibold '>{t(title)}</h3>
              <div className='text-gray-400'>{t(about)}</div>
            </div>
            <Button full={false} name={t("exDestButton")} />
          </div>

          <p className='text-gray-400 mb-4'>{t(description)}</p>
        </div>
      </div>
    
  );
}

export default DestCard;
