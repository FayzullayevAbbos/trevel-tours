import axios from "axios";
import React, { useRef } from "react";

const ReservationForm: React.FC = () => {
  const name = useRef(null);
  const numberPhone = useRef(null);
  const geats = useRef(null);
  const date = useRef(null);
  const dest = useRef(null);
  const count = useRef(null);

  function sendToTelegramBot(event) {
    event.preventDefault();
    const token = "7012841524:AAG9C_93leiSPTovp8uX9aaoAm9kf_sA5_g";
    const botId = 6965624520;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: botId,
        text: `
         name : ${name.current.value}
phoneNumber:${numberPhone.current.value} 
guets:${geats.current.value} 
Date:${date.current.value} 
destination:${dest.current.value} 
Country : ${count.current.value}`,
      },
    })
      .then((res) => {
        name.current.value = null;
        numberPhone.current.value = null;
      })
      .catch((error) => {
        console.log("Xata");
      });
  }
  return (
    <div className='max-w-[1310px] w-full px-4 bg-slate-200  rounded-b-3xl pb-20  mx-auto '>
      <form onSubmit={sendToTelegramBot} action=''>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 grid-row-7 md:grid-row-5 '>
          <div className=''>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-400 px-4 mb-1'
            >
              Your Name:
            </label>
            <input
              ref={name}
              type='text'
              id='name'
              name='name'
              required
              placeholder='Ex- Jhon Due'
              className='mt-1 p-3 w-full border rounded-3xl bg-slate-100  px-4 focus:outline-none  focus:outline-[#925fe2]'
            />
          </div>
          <div className=''>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-400 px-4  mb-1'
            >
              Your Phone Number:
            </label>
            <input
              ref={numberPhone}
              type='text'
              id='name'
              name='name'
              placeholder='Ex +998 98 765 43 21'
              required
              className='mt-1 p-3 w-full border px-6 rounded-3xl bg-slate-100  focus:outline-none  focus:outline-[#925fe2]'
            />
          </div>
          <div className=''>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-400 px-4  mb-1'
            >
              Number Of Guests:
            </label>
            <select
              ref={geats}
              className='mt-1 p-3 w-full border px-6 rounded-3xl bg-slate-100  focus:outline-none  focus:outline-[#925fe2]'
              name='guest'
              id='guest'
            >
              {" "}
              <option value='1'>1 Guest</option>
              <option value='2'>2 Guests</option>
              <option value='3'>3 Guests</option>
              <option value='4'>4 Guests</option>
              <option value='5'>5 Guests</option>
            </select>
          </div>
          <div className=''>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-400 px-4  mb-1'
            >
              Special Requests
            </label>

            <input
              ref={date}
              className='mt-1 p-3 w-full border px-6 rounded-3xl bg-slate-100  focus:outline-none  focus:outline-[#925fe2]'
              type='date'
            />
          </div>
          <div className='md:col-span-2'>
            <label
              htmlFor='dest'
              className='block text-sm font-medium text-gray-400 px-4  mb-1'
            >
              Choose Your Destination:
            </label>
            <select
              ref={dest}
              className='mt-1 p-3 w-full border px-6 rounded-3xl bg-slate-100  focus:outline-none  focus:outline-[#925fe2]'
              name='dest'
              id='guest'
            >
              {" "}
              <option value='1'>Antalya</option>
              <option value='2'>Istambul</option>
              <option value='3'>Dubai</option>
              <option value='4'>Canada</option>
              <option value='5'>England</option>
            </select>
          </div>
          <div className='md:col-span-2 mb-4'>
            <label
              htmlFor='country'
              className='block text-sm font-medium text-gray-400 px-4  mb-1'
            >
              Choose Your Visa Support:
            </label>
            <select
              ref={count}
              className='mt-1 p-3 w-full border px-6 rounded-3xl bg-slate-100  focus:outline-none  focus:outline-[#925fe2]'
              name='country'
              id='guest'
            >
              {" "}
              <option value='1'>Antalya</option>
              <option value='2'>Istambul</option>
              <option value='3'>Dubai</option>
              <option value='4'>Canada</option>
              <option value='5'>England</option>
            </select>
          </div>
          <div className='md:col-span-2'>
            <button
              className=' w-full hover:bg-[#a279e3] md:py-3 md:px-7 py-4 px-5 text-[14px] cursor-pointer rounded-[25px] text-white bg-[#925FE2]'
              type='submit'
            >
              Make Your Reservation Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
