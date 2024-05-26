import telegram from "../../../assets/telegram.svg";
import instagram from "../../../assets/instagram.svg";
import { useTranslation } from "react-i18next";

function NanLinks() {
  const [t , i18n] = useTranslation()
  const lang = ["uz" , "en" , "ru"]
  {t}
 const handleChange = (event:string) => {
  console.log(event);
  
    const selectedLanguage = event
    i18n.changeLanguage(selectedLanguage)
 }

  return (
    <div className='flex gap-4 items-center text-white text-[15px] '>

      {lang.map((l:string , ind:number) => (
        <a key={ind+9090} onClick={()=> handleChange(l)} href="#">{l.toUpperCase()}</a>
      ))}
      <a className="text-white" href='#'>
        <img className='w-5' src={telegram} alt='' />
      </a>
      <a className="text-white" href='#'>
        <img className='w-5 ' src={instagram} alt='' />
      </a>
    </div>
  );
}

export default NanLinks;
