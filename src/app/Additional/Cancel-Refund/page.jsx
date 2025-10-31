import Navbar from '@/app/Pages/Navbar/page'
import React from 'react'

function Cancelrefund() {
    return (
        <div className='min-h-screen bg-white'>
            <Navbar />

            <div className="fixed max-md:top-2/5 top-2/5 lg:top-2/5 lg:left-0 w-30 md:w-62 h-25 md:h-52 bg-gradient-to-b from-[#ffc97387] to-green-200 rounded-full blur-2xl md:blur-3xl"></div>
            <div className="fixed top-2/5 lg:top-2/9 max-md:hidden lg:right-0 md:w-62 md:h-52 bg-gradient-to-b from-[#ffc9735e] to-green-200/70 rounded-full blur-2xl md:blur-3xl"></div>

            <div className='flex w-full justify-center items-center'>
                <div className='mt-27 flex flex-col justify-center items-start max-md:px-3 max-w-5xl pt-3'>
                    <h1 className='text-black font-honeybabe tracking-wide text-[25px] md:text-[32px]'>Cancellation & Refund</h1>
                    <p className='pt-2 z-999'>MUHAMMED SAHAL KE believes in helping its customers as far as possible, and has therefore a
                         liberal cancellation policy. Under this policy: Cancellations will be considered only if the request is made 
                         within 1-2 days of placing the order. However, the cancellation request may not be entertained if the orders 
                         have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                          MUHAMMED SAHAL KE does not accept cancellation requests for perishable items like flowers, eatables etc.
                           However, refund/replacement can be made if the customer establishes that the quality of product delivered
                            is not good. In case of receipt of damaged or defective items please report the same to our Customer Service
                             team. The request will, however, be entertained once the merchant has checked and determined the same at his
                              own end. This should be reported within 1-2 days of receipt of the products. In case you feel that the 
                              product received is not as shown on the site or as per your expectations, you must bring it to the notice
                               of our customer service within 1-2 days of receiving the product. The Customer Service Team after looking 
                               into your complaint will take an appropriate decision. In case of complaints regarding products that come 
                               with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by 
                               the MUHAMMED SAHAL KE, it’ll take 1-2 days for the refund to be processed to the end customer.</p>
                </div>
            </div>
        </div>
    )
}

export default Cancelrefund