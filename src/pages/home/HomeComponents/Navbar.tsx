import NanLinks from "./NanLinks";

function Navbar() {
  const navList: string[] = ["Home", "About", "Tours", "Contact"];
  return (
    <nav className=''>
      <div className='lg:flex hidden items-center gap-[100px]'>
        <ul className=' flex gap-4 text-white '>
          {navList.map((list) => (
            <li className=' cursor-pointer py-2 px-4 text-[15px]'>{list}</li>
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
