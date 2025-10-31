import Footer from '@/app/Pages/Footer/page'
import Navbar from '@/app/Pages/Navbar/page'
import React from 'react'

function Shippingpolicy() {
  return (
    <div className='text-black bg-white'>
        <Navbar />
        <div className="fixed max-md:top-2/5 top-2/5 lg:top-2/5 lg:left-0 w-30 md:w-62 h-25 md:h-52 bg-gradient-to-b from-[#ffc97387] to-green-200 rounded-full blur-2xl md:blur-3xl"></div>
            <div className="fixed top-2/5 lg:top-2/9 max-md:hidden lg:right-0 md:w-62 md:h-52 bg-gradient-to-b from-[#ffc9735e] to-green-200/70 rounded-full blur-2xl md:blur-3xl"></div>

            <div className='flex w-full justify-center items-center'>
                <div className='mt-27 flex flex-col justify-center items-start max-md:px-3 max-w-5xl pt-3'>
                    <h1 className='text-black font-honeybabe tracking-wide text-[25px] md:text-[32px]'>Shipping & Return</h1>
                    <p className='pt-4 z-999 font-semibold'>1.Shipping and Delivery:</p>

                    <p className='pt-4 z-999'>1.1. Shipping: We aim to ship orders within the estimated time frames specified on our website. However, delivery times may vary based on factors beyond our control. Normally orders are shipped within 0-7 days or as per the delivery date agreed upon at the time of order confirmation, with delivery of the shipment subject to Courier Company/post office norms.</p>
                    <p className='pt-4 z-999'>1.2 Delivery: For domestic orders typically arrive within 1-15 working days or as per the delivery date agreed upon at the time of order confirmation. International delivery times vary but typically range from 5-20 working days, depending on the courier service and destination country.</p>
                    <p className='pt-4 z-999'>1.3 THE WOW KIDS is not liable for any delay in delivery by the courier company/postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment, or as per the delivery date agreed upon at the time of order confirmation.</p>
                    <p className='pt-4 z-999'>1.4. Shipping Address: Delivery of all orders will be made to the address provided by the buyer. Delivery of our services will be confirmed via your specified mobile number or WhatsApp during registration. Buyer responsible for providing the correct shipping address. THE WOW KIDS is not responsible for items delivered to incorrect addresses provided by the customer.</p>
                    <p className='pt-4 z-999'>1.5. Courier Service: For international buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only.</p>
                    <p className='pt-4 z-999'>1.6 Delivery Charge: Delivery charge depends on the courier service and selected product; it will be displayed on the checkout screen.</p>
                    
                    <p className='pt-6 z-999 font-semibold'>2.Return and Refunds :</p>

                    <p className='pt-4 z-999'>2.1. Returns: We strive to ensure the quality of our products. If you receive a damaged or incorrect item, please contact us within 3 days of receiving your order. Please note that since we provide personalised products, there will be no cancellation option available for orders unless the product is damaged or incorrect.</p>
                    <p className='pt-4 pb-8 z-999'>2.2. Refunds: Refunds are granted at the discretion of THE WOW KIDS. We offer replacements or refunds for items returned in accordance with our return policy. In the event of a damaged or incorrect product, as per our policy, we strive to fulfill the order by providing a replacement. If a replacement cannot be provided, we commit to issuing a refund within 7 working days.</p>
                    

                    </div>
                    </div>
        <Footer />
    </div>
  )
}

export default Shippingpolicy