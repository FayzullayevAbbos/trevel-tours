// import { Link,  } from 'react-scroll';

import { Link } from "react-scroll";
import NanLinks from "./NanLinks";
import { createPortal } from "react-dom";
import telegram from "../../../assets/telegram.svg";
import instagram from "../../../assets/instagram.svg";
import { useState } from "react";

function Navbar() {
  const [modal, setModal] = useState(false);

  const navList: any = [
    { name: "Home", path: "/" },
    { name: "About", path: "about" },
    { name: "Tours", path: "tours" },
    { name: "Contact", path: "contacts" },
  ];
  return (
    <nav className=''>
      {createPortal(
        modal ? (
          <div className='absolute  z-[50] max-w-[600px] w-[95%]  right-[50%] translate-x-[50%] top-[80px] bg-white'>
            {navList.map((list: any, id: number) => (
              <Link
                key={id}
                to={list.path}
                smooth={true}
                duration={500}
              >
                <div className=' hover:text-[#925fe2] cursor-pointer text-center py-1 border-b  '>
                  {list.name}
                </div>
              </Link>
            ))}
            <div className=' hover:text-[#925fe2] cursor-pointer text-center py-1 border-b  '>
              <a className=' cursor-pointer ' href='#'>
                UZ
              </a>
            </div>
            <div className=' hover:text-[#925fe2] cursor-pointer text-center py-1 border-b  '>
              <a href='#'>ENG</a>
            </div>

            <div className=' hover:text-[#925fe2] cursor-pointer text-center py-1 border-b  '>
              <a href='#'>RUS</a>
            </div>
            <div className='  hover:text-[#925fe2] grid place-content-center cursor-pointer text-center py-1 border-b  '>
              <a href='#'>
                <img className='w-5' src={telegram} alt='' />
              </a>
            </div>
            <div className=' text-black hover:text-[#925fe2] grid place-content-center cursor-pointer text-center py-1 border-b  '>
              <a href='#'>
                <img className='w-5' src={instagram} alt='' />
              </a>
            </div>
          </div>
        ) : (
          ""
        ),

        document.body,
      )}

      <div className='lg:flex hidden items-center gap-[100px]'>
        <ul className=' flex gap-4 text-white '>
          {navList.map((list: any, id: number) => (
            <Link
              key={id}
              to={list.path}
              smooth={true}
              duration={500}
            >
              <li className=' cursor-pointer py-2 px-4 text-[15px]'>
                {list.name}
              </li>
            </Link>
          ))}
        </ul>
        <NanLinks />
      </div>

      <div className='w-7 cursor-pointer lg:hidden block '>
        {modal ? (

          <svg
          onClick={()=> setModal(false)}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='white'
          >
            <path d='M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z'></path>
          </svg>
        ) : (
          <svg
          onClick={()=> setModal(true)}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='rgba(255,255,255,1)'
          >
            <path d='M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z'>
              ;
            </path>
          </svg>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
