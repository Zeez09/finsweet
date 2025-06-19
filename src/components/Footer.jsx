import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-blue-950 w-full pb-10 pt-16 h-[450px]'>
      

      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row justify-between">
        <div className='flex flex-col'>

      
      <h3 className='font-bold text-2xl text-white'>
        Finsweet
      </h3>
      <h3 className='mt-10 text-4xl font-bold text-white'>
        Bespoke software<br/>solutions
      </h3>
      <div className='flex gap-4 mt-6'>
        <FaFacebookF className="text-white w-8 h-8" />
          <FaYoutube className="text-white w-8 h-8" />
          <FaInstagram className="text-white w-8 h-8" />
          <FaTwitter className="text-white w-8 h-8" />
      </div>
      
    
    </div>
    <div>
      <h3 className='text-white text-lg font-semibold'>Company</h3>

      <ul className='text-white font-medium text-base mt-8 leading-[2.5rem] '>
        <li>About Us</li>
        <li>Careers</li>
        <li>Services</li>
        <li>Blog</li>
      </ul>
    </div>
    <div>
      <h3 className='text-white text-lg font-semibold'>Connect</h3>

      <ul className='text-white font-medium text-base mt-8 leading-[2.5rem] '>
        <li>hi@finsweet.com</li>
        <li>+(123) 456-7890</li>
      </ul>

    </div>

    <div>
      <h3 className='text-white text-lg font-semibold'>Join Newsletter</h3>
      <input type='text' className='px-10 py-3 rounded-4xl bg-amber-50 w-64 mt-10' placeholder='Type email here' />
      <div>
        <button className='mt-3 bg-amber-500 rounded-3xl px-8 py-3 text-white font-semibold'>subscribe</button>
      </div>
      
    </div>
    
      </div>
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row justify-between mt-20">
      <p className='text-white '>© All rights reserved – Finsweet</p>
      <div className='flex flex-row justify-between text-white gap-6'>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>

    </div>


    </footer>
  )
}

export default Footer
