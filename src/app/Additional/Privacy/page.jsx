import Footer from '@/app/Pages/Footer/page'
import Navbar from '@/app/Pages/Navbar/page'
import React from 'react'

function Privacy() {
    return (
        <div>
            <Navbar />

            <div className="fixed max-md:top-2/5 top-2/5 lg:top-2/5 lg:left-0 w-30 md:w-62 h-25 md:h-52 bg-gradient-to-b from-[#ffc97387] to-green-200 rounded-full blur-2xl md:blur-3xl"></div>
            <div className="fixed top-2/5 lg:top-2/9 max-md:hidden lg:right-0 md:w-62 md:h-52 bg-gradient-to-b from-[#ffc9735e] to-green-200/70 rounded-full blur-2xl md:blur-3xl"></div>

            <div className='flex w-full justify-center items-center'>
                <div className='mt-27 flex flex-col justify-center items-start max-md:px-3 max-w-5xl pt-3'>
                    <h1 className='text-black font-honeybabe tracking-wide text-[25px] md:text-[32px]'>Privacy & Policy</h1>
                    <p className='pt-2 z-999'>The Blossomkids is dedicated to safeguarding the privacy of our customers, particularly children under the age of 18, and their personal information. This Privacy Policy elucidates how we gather, utilize, and safeguard your data in accordance with Indian law.</p>

                    <h1 className='text-black font-sans font-bold tracking-wide text-[20px] pt-4'>Information We Collect:</h1>
                    <p className='pt-2 z-999'>Personal Information: We may collect personal data from you, such as names, email addresses,
                        and phone numbers, when you engage with our services. Children's Information: We may gather and process images of
                        below 18 years of age. We strive to ensure that we have obtained consent from parents or guardians before
                        such data. If you are a parent or guardian and suspect that your child's information has been collected without your
                        consent, please promptly contact us. Third-Party Applications: We may handle customer data in third-party applications
                        for operational purposes. These third-party applications are governed by their respective privacy policies.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Use of Information:</h1>
                    <p className='pt-2 z-999'>We utilise your personal information to deliver personalised products and services. Children's data is processed only with the consent of their parents or guardians. We may also utilise anonymized and aggregated data for internal research and analysis to enhance our products and services.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Data Security:</h1>
                    <p className='pt-2 z-999'>We uphold reasonable security measures to safeguard your personal information from unauthorised access, disclosure, alteration, and destruction.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Data Sharing:</h1>
                    <p className='pt-2 z-999'>We do not sell, rent, or trade your personal information with third parties. However, we may share your information with third parties that provide services on our behalf.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Your Rights:</h1>
                    <p className='pt-2 z-999'>You have the right to access, rectify, or delete your personal information. Parents or guardians have the right to review and request the deletion of their children's information.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Cookies:</h1>
                    <p className='pt-2 z-999'>We utilise cookies on our website to enhance your browsing experience. You can manage or disable cookies in your browser settings.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Changes to Privacy Policy:</h1>
                    <p className='pt-2 z-999'>We may revise this Privacy Policy periodically. You will be notified of significant changes.</p>

                    <h1 className='text-black z-999 font-sans font-bold tracking-wide text-[20px] pt-4'>Contact Information:</h1>
                    <p className='pt-2 z-999 pb-9'>If you have any inquiries or concerns regarding this Privacy Policy or your personal information, please reach out to us at sahalshalu806@gmail.com. By utilising Theblossomkid’s services, you agree to the terms outlined in this Privacy Policy.</p>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy