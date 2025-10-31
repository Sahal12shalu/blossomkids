'use client'
import React, { useEffect, useState } from 'react'
import AdminNav from '../AdminNav/page'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineDone } from "react-icons/md";
import axios from 'axios'

function Orders() {

    const [data, Setdata] = useState([])
    const [statusFilter, SetstatusFilter] = useState('processing')
    const [address,Setaddress] = useState([])
    const [addresspopup, Setaddresspopup] = useState(false)

    const STATUS_MAP = [
        { key: 'processing', label: 'pending' },
        { key: 'confirm', label: 'confirm' },
        { key: 'packed', label: 'packed' },
        { key: 'success', label: 'success' },
        { key: 'cancel', label: 'cancelled' }
    ]

    const Adresspopup = (id) => {
        Setaddresspopup(true)
        axios.get(`/api/checkout/shipping?shippingId=${id}`).then((res)=>{
            Setaddress(res.data.message.shipping)
        })
    }

    const Changestatus = (id) => {
        axios.put(`/api/checkout/alldata?id=${id}`).then((res) => {
            if (res.data.success) {
                Setdata(prevOrders =>
                    prevOrders.filter(order => order._id !== id)
                )
            } else {
                alert('product not found')
            }
        })
    }

    useEffect(() => {
        axios.get(`/api/checkout/alldata?status=${statusFilter}`).then((res) => {
            Setdata(res.data.message)
        })
    }, [])

    const fetchorder = (key) => {
        axios.get(`/api/checkout/alldata?status=${key}`).then((res) => {
            Setdata(res.data.message)
        })
    }

    const getNonFirstImage = (images) => {
        if (!images || images.length < 2) return images?.[0] || 'default.jpg';
        return images[0];
    };

    return (
        <div className='flex flex-col justify-start items-center min-h-screen text-black bg-white w-full'>
            <AdminNav />
            {
                addresspopup ?
                    <div className='fixed inset-0 bg-black/10 px-3 bg-opacity-20 z-50 flex items-center justify-center'>
                        <div className='rounded-md w-[90%] break-all md:max-w-sm bg-white'>
                            <div className='bg-teal-500 w-all h-[25%] rounded-t-md py-3 flex items-center pl-3 text-white font-semibold'>Shipping Address</div>
                            {address.map((value)=>(
                            <div key={value._id} className='w-full flex flex-col justify-center items-center h-[50%] py-4'>
                                <h1 className='text-black font-sans font-semibold'>Full Name : {value.fullname}</h1>
                                <h1 className='text-black font-sans font-semibold'>Email : {value.email} </h1>
                                <h1 className='text-black font-sans font-semibold'>{value.city} - {value.postalcode}</h1>
                                <h1 className='text-black font-sans font-semibold'>Phone number : {value.phonenumber} </h1>
                                <h1 className='text-black font-sans font-semibold'>Addres : {value.address}</h1>
                            </div>
                            ))}
                            <div className='w-full h-[25%] flex justify-center items-center gap-4 pb-2'>
                                <button onClick={() => Setaddresspopup(false)} className='transition-transform active:scale-95 duration-100 w-[28%] h-8.5 bg-teal-500/80 hover:bg-teal-500 rounded-md text-white font-semibold'>Cancel</button>
                              </div>
                        </div>
                    </div> : ''
            }

            <div className='mt-23 max-w-5xl p-4 flex flex-col justify-center items-center'>
                <h1 className='text-[26px] font-honeybabe text-black underline underline-offset-2 tracking-wide'>Orders</h1>
                <div className='flex gap-4 max-md:flex-wrap md:gap-12 mt-2 border-b-1 border-black/40 pb-3'>
                    {
                        STATUS_MAP.map(s => (
                            <button onClick={() => { SetstatusFilter(s.key); fetchorder(s.key) }}
                                key={s.key} className={`${statusFilter === s.key ? 'bg-gray-500 text-white' : 'text-black bg-white'}
                     transition-transform active:scale-95 duration-100 font-sans font-semibold text-[14px] md:text-[16px] 
                     rounded-2xl border-1 border-black/40 px-3 md:px-4 py-1`}>{s.label}</button>
                        ))
                    }
                </div>
            </div>
            <div className='w-full max-w-7xl px-2'>
                <div className='flex w-full h-12 border-b-1 border-black'>
                    <div className='w-[8%] flex justify-center items-center text-[10px] md:text-[15px] font-sans font-bold'>
                        <p>SI.NO</p>
                    </div>

                    <div className='w-[14%] max-md:hidden flex justify-center items-center text-[10px] md:text-[15px] font-sans font-bold'>
                        <p>OrderId</p>
                    </div>

                    <div className='w-[12%] tracking-wide max-md:hidden flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                        <p>Image</p>
                    </div>

                    <div className='w-[25%] tracking-wide md:w-[16%] flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                        <p>Name</p>
                    </div>

                    <div className='w-[20%] tracking-wide md:w-[10%] flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                        <p>Payment</p>
                    </div>

                    <div className='w-[20%] tracking-wide md:w-[10%] flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                        <p>Quantity</p>
                    </div>

                    <div className='w-[12%] tracking-wide flex max-md:hidden justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                        <p>prize</p>
                    </div>

                    <div className='w-[30%] tracking-wide md:w-[19%] flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                        <p>Actions</p>
                    </div>
                </div>

                {data.map((value, index) => (

                    <div key={value._id} className='flex w-full py-4 md:py-6 border-b-1 border-black'>
                        <div className='w-[8%] flex justify-center items-center text-[10px] md:text-[15px]'>
                            <p>{index + 1}</p>
                        </div>

                        <div className='w-[73%] flex flex-col gap-2'>
                            {
                                value.items.map((product) => (
                                    <div key={product._id} className='w-full flex'>
                                        <div className='w-[25%] max-md:hidden tracking-wide flex flex-col justify-center items-center text-[10px] font-semibold font-sans md:text-[11px] break-all whitespace-normal px-2 text-center'>
                                            <p>{product.id}</p>
                                        </div>
                                        <div className='w-[22%] tracking-wide max-md:hidden flex justify-center items-center text-[10px] md:text-[15px]'>
                                            <Image src={getNonFirstImage(product.images)} alt='product' width={100} height={100} className='w-17 h-12 rounded-lg border-1 border-black object-fill' />
                                        </div>

                                        <div className='w-[38%] tracking-wide md:w-[29%] flex flex-col justify-center items-center text-[10px] font-semibold font-sans md:text-[15px] break-all whitespace-normal px-2 text-center'>
                                            <p>{product.name}</p>
                                        </div>
                                        {
                                            value.shipping.map((value) => (
                                                <div key={value._id} className='w-[30%] tracking-wide md:w-[19%] flex justify-center items-center text-[10px] font-semibold md:text-[13px]'>
                                                    <p>{value.payment}</p>
                                                </div>
                                            ))
                                        }
                                        <div className='w-[29%] tracking-wide md:w-[18%] flex justify-center items-center text-[10px] md:text-[15px]'>
                                            <p>{product.quantity}</p>
                                        </div>

                                        <div className='w-[22%] tracking-wide flex max-md:hidden justify-center items-center text-[10px] md:text-[15px]'>
                                            <p>{product.lastprize}</p>
                                        </div>
                                    </div>
                                ))}

                        </div>

                        <div className='w-[30%] tracking-wide md:w-[19%] flex max-md:flex-col justify-center gap-1 md:gap-2 items-center text-[8px] md:text-[15px]'>
                            <button onClick={() => Adresspopup(value._id)}
                                className='transition-transform active:scale-95 duration-100 md:w-28 w-[70%] h-6 md:h-8 max-md:px-2 text-white font-semibold font-sans rounded-md hover:bg-blue-500/80 bg-blue-500'>View Address</button>
                            { (value.status === 'success' || value.status === 'cancel') ? null :
                               ( <button onClick={() => Changestatus(value._id)}
                                    className='transition-transform active:scale-95 duration-100 max-md:px-2 p-2 max-md:hidden text-white font-semibold font-sans rounded-md bg-green-500'><MdOutlineDone /></button>)
                            }
                        </div>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default Orders