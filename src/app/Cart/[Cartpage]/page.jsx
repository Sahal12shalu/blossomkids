'use client'
import { useCart } from '@/app/Components/lib/cartprovider'
import Navbar from '@/app/Pages/Navbar/page'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation'

function Cartpage() {

  const params = useParams()
  const guestId = params['Cartpage']
  const [data, Setdata] = useState([])
  const [cartValues, SetcartValues] = useState('')
  const [grandtotal, Setgrandtotal] = useState('')
  const { cartValue, SetcartValue } = useCart();
  const [buttonspin, Setbuttonspin] = useState(false)
  const [Popup,Setpopup] = useState(false)
  const Router = useRouter()
  const [formData, SetformData] = useState({
    fullname: '', email: '', city: '', postalcode: '', address: '', payment: '', phonenumber: ''
  })

  const finalFormData = {
    formData,
    guestId
  };

  const Handlecheckout = async (e) => {
    e.preventDefault()
    Setbuttonspin(true)
    try {
      if (formData.payment === 'COD') {
        const res = await axios.post('/api/checkout', finalFormData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (res.data.message === 'success') {
          setTimeout(async () => {
            SetcartValue(0)
            const id = await res.data.shippingId
            Router.push(`/Cart/successpage/${id}`)
          }, 1000)
        }
      } else {

        const { data: order } = await axios.post('/api/payment', {
          userId: guestId,
        });
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency,
          order_id: order.id,
          name: 'Blossomkid',
          description: "Test transaction",
          handler: async function (response) {
            await axios.post('/api/checkout', finalFormData, {
              headers: {
                'Content-Type': 'application/json',
              }
            }).then(async (res) => {
              if (res.data.message === 'success') {
                SetcartValue(0)
                Setpopup(true)
                setTimeout(async () => {
                  const id = await res.data.shippingId
                  Router.push(`/Cart/successpage/${id}`)
                  Setpopup(false)
                })
              }
            })
          },
          prefill: {
            name: formData.fullname,
            email: formData.email,
            contact: formData.phonenumber
          },
          theme: {
            color: '#3399cc'
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();


        rzp.on('payment.failed', function (response) {
          alert('payment failed')
        })

      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    } finally {
      Setbuttonspin(false);
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetformData((prev) => ({ ...prev, [name]: value }));
  }

  const updateQuantity = (id, action) => {
    axios.put(`/api/cart/crud?proId=${id}&guestId=${guestId}&action=${action}`)
      .then((res) => {
        if (res.data.message === 'success') {
          const { updatedItem, grandtotal } = res.data

          Setdata((prev) => prev.map((item) =>
            String(item.id) === String(updatedItem.id) ?
              { ...item, quantity: updatedItem.quantity } : item));

          Setgrandtotal(grandtotal)
        } else {
          alert('error')
        }
      })
  }

  const Deleteproduct = (id) => {
    axios.delete(`/api/cart/crud?proId=${id}&guestId=${guestId}`).then((res) => {
      if (res.data.message === 'cartdeleted') {
        Setdata([])
        SetcartValue(0)
      } else if (res.data.message === 'Itemremoved') {
        Setdata(prevItems => prevItems.filter(item => item._id !== id));
        SetcartValue(prev => (prev > 0 ? prev - 1 : 0));
        Setgrandtotal(res.data.grandtotal);
      } else if (res.data.message === 'nocart') {
        console.log('no-cart')
      } else {
        alert('error')
      }
    })
  }

  useEffect(() => {
    axios.get(`/api/cart/crud?guestId=${guestId}`)
      .then((res) => {
        if (res.data.message === 'nodata') {
          console.log('no cart')
        } else {
          Setdata(res.data.message.items)
          Setgrandtotal(res.data.message.grandtotal)
          SetcartValues(res.data.message.items.length)
        }
      })
  }, [])

  const getNonFirstImage = (images) => {
    if (!images || images.length < 2) return images?.[0] || 'default.jpg';
    return images[0];
  };

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      {Popup && (
        <div className='fixed inset-0 bg-black/10 bg-opacity-20 z-50 flex items-center justify-center'>
          <div className='w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin'></div>
        </div>
      )}
      {
        data.length > 0 ?

          <div className='pt-22 flex max-md:flex-col w-full px-4 md:px-15 '>
            <div className='w-full md:w-[50%] flex flex-col'>
              <div className='w-full'>
                <p className='text-[22px] text-black font-honeybabe font-extralight md:pb-3'>Your Cart ( {cartValues} items )</p>
              </div>

              {
                data.map((value, index) => (
                  <div key={index} className='md:w-[90%] max-md:hidden w-full shadow-[0px_-1px_14px_0px_rgba(0,_0,_0,_0.1)] border-b-1 border-black/30 px-3 flex'>
                    <div className='md:w-[18%] w-[16%] flex justify-center items-center'>
                      <Image src={getNonFirstImage(value.images)} alt='productimage' width={100} height={100} className='w-16 h-16 md:w-20 md:h-20 rounded-sm' />
                    </div>
                    <div className='w-[38%] flex flex-col justify-center max-md:pl-3'>
                      <h1 className='md:text-[17px] text-[15px] text-black font-sans font-bold'>{value.name}</h1>
                      <p className='md:text-[14px] text-[12px] text-black font-sans font-semibold'>{value.category}</p>
                    </div>
                    <div className='w-[23%] md:w-[25%] flex justify-center items-center gap-3'>
                      <button onClick={() => updateQuantity(value.id, "inc")} className='bg-white text-black transition-transform active:scale-95 duration-100 rounded-full h-7 w-7 md:h-8 md:w-8 border-1 border-black/30 shadow-[0px_-1px_31px_1px_rgba(0,_0,_0,_0.1)]'>+</button>
                      <p className='text-black text-[16px]'>{value.quantity}</p>
                      {
                        value.quantity === 1 ?
                          <button className='bg-gray-200 text-black rounded-full transition-transform active:scale-95 duration-100 h-7 w-7 md:h-8 md:w-8 border-1 border-black/30 shadow-[0px_-1px_31px_1px_rgba(0,_0,_0,_0.1)]'>−</button>
                          :
                          <button onClick={() => updateQuantity(value.id, "dec")} className='bg-white text-black rounded-full transition-transform active:scale-95 duration-100 h-7 w-7 md:h-8 md:w-8 border-1 border-black/30 shadow-[0px_-1px_31px_1px_rgba(0,_0,_0,_0.1)]'>−</button>
                      } </div>
                    <div className='w-[23%] md:w-[21%] flex items-center max-md:gap-5 justify-end md:justify-around'>
                      <h1 className='text-[17px] font-sans font-semibold text-black'>{value.lastprize}</h1>
                      <MdDelete onClick={() => Deleteproduct(value._id)} className='transition-transform active:scale-95 duration-100 text-red-500 w-6 h-6' />
                    </div>
                  </div>
                ))
              }

              {
                data.map((value, index) => (
                  <div key={value._id + '-' + value.quantity} className='md:hidden w-full px-3 text-black shadow-[0px_-1px_14px_0px_rgba(0,_0,_0,_0.1)] mt-3 rounded-lg border-b-1 border-black/30 p-3 flex'>
                    <div className='flex justify-center items-center w-[25%]'>
                      <Image src={getNonFirstImage(value.images)} alt='product' width={100} height={100} className='w-full h-25 rounded-sm' />
                    </div>
                    <div className='flex flex-col pl-3 w-[70%]'>
                      <h1 className='text-[15px] text-black font-sans font-semibold'>{value.name}</h1>
                      <p className='text-[13px] text-black font-sans font-semibold'>{value.category}</p>
                      <p><span className='font-bold text-[14px] md:text-[16px] font-sans max-md:pr-1'>&#8377; {value.lastprize} </span>
                        <span className='line-through text-[12px]'>{value.firstprize ? value.firstprize : ''}</span>
                        <span className='pl-1 text-[13px] text-green-700/70 font-semibold'>{value.discount ? value.discount + '%off' : ''}</span></p>

                      <div className='flex justify-center items-center mt-2'>
                        <MdDelete onClick={() => Deleteproduct(value._id)} className='transition-transform active:scale-95 duration-100 text-red-500 text-[20px]' />
                        <div className='w-full flex justify-center items-center gap-3'>
                          <button onClick={() => updateQuantity(value.id, "inc")} className='bg-white transition-transform active:scale-95 duration-100 rounded-full h-6 w-6 border-1 border-black/30 shadow-[0px_-1px_31px_1px_rgba(0,_0,_0,_0.1)]'>+</button>
                          <p className='text-black text-[16px]'>{value.quantity}</p>
                          {
                            value.quantity === 1 ?
                              <button className='bg-gray-200 rounded-full transition-transform active:scale-95 duration-100 h-6 w-6 border-1 border-black/30 shadow-[0px_-1px_31px_1px_rgba(0,_0,_0,_0.1)]'>−</button>
                              :
                              <button onClick={() => updateQuantity(value.id, "dec")} className='bg-white rounded-full transition-transform active:scale-95 duration-100 h-6 w-6 border-1 border-black/30 shadow-[0px_-1px_31px_1px_rgba(0,_0,_0,_0.1)]'>−</button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }

              <div className='rounded-md w-[90%] md:w-[70%] gap-3 flex flex-col border-1 border-black/20 shadow-[0px_-1px_14px_0px_rgba(0,_0,_0,_0.1)] px-7 py-3 mt-4'>
                <div className='flex justify-between'>
                  <p className='font-sans font-semibold text-black/60 text-[17px]'>Subtotal:</p>
                  <p className='font-sans font-bold text-black text-[17px]'>₹ {grandtotal}.00</p>
                </div>
                <div className='flex justify-between border-b-1 border-black/30 pb-4'>
                  <p className='font-sans font-semibold text-black/60 text-[17px]'>Delivery:</p>
                  <p className='font-sans font-bold text-black text-[17px]'>₹ 100.00</p>
                </div>
                <div className='flex justify-between'>
                  <p className='font-sans font-semibold text-black text-[17px]'>Grand Total:</p>
                  <p className='font-sans font-bold text-black text-[17px]'>₹ {grandtotal + 100}.00</p>
                </div>
              </div>

            </div>
            <div className='w-full md:w-[50%] max-md:mt-6 pb-5'>
              <form onSubmit={Handlecheckout}>
                <div className='w-full border-b-1 border-black/30'>
                  <p className='text-[22px] text-black font-honeybabe font-extralight pb-3'>Personal information</p>
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                  <label className='pl-1 font-sans text-black font-semibold text-[16px]'>Full Name</label>
                  <input type='text' name='fullname' onChange={handleChange} value={formData.fullname}
                    placeholder='eg: john' className='rounded-lg text-black border-1 border-black/30 w-[90%] md:w-[70%] h-9 pl-3' required />
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                  <label className='pl-1 font-sans text-black font-semibold text-[16px]'>Email</label>
                  <input type='Email' name='email' onChange={handleChange} value={formData.email}
                    placeholder='Enter email here' className='rounded-lg text-black border-1 border-black/30 w-[90%] md:w-[70%] h-9 pl-3' required />
                  <p className='pl-2 font-sans font-semibold text-[13px] text-red-400'>NB:"Keep this email — you’ll need it to track your order."</p>
                </div>

                <div className='flex w-[90%] md:w-[70%] mt-4 gap-1'>
                  <div className='w-[50%] flex flex-col'>
                    <label className='pl-1 font-sans text-black font-semibold text-[16px]'>City</label>
                    <input type='text' name='city' onChange={handleChange} value={formData.city}
                      placeholder='Enter city name' className='rounded-lg text-black border-1 border-black/30 w-full h-9 pl-3' required />
                  </div>
                  <div className='w-[50%] flex flex-col'>
                    <label className='pl-1 font-sans text-black font-semibold text-[16px]'>Postal Code</label>
                    <input type='number' name='postalcode' onChange={handleChange} value={formData.postalcode}
                      placeholder='671121' className='rounded-lg border-1 text-black border-black/30 w-full h-9 pl-3' />
                  </div>
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                  <label className='pl-1 font-sans text-black font-semibold text-[16px]'>Adress</label>
                  <textarea type='Email' name='address' onChange={handleChange} value={formData.address}
                    placeholder='e.g., MG Road, Kochi, Kerala' className='rounded-lg text-black py-2 border-1 border-black/30 flex justify-center w-[90%] md:w-[70%] h-18 pl-3' required />
                </div>

                <div className='mt-4' >
                  <h1 className='text-[18px] font-semibold font-sans text-black'>Payment</h1>
                  <div className='border-1 border-black/40 rounded-md w-[90%] md:w-[70%]'>
                    <div className='w-full border-b-1 border-black/40 py-3 px-3'>
                      <input type="radio" id="COD" name="payment" value="COD" onChange={handleChange} checked={formData.payment === 'COD'} required />
                      <label className='pl-2 text-black' htmlFor="cod">Cash on Delivery</label><br />
                    </div>
                    <div className='w-full p-3'>
                      <input type="radio" id="OP" name="payment" value="OP" onChange={handleChange} checked={formData.payment === 'OP'} required />
                      <label className='pl-2 text-black' htmlFor="online-payment">Online Payment</label><br />
                    </div>
                  </div>
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                  <label className='pl-1 font-sans text-black font-semibold text-[16px]'>Phone Number</label>
                  <input type='tel' name='phonenumber' onChange={handleChange} value={formData.phonenumber}
                    placeholder='+91 1234567890' className='rounded-lg text-black border-1 border-black/30 w-[90%] md:w-[70%] h-9 pl-3' required />
                </div>

                {buttonspin ?
                  <button className='text-white relative group bg-blue-600 flex justify-center items-center z-999 rounded-3xl mt-4 w-[90%] md:w-[70%] h-10 text-[14px] tracking-wider' style={{ fontFamily: 'serif' }}>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  </button> :
                  <button className='mt-4 w-[90%] md:w-[70%] bg-blue-600 transition-transform active:scale-95 duration-100 hover:bg-blue-500 h-10 rounded-3xl text-white font-sans font-semibold flex justify-center items-center'>Place Order</button>
                }
              </form>
            </div>
          </div> :
          <div className='w-full px-3 max-md:mt-22 md:h-screen flex flex-col justify-center items-center'>
            <Image src='/all/cartempty.png' alt='cartempty' width={300} height={300} />
            <h1 className='text-[25px] text-black font-honeybabe font-extralight'>You're Cart is Empty</h1>
            <Link href='/' className='transition-transform active:scale-95 duration-100 rounded-md hover:bg-teal-500 bg-teal-400 py-2 px-9 text-white font-sans font-semibold mt-2'>Shop Now</Link>
          </div>
      }
    </div>
  )
}

export default Cartpage