import React from 'react'
import NavBar from '../components/NavBar'
import first from "../assets/images/first-section.png/"

const AboutUs = () => {
  return (
    <div>
      <NavBar/>

      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-15">
        <div className='flex-1'>
          <h3 className='text-6xl font-semibold mt-10'>
            We value human,<br/>organizational, and<br/>operational<br/>intelligence, not just<br/> artificial
          </h3>
          <p className='text-2xl font-extralight mt-5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aliquam leo odio, sagittis quis ornare quis.</p>
          <button className='mt-5 px-10 py-3 rounded-3xl text-white font-semibold bg-amber-500'>
            Work With Us
          </button>

        </div>
        <div className='flex-1'>
          <img src={first} alt="" />

        </div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col gap-16 mt-20">
          <div className= 'flex flex-row justify-between text-sm'>
          <h3 className='text-4xl font-semibold'>
            The energy of a start-up<br/>combined with 30 years of<br/>experience
          </h3>
          <p className='text-2xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit<br/> amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo<br/> suscipit tellus et pellentesque.</p>
        </div>
        </div>
      
    </div>
  )
}

export default AboutUs
