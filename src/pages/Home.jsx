import React from 'react'
import NavBar from '../components/NavBar'
import logo2 from "../assets/images/Logo (2).svg"
import logo1 from "../assets/images/Logo (1).svg"
import logo from "../assets/images/Logo.svg"
import hero1 from "../assets/images/home img.png"
import Hero from '../components/Hero'
import Hero2 from '../components/hero2'
import smiley from "../assets/images/image.png"
import arrow from "../assets/images/icons8-arrow-right-24.png"
import image from "../assets/images/image..png"
import coffee from "../assets/images/2f58b1ab4704035ad09b7f0130d045eb1774a16e.png"
import witch from "../assets/images/e8cfb696d1af4e76a8b71332d18bb7b27737ca22.png"
import image2 from "../assets/images/image2.png"
import circle from "../assets/images/Circle.png"
import play from "../assets/images/play.png"
import Blogs from "../components/Blogs"
import Footer from '../components/Footer'


const Home = () => {
  return (

<div className="w-full bg-white">
  

    
      <NavBar />
  

    
    

  <div className='bg-blue-200 h-[650px] w-full pt-7'>
    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch h-full">

      <div className='flex-1'>
        <h3 className='text-6xl font-bold text-black mt-20 leading-tight '>
        Prosper with Our<br/>bespoke solutions
      </h3>
      <p className='text-lg text-gray-500 mt-2.5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
      Suspendisse varius enim in eros elementum tristique</p>
    
    <div className='flex flex-row mt-8 gap-6'>
      <button className='bg-amber-600 px-8 py-3 rounded-4xl text-white'>See Our Services</button>
      <button>See All Services</button>

      
    </div>

    <p className='mt-20 text-lg text-gray-400'>worked with 100+ companies</p>

    <div className='flex flex-row gap-6 mt-5'>
        <img src={logo2} alt="" />
        <img src={logo1} alt="" />
        <img src={logo} alt="" />
        </div>
        
      </div>

      <div className='flex-1 flex items-end'>
        <img src={hero1} alt="" className="w-full h-[600px] object-cover" />
      </div>
      </div>
  
      </div>



      <div className="mt-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className='text-5xl font-bold leading-[48px] mb-4'>
          We help more than 1500<br/>companies from all sectors
        </h2>
        <p className='text-gray-500 mt-10 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros<br/>
        blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et<br/>
        pellentesque.</p>

        <div className='mt-10'>
          <Hero/>

        </div>
      </div>


      <div className='bg-blue-200 h-[665px] w-full mt-10'>
        
    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className='flex flex-row items-start gap-5 mt-10 pt-20' >
        

      <h1 className='text-4xl font-semibold '>We are building software solution<br/> that solves your business<br/> challenges</h1>
      <h2 className='text-gray-500 text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur<br/> sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo<br/> suscipit tellus et pellentesque.</h2>
      
      </div>

      <div className='mt-10 justify-between'>
          <Hero2/>

        </div>
      </div>
      </div>


<div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-20">
        <div className='flex-1'>
          <h3 className='text-5xl font-semibold leading-[48px] mt-15'>The energy of a start-up<br/>combined with 30 years<br/>of experience</h3>
                <p className='text-gray-500 text-xl leading-[30px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Curabitur sit amet eros blandit, hendrerit elit et, mattis<br/> purus. Vivamus commodo suscipit tellus et<br/> pellentesque.</p>
                <div className='flex flex-row justify-between'>
                  <div>
                    <h3 className='text-amber-500 font-extrabold text-5xl mt-10'>15+</h3>
                    <h1 className='font-semibold text-3xl mt-2.5'>Awards received</h1>
                    <p className='text-gray-500 text-lg mt-2.5'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscin. Curabitur<br/>sit amet eros elit et.</p>
                  </div>
                  <div>
                    <h3 className='text-amber-500 font-extrabold text-5xl mt-10'>500+</h3>
                    <h1 className='font-semibold text-3xl mt-2.5'>Clients served</h1>
                    <p className='text-gray-500 text-lg mt-2.5'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscin. Curabitur<br/>sit amet eros elit et.</p>
                  </div>
                </div>

        </div>
        <div className='flex-1'>

          <img src={smiley} alt="" className='rounded-2xl object-contain w-full'/>
        </div>
        
              
                  
                

      </div>


<div className="w-full bg-white mt-30">
  <div className="w-[1150px] mx-auto">
    <div className="bg-blue-100 pt-10 pb-10 px-10 rounded-2xl shadow-md flex flex-col lg:flex-row items-center gap-10">


    <div className='flex-1'>
<div className="flex gap-4 flex-nowrap w-[580px]">
      <button className='bg-amber-100 rounded-3xl border border-gray-300 px-5 py-3 text-amber-500'>Business Strategy</button>
      <button className='rounded-3xl border border-gray-400 px-5 py-3'>Digitalization</button>
      <button className='border border-gray-400 rounded-3xl px-5 py-3 '>Risk Assessment</button>

    </div>
    
    <h2 className="text-5xl font-bold mt-20">Helping clients with<br/> research and strategy<br/>for their business </h2>
    <p className="text-lg text-gray-500 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
    Curabitur sit amet eros blandit, hendrerit elit et, mattis<br/> purus. Vivamus commodo suscipit tellus et<br/> pellentesque.</p> 
    <p className='text-lg text-gray-500 mt-5'>Mattis purus. Vivamus commodo suscipit tellus et<br/> pellent. Curabitur sit amet eros blan esque. </p>

<a href="#" className="text-amber-500 flex items-center gap-2 mt-6 text-lg w-fit">
        See all Services
        <img src={arrow} alt="arrow" className="w-5 h-5" />
      </a>


</div>
<div className='flex-1 ml-10'>
  <img src={image} alt="" className='mt-30'/>

</div>
</div>


</div>
</div>


<div className=' h-[665px] w-full pt-25 flex flex-row'>
  <div className='flex-1'>
    <img src={coffee} alt="" />
  </div>
  <div className='bg-amber-500 flex-1 p-30 h-[486px]'>
    <h3 className='text-white text-5xl font-semibold'> Energy of a start-up<br/>combined with 30<br/> years of experience.</h3>
    <button className='text-amber-500 rounded-3xl px-5 py-3 text-sm bg-amber-50 mt-20'>
      See Job Vacancies
    </button>

  </div>
  

</div>


<div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-20">
  <div className='flex-1'>
    <h3 className='text-5xl font-semibold mt-5'>Finsweet Was A Dream<br/>To work with</h3>
    <p className='mt-5 text-gray-500 text-xl'>Maecenas efficitur scelerisque lorem, et varius lacus<br/> tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis<br/> vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
    <div className='flex flex-row gap-5 mt-5'>
      <div className=''>
        <img src={witch} alt="" className='w-12 h-12 rounded-full object-cover' />
      </div>
      <div>
        <h3 className='text-black font-semibold text-2xl'>Chikelu Neo</h3>
        <p className='text-amber-500 text-sm'>CEO at MazeAI</p>
      </div>
    </div>
</div>


<div className='flex-1 relative w-fit'>
  <img src={image2} alt="" />


  <div className="absolute bottom-4 left-4 p-5 flex items-center gap-2">
    <div className="relative w-12 h-12">
    <img src={circle} alt="" className="w-full h-full"/>
    <img src={play} alt="" className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
</div>
<span className="text-white font-medium text-lg">Play Video</span>

</div>
</div>
</div>


<div className='bg-blue-200 h-screen w-full pt-10 mt-30'>
        
    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">

      <h3 className='text-5xl font-bold mt-18'>Latest Blog & News</h3>

      <div className='mt-10'>
          <Blogs />

        </div>


    </div>
    </div>


    <div>
      <Footer/>

    </div>
  

    </div>

  )
}

export default Home
