import Image from 'next/image'
import React from 'react'

function Review() {
  return (
    <div className='w-full flex flex-col justify-center items-center mb-10 md:mb-20 bg-white'>
      <h1 className='pt-8 pb-5 font-semibold text-[18px] md:text-[26px] text-black font-mainfont tracking-widest'>Customers Testimonials</h1>
      <div className=' md:w-[80%] px-4 w-full flex max-md:flex-col justify-center items-center gap-8'>
        
        <div className='w-[80%] md:w-[25%] pb-20 relative'>
        <div className='p-5 w-full bg-white shadow-[0px_1px_17px_0px_rgba(0,_0,_0,_0.1)] flex flex-col rounded-lg text-black'>
          <div className='w-full flex justify-center gap-1'>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          </div>
          <div className='w-full flex justify-center text-center pt-5 pb-10'>
            <h1 className='text-[14px] tracking-wide'>I’m so happy with the care and attention BlossomKids provides. The learning environment is safe, colorful, and filled with joy. </h1>
          </div>
        </div>
        <Image src='/review/siddi.jpg' alt='customers' width={100} height={100} className='absolute w-25 h-25 rounded-full object-cover bottom-8 left-1/3 border-1 border-black/60' />
        <h1 className='absolute bottom-1 left-2/7 text-black font-semibold font-sans'>Aboobacker Siddik</h1>
        </div>

        <div className='w-[80%] md:w-[25%] pb-20 relative md:mt-10'>
        <div className='p-5 w-full bg-teal-500 shadow-[0px_1px_17px_0px_rgba(0,_0,_0,_0.1)] flex flex-col rounded-lg text-white'>
          <div className='w-full flex justify-center gap-1'>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300 "></span>
          </div>
          <div className='w-full flex justify-center text-center pt-5 pb-10'>
            <h1 className='text-[14px] tracking-wide'>"BlossomKids never disappoints! The toys I ordered were beautifully packed and safe for my toddler. Delivery was quick too — highly recommend this brand!"</h1>
          </div>
        </div>
        <Image src='/review/neha.jpg' alt='customers' width={100} height={100} className='absolute object-cover w-25 h-25 rounded-full bottom-8 left-1/3 border-1 border-black/60' />
        <h1 className='absolute bottom-1 left-2/7 text-black font-semibold font-sans'>Neha R (kochi)</h1>
        </div>

        <div className='w-[80%] md:w-[25%] pb-20 relative'>
        <div className='p-5 w-full bg-white shadow-[0px_1px_17px_0px_rgba(0,_0,_0,_0.1)] flex flex-col rounded-lg text-black'>
          <div className='w-full flex justify-center gap-1'>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star text-amber-300"></span>
          <span className="fa fa-star"></span>
          </div>
          <div className='w-full flex justify-center text-center pt-5 pb-10'>
            <h1 className='text-[14px] tracking-wide'>I’ve ordered several times from BlossomKids, and every experience has been wonderful. Great designs, affordable prices, and excellent customer service.</h1>
          </div>
        </div>
        <Image src='/review/rahul.jpeg' alt='customers' width={100} height={100} className='absolute w-25 object-fill h-25 rounded-full bottom-8 left-1/3 border-1 border-black/60' />
        <h1 className='absolute bottom-1 left-2/7 text-black font-semibold font-sans'>Rahul (kannur)</h1>
        </div>

        
      </div>
    </div>
  )
}

export default Review