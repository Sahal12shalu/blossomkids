import Footer from '@/app/Pages/Footer/page'
import Navbar from '@/app/Pages/Navbar/page'
import React from 'react'

function Terms() {
    return (
        <div>
            <Navbar />
            <div className="fixed max-md:top-2/5 top-2/5 lg:top-2/5 lg:left-0 w-30 md:w-62 h-25 md:h-52 bg-gradient-to-b from-[#ffc97387] to-green-200 rounded-full blur-2xl md:blur-3xl"></div>
            <div className="fixed top-2/5 lg:top-2/9 max-md:hidden lg:right-0 md:w-62 md:h-52 bg-gradient-to-b from-[#ffc9735e] to-green-200/70 rounded-full blur-2xl md:blur-3xl"></div>

            <div className='flex w-full justify-center items-center'>
                <div className='mt-27 flex flex-col justify-center items-start max-md:px-3 max-w-5xl pt-3'>
                    <h1 className='text-black font-honeybabe tracking-wide text-[25px] md:text-[32px]'>Terms & Conditions</h1>
                    <p className='pt-2 z-999'>Welcome to the Blossomkids, operated by the Blossomkids. Please carefully review these Terms and Conditions before utilising our website and services. By accessing or using our website and placing an order, you signify your acceptance and agreement to abide by these Terms and Conditions</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-2'>Acceptance of Terms</h1>
                    <p className='pt-2 z-999'>By accessing our website or placing an order with the Blossom kid, you acknowledge and agree to comply with these Terms and Conditions. If you do not agree with these terms, please refrain from using our website or services.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Personalised Products</h1>
                    <p className='pt-2 z-999'>The Blossom kids specialises in offering personalised products for children, including but not limited to personalised storybooks, name labels, and luggage tags. We endeavour to craft high-quality, customised items based on the information provided by the customer.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Ordering and Payment</h1>
                    <p className='pt-2 z-999'>3.1. Orders: When placing an order with the Blossom kids, you undertake to provide accurate and complete information. We reserve the right to decline or cancel orders at our discretion. 3.2. Payment: Orders can be paid for using the payment methods provided on our website. All payments are securely processed. By placing an order, you agree to pay all applicable fees, taxes, and shipping costs associated with your order.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Intellectual Property</h1>
                    <p className='pt-2 z-999'>All content on the the Blossom kids website, including logos, designs, and product images, is the exclusive property of the Blossom kids and is safeguarded by intellectual property laws. You may not utilise or reproduce our content without explicit permission.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Privacy Policy</h1>
                    <p className='pt-2 z-999'>Please review our Privacy Policy to comprehend how we collect, utilise, and safeguard your personal information.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Changes to Terms and Conditions</h1>
                    <p className='pt-2 pb-8 text-center z-999'>The Blossomkids reserves the right to amend, modify, or alter these Terms and Conditions at any time. Such changes will become effective upon being posted on our website.</p>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Terms