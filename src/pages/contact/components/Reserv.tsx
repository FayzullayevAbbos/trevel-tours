import Button from "../../../components/Button";
import ReservCard from "./ReservCard";

function Reserv() {
  
  return (
    <section
      style={{
        backgroundImage: `url("	https://zamontour.uz/assets/images/heading-bg-02.jpg")`,
      }}
      className='w-full h-[658px] bg-no-repeat bg-cover relative '
    >
      <div className=' w-full h-full  grid place-content-center gap-4'>
        <p className='text-white text-[20px] text-center font-medium '>
          Book Prefered Deal Here
        </p>
        <h3 className='text-white text-center text-[50px] font-bold'>
          Make Your Reservation
        </h3>
        <Button name='Discover More' full={true} />
      </div>
      
    </section>
  );
}

export default Reserv;
