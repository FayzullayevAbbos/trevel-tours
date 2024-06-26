import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

const Footer: React.FC = () => {
  const [t] = useTranslation()
  return (
    <footer
      style={{
        backgroundImage:
          "url('https://www.lake-elsinore.org/ImageRepository/Document?documentID=2908')",
      }}
      className=' text-white mt-10 h-[365px] bg-no-repeat bg-cover bg-center  '
    >
      <div className='w-full h-full opacity-[0.9] bg-[#925fe2] gap-2 flex flex-col justify-center items-center'>
        <h2 className='text-[40px] font-bold text-center text-white'>
          {t("footerT")}
        </h2>
        <p className='text-[20px] font-medium text-center'>
          {t("footerP")}
        </p>
        <Link to={"contacts"} smooth={true} duration={500}>
          <button className='hover:bg-white  border mt-4 md:py-3 md:px-7 py-2 px-5 text-[11px]  md:text-[14px] cursor-pointer rounded-[25px] text-white hover:text-[#925FE2] bg-[#9e75df]'>
            {t("footerButton")}
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
