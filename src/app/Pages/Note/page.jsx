import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { GiSafetyPin } from "react-icons/gi";
import { PiPersonSimpleSkiDuotone } from "react-icons/pi";

function Notepage() {
    return (
        <div className='w-full flex justify-center mt-10 mb-6 py-15 bg-white max-md:bg-gray-100'>
            <div className='w-[90%] xl:w-[65%] flex max-md:flex-col justify-around gap-9 md:gap-15'>

                <div className='flex flex-col justify-center z-99 max-md:bg-white items-center rounded-lg shadow-[0px_-1px_13px_0px_rgba(0,_0,_0,_0.1)]  md:rounded-t-full p-8'>
                    <div className='rounded-full md:w-18 md:h-18 h-15 w-15 border-1 border-dashed border-green-500/90 flex justify-center items-center'>
                        <FaUserFriends src='/Note/about us.png' alt='Note' width={100} height={100} className='md:w-12 md:h-12 h-8 w-8 text-green-500/90' />
                    </div>
                    <div className='pt-2 md:pt-5 flex flex-col text-center'>
                        <h1 className='font-bold font-sans text-[18px] text-green-500'>About Blossom Kid</h1>
                        <h1 className='text-green-500 pt-2 text-[13px]'>At Blossom Kids, we believe every child holds immense potential. Our mission is to nurture young hearts and minds by blending joyful learning, strong values, and life skills from the very start.</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-center z-99 max-md:bg-white items-center rounded-lg shadow-[0px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] md:rounded-t-full p-8'>
                    <div className='rounded-full md:w-18 md:h-18 h-15 w-15 border-1 border-dashed border-red-400/90 flex justify-center items-center'>
                        <GiSafetyPin src='/Note/about us.png' alt='Note' width={100} height={100} className='md:w-11 md:h-11 h-8 w-8 text-red-400/90' />
                    </div>
                    <div className='pt-2 md:pt-5 flex flex-col text-center'>
                        <h1 className='font-bold font-sans text-[18px] text-red-400'>Our Experience</h1>
                        <h1 className='text-red-400 pt-2 text-[13px]'>With years of dedicated service in the industry, we take immense pride in having consistently delivered top-quality products to our valued customers. Our journey has been shaped by a deep understanding of customer needs.</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-center z-99 max-md:bg-white items-center rounded-lg shadow-[0px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] md:rounded-t-full p-8'>
                    <div className='rounded-full md:w-18 md:h-18 h-15 w-15 border-1 border-dashed border-blue-400/90 flex justify-center items-center'>
                        <PiPersonSimpleSkiDuotone src='/Note/about us.png' alt='Note' width={100} height={100} className='md:w-12 md:h-12 h-8 w-8 text-blue-400/90' />
                    </div>
                    <div className='pt-2 md:pt-5 flex flex-col text-center'>
                        <h1 className='font-bold font-sans text-[18px] text-blue-400'>Big Fun for Kids</h1>
                        <h1 className='text-blue-400 pt-2 text-[13px]'>We specialize in delivering high-quality products that are both fun and educational for children.
                            Our carefully selected items support learning, creativity, and overall child development.
                            Trusted by parents.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notepage