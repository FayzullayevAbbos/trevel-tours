import Navbar from "./Navbar";
import logo from "../../../assets/logo.svg"
 
function Header() {
  return (
    <header className='relative z-50 w-full'>
      <div className='primary-bg-color w-full  fixed top-0 lg:py-3 py-5 '>
        <div className='container  mx-auto flex items-center justify-between '>
          <div className='flex items-center  gap-3'>
            <img
              className='w-[60px]  rounded-[50%]'
            src={logo}
            />
            <div className='flex flex-col  justify-center pt-1'>
              <span className=' text-[#ffffff] text-[25px] leading-none font-bold'>
                Treval-tours
              </span>
              <span className='text-[10px] text-white'>
                business treval
              </span>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
