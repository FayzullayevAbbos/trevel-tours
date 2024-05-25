import telegram from "../../../assets/telegram.svg";
import instagram from "../../../assets/instagram.svg";

function NanLinks() {
  return (
    <div className='flex gap-4 items-center text-white text-[15px] '>
      <a className=' cursor-pointer ' href='#'>
        UZ
      </a>
      <a href='#'>ENG</a>
      <a href='#'>RUS</a>
      <a href='#'>
        <img className='w-5' src={telegram} alt='' />
      </a>
      <a href='#'>
        <img className='w-5' src={instagram} alt='' />
      </a>
    </div>
  );
}

export default NanLinks;
