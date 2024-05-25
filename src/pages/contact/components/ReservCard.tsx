interface Card {
  name: string;
  icon: any;
  title: string;
  url: string;
}
function ReservCard({  icon, url, title }: Card) {
  return (
    <div className='bg-white w-full flex items-center flex-col justify-center gap-2 rounded-[23px] py-10  shadow-2xl'>
      <div className='w-14   p-4 bg-slate-300 rounded-[50%] primary-color '>
        {icon}
      </div>
      <div className='text-black font-bold  text-[20px]'>{title}</div>
      <a className='primary-color' href=''>
        {url}
      </a>
    </div>
  );
}

export default ReservCard;
