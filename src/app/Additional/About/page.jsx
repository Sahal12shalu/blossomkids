import Footer from '@/app/Pages/Footer/page'
import Navbar from '@/app/Pages/Navbar/page'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='bg-white text-black'>
      <Navbar />
      <div className="fixed max-md:top-2/5 top-2/5 lg:top-2/5 lg:left-0 w-30 md:w-62 h-25 md:h-52 bg-gradient-to-b from-[#ffc97387] to-green-200 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="fixed top-2/5 lg:top-2/9 max-md:hidden lg:right-0 md:w-62 md:h-52 bg-gradient-to-b from-[#ffc9735e] to-green-200/70 rounded-full blur-2xl md:blur-3xl"></div>

      <h1 className='pt-30 md:pt-35 text-center text-[28px] md:text-[32px] font-honeybabe text-black underline underline-offset-2 tracking-wide'>About Us</h1>
      <div className='w-full flex max-md:flex-col justify-center items-start'>
        <div className='flex max-w-6xl max-md:flex-col justify-center items-center md:items-start pb-5'>
          <div className='md:w-[40%] p-2 flex flex-col justify-start items-center md:hidden'>
            <h1 className='text-[22px] md:text-[25px] font-sans font-bold text-black'>founder of BlossomKids</h1>
            <Image src='/all/founder.jpg' alt='founder' width={300} height={300} className='w-[85%] h-[220px] rounded-lg mt-3' />
          </div>

          <div className='md:w-[60%] p-3 flex flex-col justify-center items-center mt-3 md:mt-8'>
            <h1 className='text-black font-bold font-sans text-[20px]'>🌸 About BlossomKids</h1>

              <h1 className='pt-2 z-999 max-md:text-center'>BlossomKids is a place where children grow, learn, and shine!
              We are dedicated to providing a safe, creative, and joyful environment for kids to explore their imagination, develop essential skills, and blossom into confident individuals.

              At BlossomKids, we believe that every child is unique and deserves personalized care and attention. Our programs are thoughtfully designed to nurture curiosity, creativity, and kindness through fun-filled learning experiences.

              Whether it’s through interactive activities, educational games, or artistic expression, we aim to make every moment meaningful and full of joy.
              </h1>

              <h1 className='text-black font-bold font-sans text-[20px] pt-2'>Our Values:</h1>
              <h1 className='pt-2'>🌼 Creativity</h1>
              <h1 className='pt-2'>🌼 Care</h1>
              <h1 className='pt-2'>🌼 Curiosity</h1>
              <h1 className='pt-2'>🌼 Confidence </h1>
          </div>

          <div className='md:w-[40%] p-2 flex flex-col justify-start items-center max-md:hidden md:mt-7'>
            <h1 className='text-[22px] md:text-[25px] font-sans font-bold text-black'>founder of BlossomKids</h1>
            <Image src='/all/founder.jpg' alt='founder' width={400} height={400} className='w-[50%] object-fill md:w-[55%] h-[250px] rounded-lg mt-3' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About