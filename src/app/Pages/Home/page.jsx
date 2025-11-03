import React from 'react'
import './page.css'
import Image from 'next/image'
import Link from 'next/link'

function Homepage() {
  return (
    <div className='mt-22 relative w-full h-full mb-8 bg-white' id='Home'>

      <Image src='/all/rain1.gif' alt='rain' width={100} height={100} className='absolute max-md:hidden md:bottom-20 md:left-10 w-10 h-10' />
      <Image src='/all/truck.gif' alt='truck' width={100} height={100} className='absolute max-md:hidden md:bottom-5 md:right-10 w-10 h-10' />

      <div className="fixed max-md:top-2/5 top-2/5 lg:top-2/5 lg:left-0 w-30 md:w-62 h-25 md:h-52 bg-gradient-to-b from-[#ffc97387] to-green-200 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="fixed top-2/5 lg:top-2/9 max-md:hidden lg:right-0 md:w-62 md:h-52 bg-gradient-to-b from-[#ffc9735e] to-green-200/70 rounded-full blur-2xl md:blur-3xl"></div>

      <div className="absolute max-md:top-20 top-5 lg:top-30 lg:left-17/48 w-20 md:w-62 h-30 md:h-52 bg-white/30 rounded-full blur-3xl"></div>
      <div className="absolute max-md:top-10 right-0 lg:top-10 lg:right-42/48 w-30 md:w-62 h-20 md:h-52 bg-white/40 rounded-full blur-3xl"></div>
      <div className="absolute max-md:top-53 top-75 lg:top-100 lg:left-5/46 w-50 z-90 md:w-82 h-20 md:h-32 bg-white rounded-full blur-lg"></div>

      <Image src='/all/butterfly2.png' alt='butterfly' width={40} height={40} className='absolute top-3/10 right-5/20 max-sm:right-3/22 max-sm:w-7 max-sm:h-7 max-xl:right-3/20 max-xl:w-8 max-xl:h-8 max-md:right-2/20 max-md:w-7 max-md:h-7 max-md:top-1/8' />
      <Image src='/all/cloud1.png' alt='butterfly' width={40} height={40} className='absolute top-3/12 right-5/22 max-sm:right-1/23 max-sm:w-7 max-sm:h-7 max-xl:right-3/25 max-xl:w-8 max-xl:h-8 max-md:right-2/25 max-md:w-7 max-md:h-7 max-md:top-1/9' />
      <div className='absolute max-md:top-1/5 top-1/4 max-md:right-1/15 max-xl:right-3/20 right-2/10'>
        <h1>
          <span className='font-honeybabe tracking-wider max-md:text-[15px] max-xl:text-[22px] text-[29px] text-white'>Find joy in every <br /> moment with <br /></span>
          <span className='font-honeybabe tracking-wider max-md:text-2xl max-xl:text-4xl text-6xl bg-gradient-to-r from-amber-200 to-amber-200/80 text-transparent bg-clip-text'> BlossomKids</span></h1>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
        <Link href={`/Category/Categorypage/${'all-products'}`}><button className="morphing-button transition-transform active:scale-95 duration-100 mt-1 md:rounded-lg rounded-full md:mt-3 md:px-8 md:py-3 px-5 py-2 text-[12px] md:text-[17px] max-md:rounded-full">
          <span className='font-semibold'>Shop Now</span>
          <i className="fas fa-arrow-right"></i>
        </button></Link>
      </div>
      <Image src='/all/kidimage.png' alt='Kidimage' width={600} height={600}
        className='absolute max-xl:w-100 max-xl:h-80 max-2xl:left-2/32 max-sm:h-44 max-sm:w-58 max-md:h-50 max-md:w-57 max-md:left-0 max-md:top-4/25 left-1/10 top-2/19' />
      <div className='Maindiv w-full h-40'></div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 340" xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%"
          x2="100%" y2="50%"><stop offset="5%" stopColor="#7bdcb5"></stop><stop offset="95%" stopColor="#00d084"></stop>
        </linearGradient></defs><path d="M 0,400 L 0,150 C 38.86043147122727,163.48406906797894 77.72086294245454,176.96813813595787 127,164 C 176.27913705754546,151.03186186404213 235.97697970140905,111.6115165241474 285,116 C 334.02302029859095,120.3884834758526 372.37121825190934,168.58579576745248 406,167 C 439.62878174809066,165.41420423254752 468.5381472909536,114.04530040604266 515,104 C 561.4618527090464,93.95469959395734 625.4761925842764,125.23300260837689 673,138 C 720.5238074157236,150.7669973916231 751.5570823719407,145.02268916044972 791,134 C 830.4429176280593,122.97731083955028 878.2954779279606,106.67624074982426 917,113 C 955.7045220720394,119.32375925017574 985.2610059162168,148.27234784025327 1027,154 C 1068.7389940837832,159.72765215974673 1122.6604984071723,142.23436788916257 1171,142 C 1219.3395015928277,141.76563211083743 1262.0970004550936,158.7901806030964 1306,163 C 1349.9029995449064,167.2098193969036 1394.9514997724532,158.60490969845182 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>

      <div className='w-full h-30 flex justify-center items-center text-black  max-md:mt-5'>
        <div className='flex flex-nowrap bg-gray-50 w-[93%] z-100 px-3 md:px-4 inset-0 md:w-[80%] h-full rounded-2xl no-scrollbar shadow-[0px_1px_21px_3px_rgba(0,_0,_0,_0.1)] md:justify-center justify-start items-center overflow-x-scroll max-md:gap-6 md:gap-10'>
          <Link href={`/Category/Categorypage/${'all-products'}`} className='flex flex-col justify-center items-center'>
            <Image src='/category/all.jpg' alt='all-products' width={100} height={100} className='object-fill p-1 border-1 border-gray-200 rounded-full h-17 w-17 md:h-20 md:w-20' />
            <h1 className='text-center font-sans font-semibold tracking-wide w-17'>All</h1>
          </Link>
          <Link href={`/Category/Categorypage/${'toys'}`} className='flex flex-col justify-center items-center'>
            <Image src='/category/toys.jpg' alt='toys' width={100} height={100} className='object-fill p-1 border-1 border-gray-200 rounded-full h-17 w-17 md:h-20 md:w-20' />
            <h1 className='text-center font-sans font-semibold tracking-wide w-17'>Toys</h1>
          </Link>
          <Link href={`/Category/Categorypage/${'dress'}`} className='flex flex-col justify-center items-center'>
            <Image src='/category/dress.jpg' alt='dress' width={100} height={100} className='object-fill border-1 border-gray-200 rounded-full h-17 w-17 md:h-20 md:w-20' />
            <h1 className='text-center font-sans font-semibold tracking-wide w-17'>Dress</h1>
          </Link>
          <Link href={`/Category/Categorypage/${'books'}`} className='flex flex-col justify-center items-center'>
            <Image src='/category/books.jpg' alt='books' width={100} height={100} className='object-fill border-1 border-gray-200 rounded-full h-17 w-17 md:h-20 md:w-20' />
            <h1 className='text-center font-sans font-semibold tracking-wide w-17'>Books</h1>
          </Link>
          <Link href={`/Category/Categorypage/${'bottle'}`} className='flex flex-col justify-center items-center'>
            <Image src='/category/bottle.jpg' alt='bottle' width={100} height={100} className='object-fill border-1 border-gray-200 rounded-full h-17 w-17 md:h-20 md:w-20' />
            <h1 className='text-center font-sans font-semibold tracking-wide w-17'>Bottle</h1>
          </Link>
          <Link href={`/Category/Categorypage/${'bags'}`} className='flex flex-col justify-center items-center'>
            <Image src='/category/bags.jpg' alt='bags' width={100} height={100} className='object-fill p-1 border-1 border-gray-200 rounded-full h-17 w-17 md:h-20 md:w-20' />
            <h1 className='text-center font-sans font-semibold tracking-wide w-17'>Bags</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage