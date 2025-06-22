import React from 'react'
import NavBar from '../components/NavBar'
import map from "../assets/images/Map.png"
import Footer from '../components/Footer'






const ContactUs = () => {
  return (
    <div>
      <NavBar/>

      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto gap-16 mt-20">
        <div className='flex flex-row justify-between'>
          <div className=''>
            <h3 className='text-5xl font-semibold'>Have a question? Let's<br/>get in touch with us.</h3>
            <p className='text-gray-500 mt-10 text-xl'>Fill up the form and our team will get back within 24 hrs</p>
            </div>
            <div>
              <h3 className='font-semibold text-2xl'>Location</h3>
              <p className='text-gray-500 mt-3 text-xl'>DLF Cybercity, Bhubaneswar,<br/>India,&52050</p>
            </div>
            <div>
              <h3 className='font-semibold text-2xl'>Contact Us</h3>
              <p className='text-gray-500 mt-3 text-xl'>020 7993 2905<br/>hi@finsweet.com</p>
            </div>
            
            
        </div>
        <div className='flex flex-row gap-10 mt-20'>
        <div className='flex-1 '>
          <input type="text" placeholder='First Name' className='bg-gray-200 rounded-4xl w-full p-4 mb-4'/>
          <input type="text" placeholder='Last Name' className='bg-gray-200 rounded-4xl w-full p-4 mb-4'/>
          <input type="text" placeholder='Email address' className='bg-gray-200 rounded-4xl w-full p-4 mb-4'/>
          
     
      <textarea placeholder="Type message" className="bg-gray-200 w-full rounded-3xl h-[112px] p-4 resize-none"/>
      <button className='mt-5 px-10 py-3 rounded-3xl text-white font-semibold bg-amber-500'>Submit</button>
    

        </div>
        <div className='flex-1'>
          <img src={map} alt="" />

        </div>
        </div>

      </div>


      <div className='mt-20'>
        <Footer />
      </div>






      
    </div>
  )
}

export default ContactUs
