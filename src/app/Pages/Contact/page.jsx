'use client'
import React, { useRef, useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { GiBreakingChain } from "react-icons/gi";
import emailjs from '@emailjs/browser';
import { MdOutlineDone } from "react-icons/md";
import { TbXboxX } from "react-icons/tb";

function Connectus() {

    const form = useRef();
    const [buttonspin, Setbuttonspin] = useState(false)
    const [Successpopup, SetSuccesspopup] = useState(false)
    const [Errorpopup, SetErrorpopup] = useState(false)

    const sendEmail = (e) => {
        Setbuttonspin(true)
        e.preventDefault();
        emailjs
            .sendForm('service_0x6w4kg', 'template_evminmh', form.current, {
                publicKey: 'ezPUe2CKtQIPwATKU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    Setbuttonspin(false)
                    SetSuccesspopup(true)
                    setTimeout(()=>(
                        SetSuccesspopup(false)
                    ),3000)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Setbuttonspin(false)
                    SetErrorpopup(true)
                    setTimeout(()=>(
                        SetErrorpopup(false)
                    ),3000)
                },
            );
    };

    return (
        <div className='w-full bg-white/70 pt-10' id='Contact'>
            <div className='flex justify-center items-center'>
                <div className="text-[#6e4b1f] font-semibold font-mainfont text-[18px] tracking-widest md:text-[26px] border-b-1 border-black/40">Connect with us</div>
            </div>
            <div className='flex flex-col justify-center items-center mt-4 '>
                <h1 className='text-3xl md:text-5xl text-black mx-10'>Let's <span className='text-3xl md:text-5xl font-bold font-sans tracking-normal text-amber-700/70'>Collaborate</span></h1>
                <p className='text-black/60 pt-2 mx-7 text-center'>We're here to answer your questions about our formulations and hear your feedback</p>
            </div>

            <div className='md:flex justify-center items-center mt-7 md:mt-15 pb-10 md:pb-20'>
                <div className='md:w-[50%] flex flex-col gap-6 justify-center md:justify-end items-center md:items-end md:pr-5 pt-3 '>
                    <div className='bg-white shadow-[0px_4px_25px_1px_rgba(0,_0,_0,_0.1)] z-99 rounded-xl py-7 md:px-5 w-[90%] md:w-[70%] flex'>
                        <div className='md:w-[20%] w-[30%] pt-1 flex justify-center'>
                            <div className='w-9 h-9 rounded-full flex justify-center items-center bg-gray-200'>
                                <MdOutlineMail className='w-5 h-5 text-blue-800/70' />
                            </div>
                        </div>
                        <div className='md:w-[80%] w-[70%] flex flex-col gap-3 text-black'>
                            <h1 className='font-semibold text-[20px] font-sans'>Email Us</h1>
                            <p className='text-black/70'>For general inquries</p>
                            <p className='text-blue-800/70'>sahalshalu806@gmail.com</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-[0px_4px_25px_1px_rgba(0,_0,_0,_0.1)] z-99 rounded-xl py-7 md:px-5 w-[90%] md:w-[70%] flex'>
                        <div className='md:w-[20%] w-[30%] pt-1 flex justify-center'>
                            <div className='w-9 h-9 rounded-full flex justify-center items-center bg-gray-200'>
                                <IoCallSharp className='w-5 h-5 text-red-800/70' />
                            </div>
                        </div>
                        <div className='md:w-[80%] w-[70%] flex flex-col gap-3 text-black'>
                            <h1 className='font-semibold text-[20px] font-sans'>Call Us</h1>
                            <p className='text-black/70'>Monday - Saturday,<br className='md:hidden' /> 9:00 AM - 9:00 PM</p>
                            <p className='text-red-800/70'>+91 9633802786</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-[0px_4px_25px_1px_rgba(0,_0,_0,_0.1)] z-99 rounded-xl py-7 md:px-5 w-[90%] md:w-[70%] flex'>
                        <div className='md:w-[20%] w-[30%] pt-1 flex justify-center'>
                            <div className='w-9 h-9 rounded-full flex justify-center items-center bg-gray-200'>
                                <GiBreakingChain className='w-5 h-5 text-green-800/70' />
                            </div>
                        </div>
                        <div className='md:w-[80%] w-[70%] flex flex-col gap-3 text-black'>
                            <h1 className='font-semibold text-[20px] font-sans'>Meet the Founders</h1>
                            <p className='text-black/70'>Connect us</p>
                            <p className='text-green-800/70'>+91 9633802786</p>
                        </div>
                    </div>
                </div>

                <div className='md:w-[50%] w-full max-md:mt-5 '>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='md:w-[70%] max-md:mx-5 md:ml-5 z-99 relative rounded-2xl shadow-[0px_4px_25px_1px_rgba(0,_0,_0,_0.1)] bg-white pl-9 md:pl-14 pr-5 max-md:pt-7 py-5'>
                            <h1 className='text-[22px] font-extralight'>Send Us a <span className='font-semibold text-[#6e4b1f]'> message </span></h1>
                            <div className='flex flex-col pt-5'>
                                <label className='text-black/70 text-[15px]'>Your Name</label>
                                <input type='text' name="name" className='rounded-xl border-1 border-[#593c19] w-[90%] md:w-[85%] h-10 pl-3' placeholder='Enter Your Name..' />
                            </div>

                            <div className='flex flex-col pt-7'>
                                <label className='text-black/70 text-[15px]'>Email Address</label>
                                <input type='email' name="email" className='rounded-xl border-1 border-[#593c19] w-[90%] md:w-[85%] h-10 pl-3' placeholder='1234@gmail.com' />
                            </div>

                            <div className='flex flex-col pt-7'>
                                <label className='text-black/70 text-[15px]'>Subject</label>
                                <input type='text' name="subject" className='rounded-xl border-1 border-[#593c19] w-[90%] md:w-[85%] h-10 pl-3' placeholder='Subject..' />
                            </div>

                            <div className='flex flex-col pt-7'>
                                <label className='text-black/70 text-[15px]'>Message</label>
                                <input type='text' name="message" className='rounded-xl border-1 border-[#593c19] w-[90%] md:w-[85%] h-15 pl-3' placeholder='Tell us About your inquiry..' />
                            </div>

                            {
                                buttonspin ?
                                    <button className='text-white transition-transform active:scale-95 duration-100 relative group mb-8 bg-black hover:bg-black/80 flex justify-center items-center z-999 rounded-3xl w-[85%] text-[14px] h-10 mt-8 tracking-wider'>
                                        <div className='w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                    </button>
                                    :
                                    <button type='submit' className='bg-black hover:bg-black/80 rounded-3xl w-[85%] h-10 text-white mt-8 font-semibold mb-8'>Submit</button>
                            }
                            {
                                Successpopup ?
                            <h1 className='absolute bottom-3 px-10 max-md:w-[80%] w-[60%] rounded-2xl py-1 bg-teal-600 font-sans font-semibold text-[14px] flex justify-center
                            transition-opacity duration-500 ease-in-out opacity-100 items-center gap-2 text-white'><MdOutlineDone className='w-4 h-4'/> Message send success</h1>
                             : '' }
                             {
                                Errorpopup ?
                            <h1 className='absolute bottom-3 px-10 max-md:w-[80%] w-[60%] rounded-2xl py-1 bg-red-600 font-sans font-semibold text-[14px] flex justify-center
                            transition-opacity duration-500 ease-in-out opacity-100 items-center gap-2 text-white'><TbXboxX className='w-4 h-4'/> Message Not send</h1>
                             : '' }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Connectus