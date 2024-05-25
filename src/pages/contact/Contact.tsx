import Reserv from "./components/Reserv";
import ReservCard from "./components/ReservCard";
import ReservationForm from "./components/ReservationForm";

function Contact() {
  const contactData = [
    {
      name: "phone",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z'></path>
        </svg>
      ),
      title: "Make a Phone Call",
      url: "+998 99 299 99 96",
    },
    {
      name: "email",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z'></path>
        </svg>
      ),
      title: "Contact Us via Email",
      url: "zamonbiznestour@mail.ru",
    },
    {
      name: "map",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z'></path>
        </svg>
      ),
      title: "Visit Our Offices",
      url: "15/25, Chilanzar - 9, Tashkent city",
    },
  ];
  return (
    <>
      <Reserv />
      <div className=' reltive  px-4  lg:bottom-[0] left-[50%] -translate-y-[12.5%] sm:-translate-y-[25%] lg:-translate-y-[50%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full  lg:px-[100px]    mx-auto'>
        {contactData.map((data, id:number) => (
          <ReservCard
            key={id+999}
            name={data.name}
            icon={data.icon}
            title={data.title}
            url={data.url}
          />
        ))}
      </div>
      <div className=' w-full px-4 h-[450px]  mx-auto '>
        <iframe
         
          className='w-full h-full  border-none line-clamp-none rounded-t-3xl     '
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d322738.3816501718!2d66.73490811942924!3d39.46799700266356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1716050725878!5m2!1sen!2s'
        ></iframe>
       
      </div>
      <ReservationForm/>
    </>
  );
}

export default Contact;
