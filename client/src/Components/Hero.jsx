import React from 'react';
import HeroBg from "../assets/images/hero-bg.png"
import Modal from "./Modal"
import demo from "../assets/images/demo.jpeg"

export default function Hero() {
  return (
    <div className='font-bold w-full flex flex-col md:flex-row justify-center items-center sm:gap-10 p-4 sm:p-10'>
        <div className='flex flex-col gap-10 text-gray-800 relative text-lg sm:text-2xl sm:w-[60%]'>
            <p className='sm:max-w-[500px]'>Effortlessly extract valuable insights from any website</p>
            <p className='sm:max-w-[500px] text-right'>Experience seamless data integration tailored for you</p>
            <div className='w-full flex '>
                <div className='w-full sm:w-[80%] rounded-xl bg-gray-400'>
                  <img src={demo} alt="" className='rounded-2xl' />
                </div>
            </div>
        </div>
        <div className='flex flex-col-reverse sm:flex-col justify-center items-center md:w-[40%] gap-5'>
            <div className="grad2 w-[40%] h-[500px] blur-[190px] absolute flex justify-end items-end"></div>
            <img src={HeroBg} alt="" className='md:w-[60%] relative z-[5]' />
            <div className='mt-5'>
              <Modal/>
            </div>
        </div>
      
    </div>
  )
}
