function HomoFooter({
  name,
  amount,
  img,
}: {
  name: string;
  amount: string;
  img: string;
}) {
  return (
    <div className='flex items-center gap-4 px-5 py-5 lg:md:px-[30px]  lg:py-[30px] '>
      <div className='border-2 w-[36px] h-[36px] lg:w-[60px] rounded-[50%] lg:h-[60px] border-[#925FE2] '>
        <img
          className=' px-1 py-1 lg:px-3 lg:py-3 '
          src={img}
          alt=''
        />
      </div>
      <div className='flex flex-col'>
        <span className='text-[10px] md:text-[15px] text-gray-400'>
          {name}
        </span>
        <span className='text-[12px] md:text-[20px] font-bold primary-color'>
          {amount}
        </span>
      </div>
    </div>
  );
}

export default HomoFooter;
