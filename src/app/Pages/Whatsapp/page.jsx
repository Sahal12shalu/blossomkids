'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {

  const phoneNumber = "919633802786";
  const message = "Hello! I want to know more about BlossomKids products.";

  return (
    <div className='w-full h-70 md:h-110 mb-5 md:mb-20 relative flex flex-col justify-center items-center bg-white'>
      <Image src='/all/whatsapp.jpg' alt='whatsapp' width={1000} height={100} className='w-full h-70 md:h-110 object-fill' />
      <div className='absolute flex justify-center items-center gap-2 md:gap-5 mb-10'>
        <h1 className='text-center z-100 text-[22px] md:text-[38px] text-black font-bold font-sans'>Order With Whatsapp </h1>
        <FaWhatsapp className='text-[22px] md:text-[42px] text-green-700' />
      </div>
      <div className='absolute flex flex-col justify-center items-center mt-17 md:mt-25'>
        <Link href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer" className='transition-transform active:scale-95 duration-100 px-12 py-2 bg-green-500 hover:bg-green-600 rounded-4xl text-white font-sans font-semibold text-[18px] md:text-[24px]'>Order Now</Link>
              <h1 className='mt-2 text-black font-bold font-sans'>+91 9633802786</h1>
      </div>
    </div>
  )
}

export default Whatsapp