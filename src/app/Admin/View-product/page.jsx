'use client'
import React, { useEffect, useState } from 'react'
import AdminNav from '../AdminNav/page'
import Image from 'next/image'
import axios from 'axios'
import { IoIosWarning } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoSearch } from "react-icons/io5";
import { TbSquareRoundedFilled } from "react-icons/tb";
import Link from 'next/link'

function Viewproduct() {

  const [data, Setdata] = useState([])
  const [deletepopup, Setdeletepopup] = useState(false)
  const [delproId, SetdelproId] = useState('')
  const [loading, Setloading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Confirmdelete = (e) => {
    e.preventDefault()
    axios.delete(`/api/product/crud?id=${delproId}`).then((res) => {
      if (res.data.data === 'success') {
        Setloading(true)
        setTimeout(() => {
          Setloading(false)
          Setdeletepopup(false)
          toast('Product Deleted', {
            style: {
              background: '#000',
              color: '#fff',
              borderBottom: '3px solid black',
              width: '270px',
              height: '40px'
            },
          })
          Setdata(data.filter(product => product._id !== delproId));
          SetdelproId('')
        }, 1000);
      }
    })
  }

  const Deletepopup = (id) => {
    SetdelproId(id)
    Setdeletepopup(true)
  }

  useEffect(() => {
    axios.get('/api/product/crud').then((res) => {
      Setdata(res.data.data)
    })
  }, [])

  return (
    <div className='bg-white'>
    <ToastContainer />
    {loading && (
        <div className='fixed inset-0 bg-black/10 bg-opacity-20 z-100 flex items-center justify-center'>
          <div className='w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin'></div>
        </div>
      )}
      {
        deletepopup ?
          <div className='fixed inset-0 bg-black/10 px-3 bg-opacity-20 z-50 flex items-center justify-center'>
            <div className='rounded-md w-[90%] break-all md:max-w-sm h-57 bg-white'>
              <div className='bg-red-400 w-all h-[25%] rounded-t-md flex items-center pl-3 text-white font-semibold'>Confirm Deletion</div>
              <div className='w-full flex flex-col justify-center items-center h-[50%] pt-4'><IoIosWarning className='text-red-500 h-7 w-7' />
                <h1 className='pt-1 text-center text-[15px] text-black'>Are you sure want to delete <br />this product</h1></div>
              <div className='w-full h-[25%] flex justify-center items-center gap-4 pb-2'>
                <button onClick={() => Setdeletepopup(false)} className='transition-transform active:scale-95 duration-100 w-[28%] h-8.5 bg-gray-500/80 hover:bg-gray-500 rounded-md text-white font-semibold'>Cancel</button>
                <button onClick={Confirmdelete} className='transition-transform active:scale-95 duration-100 w-[33%] h-8.5 bg-red-500/80 hover:bg-red-500 rounded-md text-white font-semibold'>Delete</button>
              </div>
            </div>
          </div> : ''
      }
      <AdminNav />
      <div className='pt-27 md:pt-30 flex justify-center items-center flex-col'>
        <div className='w-[80%] md:w-[60%] h-10 relative mb-2 md:mb-4'>
        <input type='text' value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         className='w-full rounded-lg h-9 border-2 border-black/40 text-black pl-8' placeholder='Search Name of product...'/>
        <IoSearch className='absolute left-3 top-2.5' />
        </div>
        <div className='w-full h-full flex justify-center'>
          <div className='w-6xl max-md:m-2 px-2 py-4 md:p-6 shadow-[0px_0px_48px_5px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white'>
            <h1 className='text-black/80 font-honeybabe text-[20px] '>View-product Informations</h1>
            <div className='w-full border-t-1 border-black my-2'></div>
            <div className='flex w-full h-12 border-b-1 border-black'>
              <div className='w-[8%] flex justify-center items-center text-[10px] md:text-[15px] font-sans font-bold'>
                <p>SI.NO</p>
              </div>

              <div className='w-[12%] tracking-wide max-md:hidden flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                <p>Image</p>
              </div>

              <div className='w-[25%] tracking-wide md:w-[19%] flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                <p>Name</p>
              </div>

              <div className='w-[20%] tracking-wide md:w-[10%] flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                <p>Category</p>
              </div>

              <div className='w-[20%] tracking-wide md:w-[13%] flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                <p>Offer</p>
              </div>

              <div className='w-[13%] tracking-wide flex max-md:hidden justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                <p>Lastprize</p>
              </div>

              <div className='w-[30%] tracking-wide md:w-[27%] flex justify-center items-center font-sans text-[10px] md:text-[15px] font-bold'>
                <p>Actions</p>
              </div>
            </div>


            {
              filteredProducts.map((value, index) => (
                <div key={index} className='flex w-full py-4 md:py-6 border-b-1 border-black'>
                  <div className='w-[8%] flex justify-center items-center text-[10px] md:text-[15px]'>
                    <p>{index + 1}</p>
                  </div>

                  <div className='w-[12%] tracking-wide max-md:hidden flex justify-center items-center text-[10px] md:text-[15px]'>
                    {
                      value.images?.[0] && (
                        <Image src={value.images[0]} key={index} alt='product' width={100} height={100} className='w-20 h-15 rounded-lg border-1 border-black object-fill' />
                      )
                    }
                  </div>

                  <div className='w-[22%] tracking-wide md:w-[19%] flex justify-center items-center text-[10px] md:font-semibold font-sans md:text-[15px] break-all whitespace-normal px-2 text-center'>
                    <p>{value.name}</p>
                  </div>

                  <div className='w-[20%] tracking-wide md:w-[10%] flex justify-center items-center text-[10px] md:text-[15px]'>
                    <p>{value.category}</p>
                  </div>

                  <div className='w-[20%] tracking-wide md:w-[13%] flex justify-center items-center text-[10px] md:text-[15px]'>
                    <p>{value.offer ? <TbSquareRoundedFilled className='text-green-400' /> : <TbSquareRoundedFilled className='text-red-500' />}</p>
                  </div>

                  <div className='w-[13%] tracking-wide flex max-md:hidden justify-center items-center text-[10px] md:text-[15px]'>
                    <p>{value.lastprize ? value.lastprize : '--'}</p>
                  </div>

                  <div className='w-[30%] tracking-wide md:w-[27%] flex max-md:flex-col justify-center gap-1 md:gap-4 items-center text-[10px] md:text-[15px]'>
                    <Link href={`/Admin/Edit-product/${value._id}`} className='transition-transform active:scale-95 duration-100 md:w-24 w-[80%] flex justify-center items-center h-6 md:h-8 text-white font-semibold font-sans rounded-md hover:bg-gray-500/90 bg-gray-500'>Edit</Link>
                    <button onClick={() => Deletepopup(value._id)} className='transition-transform active:scale-95 duration-100 md:w-18 w-[80%] h-6 md:h-8 text-white font-semibold font-sans rounded-md hover:bg-red-500/80 bg-red-500'>Delete</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewproduct