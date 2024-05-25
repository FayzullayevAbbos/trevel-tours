// import { Link,  } from 'react-scroll';

import { Link } from "react-scroll";
import NanLinks from "./NanLinks";

function Navbar() {
  const navList: any = [
    { name: "Home", path: "/" },
    { name: "About", path: "about" },
    { name: "Tours", path: "tours" },
    { name: "Contact", path: "contacts" },
  ];
  return (
    <nav className=''>
      <div className='lg:flex hidden items-center gap-[100px]'>
        <ul className=' flex gap-4 text-white '>
          {navList.map((list: any , id:number) => (
            <Link key={id} to={list.path} smooth={true} duration={500}>
              <li className=' cursor-pointer py-2 px-4 text-[15px]'>
                {list.name}
              </li>
            </Link>
          ))}
        </ul>
        <NanLinks/>
      </div>

      <div className='w-7 cursor-pointer lg:hidden block '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='rgba(255,255,255,1)'
        >
          <path d='M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z'>
            ;
          </path>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
