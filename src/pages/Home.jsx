import React from 'react'
import NavBar from '../components/NavBar'
import logo2 from "../assets/images/Logo (2).svg"
import logo1 from "../assets/images/Logo (1).svg"
import logo from "../assets/images/Logo.svg"
import hero from "../assets/images/aafd339d1834d9e71b4ccb2fe6ff32efd99491a7 (1).png"



const Home = () => {
  return (

<div className="w-full">
  
  <div className="lg:px-8 mb-7 ">
    
      <NavBar />
  </div>

    
    

  <div className='bg-blue-200 min-h-screen w-full pt-7'>
    <div className="lg:px-8 max-w-7xl mx-auto flex items-center gap-8">


      <div className='flex-1'>
        <h3 className='text-7xl font-semibold text-black mt-20 leading-tight '>
        Prosper with Our<br/>bespoke solutions
      </h3>
      <p className='text-2xl font-medium mt-2.5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
      Suspendisse varius enim in eros elementum tristique</p>
    
    <div className='flex flex-row mt-8 gap-6 text-2xl'>
      <button className='bg-amber-600 px-10 py-3 rounded-4xl text-white'>See Our Services</button>
      <button>See All Services</button>

      
    </div>

    <p className='mt-20 text-black text-lg'>worked with 100+ companies</p>

    <div className='flex flex-row gap-6'>
        <img src={logo2} alt="" />
        <img src={logo1} alt="" />
        <img src={logo} alt="" />
        </div>
        
      </div>

      <div className='flex-1'>
        <img src={hero} alt="" className="w-full h-auto object-cover mt-8" />
      </div>
      </div>
  
      </div>



      <div className="mt-12 max-w-7xl mx-auto">
        <h2 className='text-5xl font-semibold leading-[48px]'>
          We help more than 1500<br/>companies from all sectors
        </h2>
        <p className='font-medium text-lg leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros<br/>
        blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et<br/>
        pellentesque.</p>
      </div>
    
  

    </div>
  )
}

export default Home
