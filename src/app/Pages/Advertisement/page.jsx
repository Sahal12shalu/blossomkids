'use client'
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter} from 'next/navigation'

export default function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [offerproduct,Setofferproduct] = useState([])
  const [loading,Setloading] = useState(false)
  const router = useRouter()

  const totalSlides = offerproduct.length;

  const Productimage = (id) =>{
    Setloading(true)
    setTimeout(()=>{
      Setloading(false)
      router.push(`/Category/Productshow/${id}`)
    },500)
  }

  useEffect(() => {
   axios.get('/api/product/offer').then((res)=>{
    Setofferproduct(res.data.data)
   })
  }, [])
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? offerproduct.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === offerproduct.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-4 md:mt-8 relative bg-white'>
    {loading && (
        <div className='fixed inset-0 bg-black/10 bg-opacity-20 z-50 flex items-center justify-center'>
          <div className='w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin'></div>
        </div>
      )}
    <div className="relative className='w-[90%] md:w-[64%] h-80 md:h-130 mx-5 overflow-hidden shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.1)]">
      <div className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {offerproduct.map((src, index) => (
          <Image onClick={()=>Productimage(src._id)} key={index} src={src.offerimage} alt={`Slide ${index + 1}`} width={1000} height={600} 
          className="w-full rounded-lg h-80 md:h-130 flex-shrink-0" />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100"
      >
        ⬅
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100"
      >
        ➡
      </button>
      
    </div>
    {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {offerproduct.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}


