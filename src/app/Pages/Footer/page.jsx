import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {

    const phoneNumber = "919633802786";
    const message = "Hello! I want to know more about BlossomKids products.";

    return (
        <div className='w-full pt-7 md:pt-20 flex flex-col bg-gradient-to-r from-[#ffc9732e] to-green-100/70'>
            <div className='flex justify-center items-center'>
                <Image src='/all/logo3.png' alt='logo' width={100} height={100} />
            </div>
            <div className='flex max-md:flex-col justify-center md:justify-between items-center md:items-end md:px-20 pt-6 pb-8'>
                <div>
                    <h1 className='text-[14px]'>@2025 BlossomKids | All Rights Reserved</h1>
                </div>
                <div className='flex max-md:hidden gap-6 text-[16px] text-black/80 font-semibold font-mono'>
                    <Link className='transition-transform active:scale-95 duration-100' href='/Additional/About'>About</Link>
                    <Link className='transition-transform active:scale-95 duration-100' href='/Pages/Contact'>Contact</Link>
                    <Link className='transition-transform active:scale-95 duration-100' href='/Additional/Privacy'>Privacy policy</Link>
                    <Link className='transition-transform active:scale-95 duration-100' href='/Additional/Terms'>Terms&Condition</Link>
                    <Link className='transition-transform active:scale-95 duration-100' href='/Additional/Shippingpolicy'>Shipping policy</Link>
                </div>
                <div className='md:hidden flex justify-around items-center text-center py-4 w-[90%] text-[16px] text-black/80 font-semibold font-mono'>
                    <div className='flex flex-col'>
                        <Link className='transition-transform active:scale-95 duration-100' href='/Additional/About'>About</Link>
                        <Link className='transition-transform active:scale-95 duration-100' href='/Pages/Contact'>Contact</Link>
                        <Link className='transition-transform active:scale-95 duration-100' href='/Additional/Privacy'>Privacy policy</Link>
                    </div>

                    <div>
                        <Link className='transition-transform active:scale-95 duration-100' href='/Additional/Terms'>Terms&Condition</Link>
                        <Link className='transition-transform active:scale-95 duration-100' href='/Additional/Shippingpolicy'>Shipping policy</Link>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <Link href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank"
                        rel="noopener noreferrer" className='bg-white rounded-full w-10 h-10 md:w-8 md:h-8 flex justify-center items-center'>
                        <FaWhatsapp className='w-6 h-6 md:w-4 md:h-4 text-green-500' />
                    </Link>
                    <Link href='#' className='bg-white rounded-full w-10 h-10 md:w-8 md:h-8 flex justify-center items-center'>
                        <FaFacebook className='w-6 h-6 md:w-4 md:h-4 text-blue-500' />
                    </Link>
                    <Link href='#' className='bg-white rounded-full w-10 h-10 md:w-8 md:h-8 flex justify-center items-center'>
                        <FaInstagramSquare className='w-6 h-6 md:w-4 md:h-4 text-red-400' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer