'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { PiMapPinAreaLight } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import { TbXboxXFilled } from "react-icons/tb";
import { useCart } from '@/app/Components/lib/cartprovider';
import Link from 'next/link';
import { getOrCreateGuestId } from '@/app/Components/lib/guestid';

function Navbar() {

  const [sidebar,Setsidebar] = useState(false)
  const { cartValue  } = useCart()
  const [guestId, setGuestId] = useState(null);

  useEffect(() => {
    const id = getOrCreateGuestId();
    setGuestId(id);
  }, []);


  const Menuclick = () =>{
    Setsidebar(true)
  }
  return (
    <div className='fixed w-full h-22 bg-white flex z-1000 backdrop-blur-md inset-0'>
      {
        sidebar ? 
        <div className='fixed right-0 top-0 bg-black w-40 h-screen flex flex-col'>
          <div className='flex justify-end items-center pr-3 text-white w-full h-16'>
            <TbXboxXFilled className='w-6 h-6 text-white' onClick={()=>Setsidebar(false)} />
          </div>
          <Link href='/' className='w-full h-10 text-white font-mono pl-3 transition-transform active:scale-95 duration-100'>Home</Link>
          <Link href='/Additional/About' className='w-full h-10 text-white font-mono pl-3 transition-transform active:scale-95 duration-100'>AboutUs</Link>
          <Link href='#Contact' className='w-full h-10 text-white font-mono pl-3 transition-transform active:scale-95 duration-100'>Contact</Link>
          <Link href={`/Category/Categorypage/${'all-products'}`} className='w-full h-10 text-white font-mono pl-3 transition-transform active:scale-95 duration-100'>Products</Link>
        </div>
        : ''
      }
        <Link href='/' className='h-full w-[10%] max-md:w-[25%] flex items-center justify-center'>
          <Image src='/all/logo3.png' alt='logo' width={100} height={100} className='w-19 h-19 transition-transform active:scale-95 duration-100' />
        </Link>
        <div className='h-full w-[70%] max-md:hidden font-semibold font-mono tracking-wide flex gap-6 justify-end items-center pr-5'>
          <Link href='/' className='text-black/80 hover:text-black transition-transform active:scale-95 duration-100'>Home</Link>
          <Link href='/Additional/About' className='text-black/80 hover:text-black transition-transform active:scale-95 duration-100'>AboutUs</Link>
          <Link href='/Pages/Contact' className='text-black/80 hover:text-black transition-transform active:scale-95 duration-100'>Contact</Link>
          <Link href={`/Category/Categorypage/${'all-products'}`} className='text-black/80 hover:text-black transition-transform active:scale-95 duration-100'>Products</Link>
        </div>
        <div className='h-full md:hidden w-[40%] '></div>
        <div className='h-full w-[20%] flex justify-center items-center gap-2 md:gap-4'>

          <Link href={`/Cart/${guestId}`} className='flex gap-1 justify-center items-center transition-transform active:scale-95 duration-100'>
          <div className='rounded-full w-9 h-9 justify-center items-center flex shadow-[0px_0px_27px_0px_rgba(0,_0,_0,_0.1)] bg-gray-200'><IoCartOutline className='w-4 h-4 text-black' /></div>
          <p className='text-[14px] text-black'>{cartValue ? '('+ cartValue +')' : '' }</p>
          </Link>

          <div>
          <Link href='/Cart/trackorder' className='transition-transform active:scale-95 duration-100 rounded-full w-9 h-9 justify-center items-center flex shadow-[0px_0px_27px_0px_rgba(0,_0,_0,_0.1)] bg-gray-200'><PiMapPinAreaLight className='w-4 h-4 text-black' /></Link>
        </div>
        </div>
        <div className='md:hidden h-full w-[15%] flex justify-center items-center'>
          <HiOutlineMenu className='w-5 h-5 text-black' onClick={Menuclick} />
        </div>
    </div>
  )
}

export default Navbar