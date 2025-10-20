import React from 'react'
import NavBar from '../components/NavBar'
import first from "../assets/images/Header Image.png"
import about from "../assets/images/about.png"
import about1 from "../assets/images/about 1.png"
import about2 from "../assets/images/about 2.png"
import about3 from "../assets/images/about 3.png"
import about4 from "../assets/images/about 4.png"
import name from "../assets/images/Name.png"
import witch from "../assets/images/e8cfb696d1af4e76a8b71332d18bb7b27737ca22.png"
import image2 from "../assets/images/Image2.png"
import circle from "../assets/images/Circle.png"
import play from "../assets/images/play.png"
import Blogs from "../components/Blogs"
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
      <NavBar/>

      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row justify-between gap-10 mt-15">
        <div className='flex-1'>
          <h3 className='text-6xl font-semibold mt-10 text-gray-800'>
            We value human,<br/>organizational, and<br/>operational<br/>intelligence, not just<br/> artificial
          </h3>
          <p className='text-xl font-normal text-gray-500 mt-5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aliquam leo odio, sagittis quis ornare quis.</p>
          <button className='mt-5 px-10 py-3 rounded-3xl text-white font-semibold bg-amber-500'>
            Work With Us
          </button>

        </div>
        <div className='flex-1'>
          <img src={first} alt="" className='w-full h-auto object-contain'/>

        </div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col gap-16 mt-22">
          <div className= 'flex flex-row justify-between text-sm'>
          <h3 className='text-4xl font-semibold'>
            The energy of a start-up<br/>combined with 30 years of<br/>experience
          </h3>
          <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit<br/> amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo<br/> suscipit tellus et pellentesque.</p>
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <h3 className='text-amber-500 font-extrabold text-4xl mt-10'>15+</h3>
          <h1 className='font-semibold text-2xl mt-2.5'>Awards received</h1>
          <p className='text-xl text-gray-500 mt-2.5'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscin. Curabitur<br/>sit amet eros elit et.</p>

          </div>
          <div>
            <h3 className='text-amber-500 font-extrabold text-4xl mt-10'>500+</h3>
                    <h1 className='font-semibold text-2xl mt-2.5'>Clients served</h1>
                    <p className='text-xl text-gray-500 mt-2.5'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscin. Curabitur<br/>sit amet eros elit et.</p>
          </div>
          <div>
            <h3 className='text-amber-500 font-extrabold text-4xl mt-10'>34</h3>
                    <h1 className='font-semibold text-2xl mt-2.5'>Employees</h1>
                    <p className='text-xl text-gray-500 mt-2.5'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscin. Curabitur<br/>sit amet eros elit et.</p>
          </div>
          <div>
            <h3 className='text-amber-500 font-extrabold text-4xl mt-10'>130+</h3>
                    <h1 className='font-semibold text-2xl mt-2.5'>Custom Solutions</h1>
                    <p className='text-xl text-gray-500 mt-2.5'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscin. Curabitur<br/>sit amet eros elit et.</p>
          </div>
          
          </div>
          

        </div>
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-20">
        <div className='flex-1'>
          <h3 className='font-semibold text-4xl'>We want to get local<br/>identification in every<br/>corner of the world in this<br/>era of global citizenship</h3>
          <p className='text-gray-500 text-xl mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Curabitur sit amet eros blandit, hendrerit elit et, mattis<br/>purus. Vivamus commodo suscipit tellus et<br/> pellentesque.
          </p>
          </div>
          <div className='flex-1'>
            <img src={about} alt="" />
            </div>

        </div>


        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto  gap-16 mt-20">
          <h3 className='text-5xl font-semibold'>Team work is the only<br/> way we work</h3>
          <p className='text-gray-500 text-xl  mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet <br/> blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et<br/> pellentesque.</p>
          <div className='flex flex-row gap-8 mt-10'>
            <img src={about1} alt="" className="w-[300px] h-[500px] object-contain"/>
            <img src={about2} alt="" className="w-[300px] h-[500px] object-contain"/>
            <img src={about3} alt="" className="w-[300px] h-[500px] object-contain"/>
            <div className='relative w-[300px] h-[500px]'>
              
            <img src={about4} alt="" className='w-full h-full object-cover rounded-2xl' />
            
            
            <img src={name} alt="" className='absolute bottom-0 left-0 w-full h-[150px] object-cover rounded-2xl opacity-90'/>
            
            </div>
          </div>


        </div>


        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-20">
          <div className='flex-1'>
            <h3 className='text-5xl font-semibold mt-5'>Finsweet Was A Dream<br/>To work with</h3>
            <p className='mt-5'>Maecenas efficitur scelerisque lorem, et varius lacus<br/> tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis<br/> vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
            <div className='flex flex-row gap-5 mt-5'>
              <div className=''>
                <img src={witch} alt="" className='w-12 h-12 rounded-full object-cover' />
              </div>
              <div>
                <h3 className='text-black font-semibold'>Chikelu Neo</h3>
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

      <h3 className='text-5xl font-semibold mt-18'>Latest Blog & News</h3>

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

export default AboutUs
