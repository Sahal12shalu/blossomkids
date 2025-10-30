'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { TbXboxXFilled } from "react-icons/tb";
import { usePathname } from 'next/navigation';

function AdminNav() {

  const [sidebar,Setsidebar] = useState(false)

  const pathname = usePathname();

  const isViewPage = pathname.includes('/Admin/View-product');
  const isOrderPage = pathname.includes('/Admin/Orders');

  const Menuclick = () =>{
    Setsidebar(true)
  }
  return (
    <div className='fixed w-full h-22 flex z-1000 backdrop-blur-md inset-0'>
      {
        sidebar ? 
        <div className='fixed right-0 top-0 bg-black w-40 h-screen flex flex-col'>
          <div className='flex justify-end items-center pr-3 text-white w-full h-16'>
            <TbXboxXFilled className='w-6 h-6' onClick={()=>Setsidebar(false)} />
          </div>
          <div className='w-full h-10 text-white font-mono pl-3'>Home</div>
          {
            isViewPage ? (
            <>
            <Link href='/Admin/Add-product' className='w-full h-10 text-white font-mono pl-3'>Add-Products</Link>
            <Link href='/Admin/Orders' className='w-full h-10 text-white font-mono pl-3'>Orders</Link>
            </>)
             : isOrderPage ? 
             (<><Link href='/Admin/Add-product' className='w-full h-10 text-white font-mono pl-3'>Add-Products</Link> 
          <Link href='/Admin/View-product' className='w-full h-10 text-white font-mono pl-3'>View-Products</Link></>)
          :
          (<><Link href='/Admin/View-product' className='w-full h-10 text-white font-mono pl-3'>View-Products</Link> 
          <Link href='/Admin/Orders' className='w-full h-10 text-white font-mono pl-3'>Orders</Link></>)
          }
        </div>
        : ''
      }
        <div className='h-full w-[10%] max-md:w-[25%] flex items-center justify-center'>
          <Image src='/all/logo3.png' alt='logo' width={100} height={100} className='w-19 h-19' />
        </div>
        <div className='h-full w-[70%] max-md:hidden font-semibold font-mono tracking-wide flex gap-6 justify-end items-center pr-5'>
          <Link href='/' className='text-black/70 hover:text-black'>Home</Link>
          {
            isViewPage ? (<> <Link href='/Admin/Add-product' className='text-black/70 hover:text-black'>Add-Products</Link>
            <Link href='/Admin/Orders' className='text-black/70 hover:text-black'>Orders</Link></>)  : isOrderPage ?
            (<><Link href='/Admin/Add-product' className='text-black/70 hover:text-black'>Add-Products</Link>
            <Link href='/Admin/View-product' className='text-black/70 hover:text-black'>View-Products</Link></>)
            : (<><Link href='/Admin/View-product' className='text-black/70 hover:text-black'>View-Products</Link>
            <Link href='/Admin/Orders' className='text-black/70 hover:text-black'>Orders</Link></>)
          }
        </div>
        <div className='h-full md:hidden w-[40%] '></div>
        <div className='h-full w-[20%] flex justify-center items-center gap-4'>
         </div>
        <div className='md:hidden h-full w-[15%] flex justify-center items-center'>
          <HiOutlineMenu className='w-5 h-5' onClick={Menuclick} />
        </div>
    </div>
  )
}

export default AdminNav