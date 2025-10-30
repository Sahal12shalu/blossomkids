'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function FocusCardsDemo() {

  return (
    <div className="bg-white w-full">
        <h1 className="text-center w-full text-[18px] md:text-[26px] text-black font-mainfont tracking-widest font-semibold">Trending Items</h1>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-15 max-sm:flex md:max-w-5xl md:px-8 w-full mx-auto max-md:px-5 mt-2 mb-5 md:mt-4 md:mb-8">
            <Link href={`/Category/Categorypage/${'bags'}`} className="flex flex-col w-full hover:scale-105 transform transition-transform duration-300">
              <div className="rounded-lg relative overflow-hidden h-40 md:h-90 md:w-70 w-full transition-all duration-300 ease-out shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <Image src='/all/bag.webp' alt='bag' width={300} height={300} className="object-fill w-full h-full inset-0" />
              </div>
              </Link>
              
              <Link href={`/Category/Categorypage/${'bottle'}`} className="flex flex-col w-full hover:scale-105 transform transition-transform duration-300">
              <div className="rounded-lg relative  overflow-hidden h-40 md:h-90 md:w-70 w-full transition-all duration-300 ease-out shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <Image src='/all/bottle.webp' alt='bottle' width={300} height={300} className="object-fill w-full h-full inset-0" />
              </div>
              </Link>

              <Link href={`/Category/Categorypage/${'teddy'}`} className="flex flex-col w-full hover:scale-105 transform transition-transform duration-300">
              <div className="rounded-lg relative overflow-hidden h-40 md:h-90 md:w-70 w-full transition-all duration-300 ease-out shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <Image src='/all/teddy.webp' alt='teddy' width={300} height={300} className="object-fill w-full h-full inset-0" />
              </div>
              </Link>
        </div>
        </div>
  )
}

export default FocusCardsDemo
