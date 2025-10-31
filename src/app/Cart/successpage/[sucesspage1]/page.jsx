'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

function Successpage() {

  const params = useParams()
  const guestId = params['sucesspage1']

  return (
    <div className='bg-white'>
        <div className='w-full flex justify-center items-center h-screen flex-col'>
           <DotLottieReact
      src="https://lottie.host/fe08e81d-1238-4823-95bc-0fe82e507d4b/txDUGsB6Ct.lottie"
      autoplay
      className='w-[80%] md:w-[50%]'
    />

    <DotLottieReact
      src="https://lottie.host/6b3cdea8-630b-416f-aa10-fd9a3f3e6872/XN8QluWjTq.lottie"
      autoplay
      className='fixed'
    />
    <h1 className='text-black text-[24px] font-honeybabe tracking-wider'>Thankyou for Your purchase</h1>
    <div className='flex w-full gap-4 justify-center items-center mt-3'>
        <Link href='/' className='rounded-md transition-transform active:scale-95 duration-100 px-6 py-2 bg-white border-1 border-black/30 text-black font-sans font-semibold'>Go to Home</Link>
        <Link href={`/Cart/Detailspage/${guestId}`} className='rounded-md transition-transform active:scale-95 duration-100 px-6 py-2 hover:bg-teal-500 bg-teal-400 border-1 border-black/10 text-white font-sans font-semibold'>Track Order</Link>
    </div>
        </div>
    </div>
  )
}

export default Successpage