'use client'
import Navbar from '@/app/Pages/Navbar/page'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MdOutlineDone } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa6";
import { IoIosCloudDone } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import Image from 'next/image';
import axios from 'axios';

function Detailspage() {

  const params = useParams()
  const guestId = params['shippingId']
  const [data, Setdata] = useState([])
  const [orderId, SetorderId] = useState('')
  const [orderCancel, SetorderCancel] = useState(false)
  const [buttonspin, Setbuttonspin] = useState(false)

  const Cancelorder = (id) => {
    SetorderId(id)
    SetorderCancel(true)
  }

  const Cancelshipping =() =>{
    Setbuttonspin(true)
    axios.put(`/api/checkout/shipping?orderId=${orderId}`).then((res)=>{
      if(res.data.message === 'success'){
        setTimeout(() => {
      Setbuttonspin(false)
      SetorderCancel(false)
      window.location.reload();
      },1000)
    }
    })
  }

  useEffect(() => {
    axios.get(`/api/checkout/shipping?shippingId=${guestId}`).then((res) => {
      Setdata([res.data.message])
    })
  }, [])

  const getNonFirstImage = (images) => {
    if (!images || images.length < 2) return images?.[0] || 'default.jpg';
    return images[0];
  };

  return (
    <div className='w-full flex flex-col justify-center items-center bg-white pb-6'>
      <Navbar />
      {
        orderCancel ?
          <div className='fixed inset-0 bg-black/10 px-3 bg-opacity-20 z-50 flex items-center justify-center'>
            <div className='rounded-md w-[90%] break-all md:max-w-sm h-57 bg-white'>
              <div className='bg-red-400 w-all h-[25%] rounded-t-md flex items-center pl-3 text-white font-semibold'>Confirm Deletion</div>
              <div className='w-full flex flex-col justify-center items-center h-[40%]'><IoIosWarning className='text-red-500 h-7 w-7' />
                <h1 className='pt-1 text-center text-[15px] text-black'>Are you sure want to Cancel <br />this Order</h1></div>
                <h1 className='text-center text-[12px] text-black'>(You will get money back within 3 days)</h1>
              <div className='w-full h-[25%] flex justify-center items-center gap-4 pb-2'>
                <button onClick={() => SetorderCancel(false)} className='transition-transform active:scale-95 duration-100 w-[28%] h-8.5 bg-gray-500/80 hover:bg-gray-500 rounded-md text-white font-semibold'>Back</button>
                {buttonspin ?
                <button className='transition-transform active:scale-95 flex justify-center items-center duration-100 w-[33%] 
                h-8.5 bg-red-500/80 hover:bg-red-500 rounded-md text-white font-semibold'>
                  <div className='w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin'></div></button>
                 :
                <button onClick={Cancelshipping} className='transition-transform active:scale-95 duration-100 w-[33%] h-8.5 bg-red-500/80 rounded-md text-white font-semibold'>Done</button>
                }
                </div>
            </div>
          </div> : ''
      }
      {
        data.map((value, index) => (
          <div key={value._id} className='w-full flex flex-col justify-center items-center'>
            <div className='mt-23 flex flex-col justify-center items-center md:w-[65%] w-[98%]'>
              <h1 className='text-[18px] md:text-[26px] font-honeybabe text-black tracking-wide'>OrderId : {value._id}</h1>
              <div className='flex justify-end items-end w-full'>
                {value.status === 'processing' ?
                  <button onClick={() => Cancelorder(value._id)}
                    className='pb-3 pr-2 max-md:pt-1 text-[15px] font-sans font-semibold underline underline-offset-2 text-red-500 decoration-red-500'>Cancel Order</button>
                  :
                  <button className={`pb-3 pr-2 max-md:pt-1 text-[15px] font-sans font-semibold ${value.status === 'cancel' ? 'text-red-500' : 'text-teal-700'}`}>{value.status === 'confirm' ? 'Confirm' : value.status === 'packed' ? 'Packed' : value.status === 'cancel' ? 'Order Cancelled' : 'Success'}</button>
                }
              </div>
              <div className='shadow-[0px_0px_26px_0px_rgba(0,_0,_0,_0.1)] rounded-xl flex justify-start items-center px-2 md:px-10 py-5 w-full'>
                <div className='flex flex-col justify-center items-center w-[15%] gap-1'>
                  <div className={`rounded-full ${value.status === 'cancel' ? 'bg-black/60' : 'bg-teal-500'}`}>
                    <MdOutlineDone className='text-white w-7 h-7 m-3 md:w-12 md:h-12 md:m-5' /></div>
                  <p className='text-[10px] md:text-[18px] font-sans text-black font-semibold flex gap-1 justify-center items-center'>
                    <LuNotebookPen />Placed</p>
                </div>

                <div className='flex flex-col justify-center items-center w-[14%]'>
                  <div className={`md:border-b-5 border-b-3 w-full ${value.status === 'confirm' ? 'border-teal-500' : value.status === 'packed' ? 'border-teal-500' : value.status === 'success' ? 'border-teal-500' : 'border-black/60'}`}></div>
                </div>

                <div className='flex flex-col justify-center items-center w-[15%] gap-1'>
                  <div className={`rounded-full ${value.status === 'confirm' ? 'bg-teal-500' : value.status === 'packed' ? 'bg-teal-500' : value.status === 'success' ? 'bg-teal-500' : 'bg-black/60'}`}>
                    <MdOutlineDone className='text-white w-7 h-7 m-3 md:w-12 md:h-12 md:m-5' /></div>
                  <p className='text-[10px] md:text-[18px] font-sans text-black font-semibold flex gap-1 justify-center items-center'>
                    <GiBoxUnpacking /> Packing</p>
                </div>

                <div className='flex flex-col justify-center items-center w-[13%]'>
                  <div className={`md:border-b-5 border-b-3 w-full ${value.status === 'packed' ? 'border-teal-500' : value.status === 'success' ? 'border-teal-500' : 'border-black/60'}`}></div>
                </div>

                <div className='flex flex-col justify-center items-center w-[15%] gap-1'>
                  <div className={`rounded-full ${value.status === 'packed' ? 'bg-teal-500' : value.status === 'success' ? 'bg-teal-500' : 'bg-black/60'}`}>
                    <MdOutlineDone className='text-white w-7 h-7 m-3 md:w-12 md:h-12 md:m-5' /></div>
                  <p className='text-[10px] md:text-[18px] font-sans text-black font-semibold flex gap-1 justify-center items-center'>
                    <FaTruckMoving /> En Route</p>
                </div>

                <div className='flex flex-col justify-center items-center w-[13%]'>
                  <div className={`md:border-b-5 border-b-3 w-full ${value.status === 'success' ? 'border-teal-500' : 'border-black/60'}`}></div>
                </div>

                <div className='flex flex-col justify-center items-center w-[15%] gap-1'>
                  <div className={`rounded-full ${value.status === 'success' ? 'bg-teal-500' : 'bg-black/60'}`}>
                    <MdOutlineDone className='text-white w-7 h-7 m-3 md:w-12 md:h-12 md:m-5' /></div>
                  <p className='text-[10px] md:text-[18px] font-sans text-black font-semibold flex gap-1 justify-center items-center'>
                    <IoIosCloudDone />Delivered</p>
                </div>

              </div>
            </div>
            <div className='mt-5 md:w-[65%] w-[98%] px-5 flex justify-center max-md:text-center md:justify-around max-md:items-center pb-5 border-b-1 border-black'>
              {
                value.shipping.map((value) => (

                  <div key={value._id}>
                    <h1 className='text-black text-[20px] md:text-[22px] font-sans font-bold tracking-wide underline underline-offset-2'>Shipping Details <span className='max-md:hidden'>(buyer)</span></h1>
                    <h1 className='text-black text-[14px] md:text-[16px] font-sans font-semibold mt-1'>{value.email}</h1>
                    <h1 className='text-black text-[14px] md:text-[16px] font-sans font-semibold'>{value.phonenumber}</h1>
                    <h1 className='text-black text-[14px] md:text-[16px] font-sans font-semibold'>{value.city} - <span>{value.postalcode}</span></h1>
                    <h1 className='text-black text-[14px] md:text-[16px] font-sans font-semibold w-[220px]'>{value.address}</h1>
                  </div>
                ))
              }
              <div className='max-md:hidden'>
                <h1 className='text-black text-[20px] md:text-[22px] font-sans font-bold tracking-wide underline underline-offset-2'>Shipping Details (seller)</h1>
                <h1 className='text-black text-[14px] md:text-[16px] font-sans font-semibold mt-1'>Sahalsailuu@gmail.com</h1>
                <h1 className='text-black text-[14px] md:text-[16px] font-sans font-semibold'>+91 9633802786</h1>
                <h1 className='text-black text-[14px] md:text-[16px] font-sans font-semibold'>Kasaragod - <span>671121</span></h1>
                <h1 className='text-black text-[14px] md:text-[16px] font-sans font-semibold'>Arafa street, kollambady, Anangoor,<br /> kasaragod, Kerala</h1>
              </div>
            </div>

            <div className='md:w-[65%] w-[98%] p-1 md:p-3 mt-2'>
              <h1 className='text-[22px] font-honeybabe tracking-wide text-black'>Order items</h1>
              {
                value.items.map((value) => (

                  <div key={value._id} className='w-full flex mt-2 border-b-1 border-black pb-3'>
                    <Image src={getNonFirstImage(value.images)} alt='product' height={100} width={100} className='w-[17%] md:w-[8%] h-15 md:h-20 rounded-lg' />
                    <div className='w-[45%] md:w-[73%] flex flex-col justify-center pl-3 items-start'>
                      <h1 className='text-[14px] md:text-[18px] text-black font-sans font-bold'>{value.name}</h1>
                      <p className='text-[12px] md:text-[15px] text-black font-sans font-semibold'>{value.category}</p>
                    </div>
                    <div className='flex w-[35%] md:w-[20%] flex-col justify-center md:items-center items-end'>
                      <h1 className='text-[14px] md:text-[18px] text-black font-sans font-bold'>₹ {value.lastprize}
                        <span className='text-[11px] md:text-[15px] line-through text-black font-sans font-semibold pl-1 md:pl-2'>{value.firstprize ? '₹' + value.firstprize : ''}</span>
                        <span className='text-green-400 text-[11px] md:text-[15px] pl-1'>{value.discount ? value.discount + '%off' : ''}</span></h1>
                      <h1 className='text-[12px] md:text-[16px] text-black font-sans font-semibold'>{value.quantity} * {value.lastprize} = {value.quantity * value.lastprize}</h1>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className='md:w-[65%] w-[98%] p-1 md:p-3'>
              <h1 className='text-[22px] font-honeybabe tracking-wide text-black'>Order Summary</h1>
              <div className='rounded-md w-full gap-3 flex flex-col border-1 border-black/20 shadow-[0px_-1px_14px_0px_rgba(0,_0,_0,_0.1)] px-7 py-4 mt-4'>
                <div className='flex justify-between'>
                  <p className='font-sans font-semibold text-black/60 text-[17px]'>Subtotal:</p>
                  <p className='font-sans font-bold text-black text-[17px]'>₹ {value.grandtotal}.00</p>
                </div>
                <div className='flex justify-between border-b-1 border-black/30 pb-4'>
                  <p className='font-sans font-semibold text-black/60 text-[17px]'>Delivery:</p>
                  <p className='font-sans font-bold text-black text-[17px]'>₹ 100.00</p>
                </div>
                <div className='flex justify-between'>
                  <p className='font-sans font-semibold text-black text-[17px]'>Grand Total:</p>
                  <p className='font-sans font-bold text-black text-[17px]'>₹ {value.grandtotal + 100}.00</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Detailspage