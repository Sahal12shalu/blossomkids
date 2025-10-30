'use client'
import { getOrCreateGuestId } from '@/app/Components/lib/guestid';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useCart } from '@/app/Components/lib/cartprovider';

function Products() {

  const [data, Setdata] = useState([])
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
                if(res.data.message === 'nodata'){
                    console.log('no cart')
                }else{
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
    axios.get('/api/product/crud').then((res) => {
      const allProducts = res.data.data;
      const limitedProducts = allProducts.slice(0, 8);
      Setdata(limitedProducts);
    })
  }, [])

  const getNonFirstImage = (images) => {
    if (!images || images.length < 2) return images?.[0] || 'default.jpg';
    return images[0];
  };

  return (
    <div className='w-full flex flex-col justify-center items-center z-99 relative mb-10 bg-white' id='Product'>
      <h1 className='pb-8 font-semibold text-[18px] md:text-[26px] text-black font-mainfont tracking-widest'>Products</h1>
      <div className='max-w-6xl px-2 md:px-5 flex flex-wrap justify-center items-center gap-3 md:gap-10'>
        {
          data.map((value, index) => (
            <Link href={`/Category/Productshow/${value._id}`} key={index} className={`w-44 md:w-60 h-70 md:h-82 shadow-[0px_1px_29px_10px_rgba(0,_0,_0,_0.1)] relative hover:scale-105 transform transition-transform duration-300 rounded-md md:p-3 pb-9 bg-white`}>
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
                        <button className='text-white transition-transform active:scale-95 duration-100 relative group bg-teal-600 flex justify-center items-center z-999 rounded-sm w-30 h-7 text-[14px] mt-3 tracking-wider' style={{ fontFamily: 'serif' }}>
                          <div className='w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                        </button> :
                        <button onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addtocart(value._id)
                        }} className='text-white transition-transform active:scale-95 duration-100 relative group bg-teal-500 z-999 rounded-sm w-30 h-7 text-[14px] mt-3 tracking-wider' style={{ fontFamily: 'serif' }}>
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
  )
}

export default Products