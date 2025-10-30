'use client'
import Navbar from '@/app/Pages/Navbar/page'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'

function Trackpage() {

    const [data,Setdata] = useState([])
    const [popUp,SetpopUp] = useState(true)
    const [buttonspin,Setbuttonspin] = useState(false)
    const [email,Setemail] = useState('')

    const Submitemail =(e) =>{
      e.preventDefault()
      Setbuttonspin(true)
      axios.get(`/api/checkout?Email=${email}`).then((res)=>{
        Setdata(res.data.message)
        setTimeout(() => {
          Setbuttonspin(false)
          SetpopUp(false)
        },1000)
        })
    }
    
  return (
    <div>
      { popUp ? '' :
        <Navbar />
      }
        {
                popUp ?
                  <div className='fixed inset-0 bg-white px-3 bg-opacity-20 z-50 flex items-center justify-center'>
                    <div className='rounded-lg w-[90%] break-all md:max-w-sm h-57 bg-teal-500'>
                      <div className='bg-teal-800 w-all h-[25%] rounded-t-lg flex items-center pl-3 text-white font-sans font-semibold'>Enter Email</div>
                      <div className='w-full flex flex-col justify-center items-center h-[30%]'>
                        <h1 className='pt-1 text-center font-sans font-semibold
                         text-[15px] text-white'>Search using the email<br />you’ll be able to see the orders with that email.</h1></div>
                      <form onSubmit={Submitemail}>
                      <div className='w-full h-[45%] flex flex-col justify-center items-center gap-4 pb-2 '>
                        <input onChange={(e)=>Setemail(e.target.value)} value={email} type='email' className='bg-white rounded-md w-[60%] h-8 border-1 border-black/50 pl-2' required/>
                        {buttonspin ?
                        <button className='transition-transform active:scale-95 flex justify-center items-center duration-100 w-[33%] 
                        h-8.5 bg-black/80 hover:bg-black rounded-md text-white font-semibold'>
                          <div className='w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin'></div></button>
                         :
                        <button className='transition-transform active:scale-95 duration-100 w-[33%] h-8.5
                         bg-black/80 rounded-md text-white font-semibold border-1 border-black/30'>Done</button>
                        }
                        
                        </div>
                        </form>
                    </div>
                  </div> : ''
              }
              {
      data.length > 0 ?

        <div className='mt-23 w-full flex flex-col justify-center items-center'>

          <h1 className='font-honeybabe text-center w-full text-[25px] tracking-wider underline underline-offset-2'>History Page</h1>
          <div className='max-md:hidden w-[80%] flex max-md:flex-col border-b-1 border-black/20 p-5'>
            <div className='md:w-[5%] w-full max-md:hidden flex justify-center items-center'>
              <p className='text-[16px] text-black font-sans font-semibold'>number</p>
            </div>

            <div className='md:w-[18%] w-full flex justify-center items-center'>
              <p className='text-[16px] text-black font-sans font-semibold'>orderId</p>
            </div>

            <div className='max-md:flex max-md:w-full md:w-[60%] flex max-md:pt-3'>
            <div className='md:w-[38%] w-[60%] flex flex-col justify-center items-center max-md:items-start'>
              <h1 className='text-[16px] text-black font-sans font-semibold'>product name</h1>
            </div>
            <div className='md:w-[20%] max-md:hidden flex flex-col justify-center items-center '>
              <h1 className='text-[16px] text-black font-sans font-semibold'>category</h1>
            </div>
            <div className='md:w-[24%] w-[18%] flex flex-col justify-center items-center'>
              <h1 className='text-[16px] text-black font-sans font-semibold'>quantity</h1>
            </div>
            <p className='md:hidden w-[4%] flex items-center justify-center'>*</p>
            <div className='md:w-[20%] w-[18%] flex flex-col justify-center items-center'>
              <h1 className='text-[18px] text-black font-sans font-semibold'>prize</h1>
            </div>
             </div>

             <div className='md:w-[25%] flex max-md:justify-between max-md:pt-4'>
            <div className='md:w-[40%] flex justify-center items-center'>
              <p className='text-[16px] max-md:text-[22px] text-black font-sans font-semibold'>grandtotal</p>
            </div>
      
            </div>
          </div>
        </div>
        :
        <h1 className='text-center mt-23 text-[30px] font-honeybabe tracking-wide'>No Products Found</h1>
         }


        <div className='mt-3 w-full flex flex-col justify-center items-center'>
          { data.slice().reverse().map((value,index)=>(

          <div key={value._id} className={`${value.status === 'cancel' ? 'bg-gray-100' : 'bg-white shadow-[0px_1px_25px_0px_rgba(0,_0,_0,_0.1)]'} w-[90%] md:w-[80%] flex max-md:flex-col mt-3 rounded-2xl border-1 border-black/20 p-5`}>
            <div className='md:w-[5%] w-full max-md:hidden flex justify-center items-center'>
              <p className='text-[16px] text-black font-sans font-semibold'>{index+1}</p>
            </div>
            <div className='md:hidden w-full flex justify-center items-center'>
              <p className='text-[14px] text-black font-sans font-semibold'>{value.day} - {value.time}</p>
            </div>
            <div className='md:w-[18%] w-full flex justify-center items-center'>
              <p className={`text-[14px] ${value.status === 'cancel' ? 'text-red-500' : 'text-blue-600'} font-sans font-semibold`}>{ value.status === 'cancel' ? 'Order Cancelled' : `orderId : ${value._id}`}</p>
            </div>

            <div className='flex flex-col w-full md:w-[60%] md:gap-2 max-md:border-1 max-md:border-black/30 max-md:pl-2 max-md:pb-2 max-md:rounded-2xl max-md:mt-2'>
            {
              value.items.map((value,index)=>(
            <div key={value._id} className='max-md:flex md:flex max-md:w-full md:w-full flex max-md:pt-2'>
            <div className='md:w-[38%] w-[60%] flex flex-col justify-center items-center max-md:items-start'>
              <h1 className='text-[18px] text-black font-sans font-bold tracking-wider'>{value.name}</h1>
            </div>
            <div className='md:w-[20%] max-md:hidden flex flex-col justify-center items-center '>
              <h1 className='text-[18px] text-black font-sans font-semibold'>{value.category}</h1>
            </div>
            <div className='md:w-[22%] w-[18%] flex flex-col justify-center items-center'>
              <h1 className='text-[18px] text-black font-sans font-semibold'>{value.quantity}</h1>
            </div>
            <p className='md:hidden w-[4%] flex items-center justify-center'>*</p>
            <div className='md:w-[20%] w-[18%] flex flex-col justify-center items-center'>
              <h1 className='text-[18px] text-black font-sans font-semibold'>{value.lastprize}</h1>
            </div>
             </div>
             ))
            }
            </div>

             <div className='md:w-[25%] flex max-md:justify-between max-md:pt-4'>
            <div className='md:w-[40%] flex justify-center items-center'>
              <p className='text-[18px] max-md:text-[22px] text-black tracking-wide font-semibold'>
                <span className='md:hidden'>Total:</span> {value.grandtotal}</p>
            </div>
            <div className='md:w-[60%] underline underline-offset-2 decoration-amber-600 flex justify-center transition-transform active:scale-95 duration-100 items-center'>
              <Link href={`/Cart/Detailspage/${value._id}`} className='text-[17px] text-amber-600 font-sans font-normal'>view details</Link>
            </div>
            </div>
          </div>
                    ))
          }
        </div>
    </div>
  )
}

export default Trackpage