'use client'
import Navbar from '@/app/Pages/Navbar/page'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GrLineChart } from "react-icons/gr";
import { MdLocalShipping } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useParams } from 'next/navigation';
import { IoCart } from "react-icons/io5";
import axios from 'axios';
import Link from 'next/link';
import { getOrCreateGuestId } from '@/app/Components/lib/guestid';
import { useCart } from '@/app/Components/lib/cartprovider';

function Productshow() {

  const params = useParams()
  const proId = params['showpage']
  const [data, Setdata] = useState([])
  const [recommended, Setrecommended] = useState([])
  const [selectedImage, setSelectedImage] = useState(null);
  const [buttonspin, Setbuttonspin] = useState(false)
  const guestId = getOrCreateGuestId();
  const [loadingProductId, setLoadingProductId] = useState(null);
  const { SetcartValue } = useCart()

  const addtocart = (id) => {
    setLoadingProductId(id)
    Setbuttonspin(true)
    axios.post(`/api/cart/crud?proId=${id}&deviceId=${guestId}`).then((res) => {
      if (res.data.message === 'success') {
        setTimeout(() => {
          axios.get(`/api/cart/crud?guestId=${guestId}`)
            .then((res) => {
              if (res.data.message === 'nodata') {
                console.log('no cart')
              } else {
                if (res.data.message.items.length === 0) {
                  SetcartValue(0)
                } else {
                  SetcartValue(res.data.message.items.length)
                }
              }
            })
          Setbuttonspin(false)
        }, 1000);
      } else {
        console.log('error')
      }
    })
  }

  useEffect(() => {
    axios.post(`/api/product/singleproduct?proId=${proId}`).then((res) => {
      Setrecommended(res.data.data)
    })
  }, [])


  useEffect(() => {
    axios.get(`/api/product/singleproduct?proId=${proId}`).then((res) => {
      Setdata([res.data.data])
    })
  }, [])

  const getNonFirstImage = (images) => {
    if (!images || images.length < 2) return images?.[0] || 'default.jpg';
    return images[0];
  };

  return (
    <div className='md:mb-9 mb-15 min-h-screen pb-10 text-black bg-white'>

      {selectedImage && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-999'
          onClick={() => setSelectedImage(null)} // ❌ close on click
        >
          <Image
            src={selectedImage}
            alt='Zoomed'
            width={600}
            height={600}
            className='rounded-lg h-80 w-80 md:h-90 md:w-90 '
          />
        </div>
      )}

      <div className="fixed max-md:top-2/5 top-2/5 lg:top-2/5 lg:left-0 w-30 md:w-62 h-25 md:h-52 bg-gradient-to-b from-[#ffc97387] to-green-200 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="fixed top-2/5 lg:top-2/9 max-md:hidden lg:right-0 md:w-62 md:h-52 bg-gradient-to-b from-[#ffc9735e] to-green-200/70 rounded-full blur-2xl md:blur-3xl"></div>

      <Navbar />
      <div className='pt-28 md:pt-32 w-full flex max-md:flex-col md:flex'>
        {
          data.map((value, index) => (
            <div key={index} className='md:flex w-[100%] md:px-[10%]'>

              <div className='md:w-[50%] flex flex-col'>
                <div className='w-full flex justify-center items-center'>
                  <Image src={getNonFirstImage(value.images)} className='md:w-[70%] border-1 border-black/30 w-[60%] h-60 md:h-95 rounded-md z-990' alt='product' width={1000} height={1000} />
                </div>
                <div className='w-full flex flex-wrap justify-center items-center mt-3 gap-3'>
                  {
                    value.images.map((value, index) => (
                      <Image onClick={() => setSelectedImage(value)} // 🖱️ click handler
                        src={value} key={index} className='w-15 h-15 md:h-20 md:w-20 border-1 border-black/30 rounded-md z-990' alt='minipics' width={100} height={100} />
                    ))
                  }
                </div>
              </div>
              <div className='md:w-[50%] flex flex-col px-5 max-md:mt-5 z-990'>
                <div className='w-full flex flex-col '>
                  <h1 className='flex text-[13px] md:text-[16px] text-black z-997 break-all gap-3 font-semibold font-sans'><GrLineChart className='mt-1.5 text-green-400' /> We offer the best products at the most affordable prices.</h1>
                </div>
                <h1 className='text-[23px] md:text-[25px] font-bold pt-3 font-sans text-black/90 z-997'>{value.name}</h1>
                <p className='text-black underline underline-offset-2 font-sans font-semibold text-[17px] z-997 md:text-[15px] mt-4'>Description</p>
                <p className='text-black font-sans md:w-[80%] text-[15px] mt-2 z-997'>{value.description}</p>
                <p className='text-[22px] text-black font-bold font-sans pt-4 z-997'>₹ {value.lastprize}.00
                  <span className={`text-[16px] text-black/70 ${value.firstprize ? '' : 'hidden'} font-sans font-normal line-through pl-3`}>₹ {value.firstprize}.00</span>
                  <span className={`pl-2 text-[16px] ${value.firstprize ? '' : 'hidden'} text-green-700/70 font-semibold`}>{value.discount}%off</span></p>
                {
                  value.stock === 'stock' ?
                    buttonspin ?
                      loadingProductId === value._id ?
                        <button className='text-white relative group bg-teal-600 flex justify-center items-center z-999 rounded-sm w-full md:w-[80%] px-6 py-3 text-[14px] mt-3 tracking-wider' style={{ fontFamily: 'serif' }}>
                          <div className='w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                        </button> :
                        <button onClick={() => {
                          addtocart(value._id)
                        }} className='px-6 py-3 transition-transform active:scale-95 duration-100 relative group bg-teal-500 rounded-md w-full md:w-[80%] text-white font-semibold font-sans mt-3'>
                          <span className="relative z-10flex justify-center items-center gap-3"><IoCart />Add to Cart</span>
                          <span className="absolute left-0 bottom-0 h-0 w-full rounded-sm bg-teal-600 transition-all duration-300 group-hover:h-full z-0"></span>
                        </button> :
                      <button onClick={() => {
                        addtocart(value._id)
                      }} className='px-6 py-3 transition-transform active:scale-95 duration-100 relative group bg-teal-500 rounded-md w-full md:w-[80%] text-white font-semibold font-sans mt-3'>
                        <span className="relative z-10 flex justify-center items-center gap-3"><IoCart /> Add to Cart</span>
                        <span className="absolute left-0 bottom-0 h-0 w-full rounded-sm bg-teal-600 transition-all duration-300 group-hover:h-full z-0"></span>
                      </button> :
                    <button className='px-6 py-3 relative group bg-gray-500 rounded-md w-full md:w-[80%] text-white font-semibold font-sans mt-3'>
                      Out of Stock</button>}

                <div className='mt-7 rounded-md w-full flex flex-col z-997 px-5 py-4 md:py-7 gap-3 md:gap-6 bg-white shadow-[0px_1px_24px_0px_rgba(0,_0,_0,_0.1)]'>
                  <div className='w-full md:flex gap-3'>
                    <div className='w-full md:w-[50%] flex items-center gap-3 max-md:justify-center'>
                      <div className='w-9 h-9 bg-red-50 flex justify-center items-center rounded-full'>
                        <MdLocalShipping className='w-full h-full p-2 text-red-500' />
                      </div>
                      <h1 className='font-semibold text-black font-sans text-[16px]'>All India Delivery Available</h1>
                    </div>
                    <div className='w-full md:w-[50%] max-md:pt-3 flex items-center gap-3 max-md:justify-center'>
                      <div className='w-9 h-9 bg-teal-50 flex justify-center items-center rounded-full'>
                        <FaBoxOpen className='w-full h-full p-2 text-teal-500' />
                      </div>
                      <h1 className='font-semibold text-black font-sans text-[16px]'>Dispatch within 7 - 8 Days</h1>
                    </div>
                  </div>

                  <div className='w-full md:flex gap-3'>
                    <div className='w-full md:w-[50%] flex items-center gap-3 max-md:justify-center'>
                      <div className='w-9 h-9 bg-amber-100 flex justify-center items-center rounded-full'>
                        <VscWorkspaceTrusted className='w-full h-full p-2' />
                      </div>
                      <h1 className='font-semibold text-black font-sans text-[16px]'>Quality products / trusted</h1>
                    </div>
                    <div className='w-full md:w-[50%] max-md:pt-3 flex items-center gap-3 max-md:justify-center'>
                      <div className='w-9 h-9 bg-cyan-50 flex justify-center items-center rounded-full'>
                        <TbMoneybag className='w-full h-full p-2 text-blue-700' />
                      </div>
                      <h1 className='font-semibold text-black font-sans text-[16px]'>Cash on Delivery Available</h1>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
      {
        recommended.length > 0 ?

          <div className='mt-8 flex flex-col justify-center items-center md:px-[10%] px-3'>
            <h1 className='text-[28px] font-honeybabe font-extralight'>Recommended products</h1>
            <div className='max-w-6xl px-1 md:px-5 flex flex-wrap justify-center items-center gap-3 md:gap-10 mt-4'>

              {
                recommended.map((value, index) => (
                  <Link href={`/Category/Productshow/${value._id}`} key={index} className={`z-997 h-70 md:h-82 shadow-[0px_1px_29px_10px_rgba(0,_0,_0,_0.1)] relative hover:scale-105 transform transition-transform duration-300  rounded-md md:p-3 pb-9 bg-white`}>
                    <Image src={getNonFirstImage(value.images)} alt='product' width={100} height={100} className='w-full max-md:p-1 max-md:border-1 max-md:border-black/30 md:border-b-1 md:border-black/50 h-[60%] max-md:rounded-t-md' />
                    <p className={`text-red-400 ${value.stock === 'stock' ? 'hidden' : 'flex'} right-1 md:right-3 md:mt-1 items-center text-[9px] tracking-wide md:text-[12px] absolute font-semibold`}>No Stock</p>
                    <h1 className='font-sans font-semibold text-[13px] md:text-[15px] pt-3 max-md:px-3'>{value.name}</h1>
                    <h1 className='text-[13px] tracking-wide max-md:px-3'>{value.category}</h1>
                    <p><span className='font-bold text-[14px] md:text-[16px] font-sans max-md:pl-3 max-md:pr-1'>&#8377; {value.lastprize} </span>
                      <span className='line-through text-[12px]'>{value.firstprize ? '₹' + value.firstprize : ''}</span>
                      <span className='pl-1 text-[13px] text-green-700/70 font-semibold'>{value.discount ? value.discount + '%off' : ''}</span></p>
                    <div className='w-full flex justify-center items-center'>
                      {
                        value.stock === 'stock' ?
                          buttonspin ?
                            loadingProductId === value._id ?
                              <button className='text-white relative group bg-teal-600 flex justify-center items-center z-999 rounded-sm w-30 h-7 text-[14px] mt-3 tracking-wider' style={{ fontFamily: 'serif' }}>
                                <div className='w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                              </button> :
                              <button onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                addtocart(value._id)
                              }} className='text-white relative group bg-teal-500 z-999 rounded-sm w-30 h-7 text-[14px] mt-3 tracking-wider' style={{ fontFamily: 'serif' }}>
                                <span className="relative z-10">Cart Now</span>
                                <span className="absolute left-0 bottom-0 h-0 w-full rounded-sm bg-teal-600 transition-all duration-300 group-hover:h-full z-0"></span>
                              </button>
                            :
                            <button onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addtocart(value._id)
                            }} className='text-white relative group bg-teal-500 z-999 rounded-sm w-30 h-7 text-[14px] mt-3 tracking-wider' style={{ fontFamily: 'serif' }}>
                              <span className="relative z-10">Cart Now</span>
                              <span className="absolute left-0 bottom-0 h-0 w-full rounded-sm bg-teal-600 transition-all duration-300 group-hover:h-full z-0"></span>
                            </button> :
                          <button className='text-white bg-gray-500 z-99 rounded-sm w-30 h-7 text-[14px] mt-3 tracking-wider' style={{ fontFamily: 'serif' }}>Out of stock</button>
                      }
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
          : ''
      }
    </div>
  )
}

export default Productshow