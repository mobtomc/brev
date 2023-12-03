import React from 'react';
import HeroBg from "../assets/images/hero-bg.png"
import Modal from "./Modal"

export default function Hero() {
  return (
    <div className='font-bold w-full flex flex-col md:flex-row justify-center items-center gap-10 p-10'>
        <div className='flex flex-col gap-10 text-gray-800 relative text-2xl w-[60%]'>
            <p className='max-w-[500px]'>Effortlessly extract valuable insights from any website</p>
            <p className='max-w-[500px] text-right'>Experience seamless data integration tailored for you</p>
            <div className='w-full flex '>
                <div className='w-[80%] h-[300px] rounded-xl bg-gray-400'>

                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center md:w-[40%] gap-5'>
            <div className="grad2 w-[30%] h-[400px] blur-[90px] absolute flex justify-end items-end"></div>
            <img src={HeroBg} alt="" className='md:w-[60%] relative z-[5]' />
            <div className='mt-5'>
              <Modal/>
            </div>
        </div>
      
    </div>
  )
}
