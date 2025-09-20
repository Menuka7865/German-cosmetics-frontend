import React from 'react'
import HeaderMenu from '../Componant/computer/HeaderMenu'
import PinkNavigation from '../Componant/computer/PinkNavigation'
import CosmeticFooter from '../Componant/computer/CosmeticFooter'
import { Clock, Mail, MapPin, Phone} from 'lucide-react'

export default function Page() {
  return (
    <>
    <div>
      <HeaderMenu />
      <PinkNavigation />
      
      {/* Contact us header */}
      <div className='text-black bg-[#F5F0FC] text-center font-medium text-2xl md:text-3xl py-4 md:py-6'>Contact Us</div>
      
      {/* Contact details - Mobile: Vertical stack, Desktop: Grid */}
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8 max-w-6xl mx-auto'>
        
        {/* Address */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-3 p-4 bg-[#F5F0FC] rounded-lg md:bg-transparent'>
          <div className='bg-white md:bg-[#F5F0FC] p-3 rounded-full border-2 border-pink-600 flex-shrink-0'>
            <MapPin className='h-6 w-6 text-pink-600' />
          </div>
          <div className='text-black text-sm text-center md:text-left md:py-3'>
            451/C, Colombo Road, Negombo, Sri Lanka
          </div>
        </div>

        {/* Phone */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-3 p-4 bg-[#F5F0FC] rounded-lg md:bg-transparent'>
          <div className='bg-white md:bg-[#F5F0FC] p-3 rounded-full border-2 border-pink-600 flex-shrink-0'>
            <Phone className='h-6 w-6 text-pink-600' />
          </div>
          <div className='text-black text-sm text-center md:text-left md:py-3'>
            <div className='font-medium mb-1'>Call us :</div>
            <div>076 394 2823</div>
          </div>
        </div>

        {/* Email */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-3 p-4 bg-[#F5F0FC] rounded-lg md:bg-transparent'>
          <div className='bg-white md:bg-[#F5F0FC] p-3 rounded-full border-2 border-pink-600 flex-shrink-0'>
            <Mail className='h-6 w-6 text-pink-600' />
          </div>
          <div className='text-black text-sm text-center md:text-left md:py-3'>
            <div className='font-medium mb-1'>Mail us :</div>
            <div className='break-all'>germancosmeticparma@outlook.de</div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-3 p-4 bg-[#F5F0FC] rounded-lg md:bg-transparent'>
          <div className='bg-white md:bg-[#F5F0FC] p-3 rounded-full border-2 border-pink-600 flex-shrink-0'>
            <Clock className='h-6 w-6 text-pink-600' />
          </div>
          <div className='text-black text-sm text-center md:text-left md:py-3'>
            <div className='font-medium mb-1'>Open time :</div>
            <div>08:30AM – 07:30PM</div>
          </div>
        </div>
      </div>

      {/* Map & Message section */}
      <div className='flex flex-col lg:flex-row gap-6 p-4 md:p-6 max-w-7xl mx-auto'>
        
        {/* Map Section */}
        <div className='w-full lg:w-1/2'>
          {/* <div className='bg-[#F5F0FC] p-4 rounded-lg mb-4'>
            <h3 className='text-black font-medium text-lg mb-2 flex items-center gap-2'>
              <MapPin className='h-5 w-5 text-pink-600' />
              451 Colombo Rd
            </h3>
            <button className='text-pink-600 text-sm hover:underline'>View larger map</button>
          </div> */}
          
          <div className='w-full h-64 md:h-80 lg:h-[650px] rounded-lg overflow-hidden shadow-lg'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506729.95103871496!2d79.93292!3d7.145908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fab056fa54a7%3A0x77f3040940af529b!2s451%20Colombo%20Rd%2C%20Yagodamulla%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1756977617893!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              loading="lazy"
              className='border-0'>
            </iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='w-full lg:w-1/2'>
          <div className='bg-[#F5F5F5] p-6 rounded-lg shadow-sm'>
            <div className='text-black'>
              <h2 className='text-black font-medium text-xl md:text-2xl lg:text-3xl mb-2'>Get In Touch With Us</h2>
              <p className='text-gray-500 text-sm md:text-base font-light mb-6'>
                If you wish to directly reach us, Please fill out the form below -
              </p>
              
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium mb-2'>Your name</label>
                  <input 
                    type="text" 
                    className='w-full border-2 border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:border-pink-600 transition-colors'
                    placeholder=''
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium mb-2'>Your email</label>
                  <input 
                    type="email" 
                    className='w-full border-2 border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:border-pink-600 transition-colors'
                    placeholder=''
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium mb-2'>Subject</label>
                  <input 
                    type="text" 
                    className='w-full border-2 border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:border-pink-600 transition-colors'
                    placeholder=''
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium mb-2'>Your message (optional)</label>
                  <textarea 
                    rows={4}
                    className='w-full border-2 border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:border-pink-600 transition-colors resize-vertical'
                    placeholder=''
                  />
                </div>
                
                <div className='flex justify-center pt-4'>
                  <button 
                    type="button"
                    className='bg-pink-600 text-white px-8 py-3 rounded-full shadow hover:bg-pink-700 transition-colors font-medium'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CosmeticFooter />
    </div>
    </>
  )
}