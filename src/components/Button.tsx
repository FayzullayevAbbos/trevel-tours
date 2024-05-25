import { Link } from "react-scroll";

function Button({ name, full }: { name: string; full: boolean }) {
  return (
    <div className='  flex justify-center items-center'>
      <Link to={"contacts"} smooth={true} duration={500}>
        <button
          className={`${
            full
              ? "hover:bg-[#fff]   hover:text-[#925FE2]  md:py-3 md:px-7 py-2 px-5 text-[11px]  md:text-[14px cursor-pointer rounded-[25px] text-white bg-[#925FE2]"
              : "hover:bg-[#a279e3] md:py-3 md:px-7 py-2 px-5 text-[11px]  md:text-[14px] cursor-pointer rounded-[25px] text-white bg-[#925FE2]"
          } `}
        >
          {name}
        </button>
      </Link>
    </div>
  );
}

export default Button;
