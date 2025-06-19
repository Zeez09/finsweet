import React from 'react'
import NavBar from '../components/NavBar'
import career1 from "../assets/images/career1.png"
import feature1 from "../assets/images/Feature 1 Image.png"
import feature2 from "../assets/images/Feature 2 Image.png"
import feature3 from "../assets/images/Feature 3 Image.png"
import feature4 from "../assets/images/featue 4 image.png"
import feature5 from "../assets/images/feature 5 image.png"
import witch from "../assets/images/e8cfb696d1af4e76a8b71332d18bb7b27737ca22.png"
import image2 from "../assets/images/image2.png"
import circle from "../assets/images/Circle.png"
import play from "../assets/images/play.png"
import Blog from "../components/Blogs"
import Footer from '../components/Footer'



const Services = () => {
  return (
    <div>

      <NavBar/>

      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-15">
        <div className='flex-1'>
          <h3 className='text-6xl font-bold mt-10 text-gray-800'>WE serve clients<br/> with ground<br/>breaking solutions</h3>
          <p className='text-lg font-normal text-gray-500 mt-5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aliquam leo odio, sagittis quis ornare quis.</p>
          <button className='mt-5 px-10 py-3 rounded-3xl text-white font-semibold bg-amber-500'>
            Work With Us
          </button>
          </div>

          <div className='flex-1'>
            <img src={career1} alt="" />

          </div>

      </div>


      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-30">
        <div className='flex-1'>
          <img src={feature1} alt="" />
          </div>
          <div className='flex-1'>
            <h3 className='font-bold text-5xl'>Business strategy</h3>
              <p className='text-lg font-normal text-gray-500 mt-5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aliquam leo odio, sagittis quis ornare quis.met, consectetur<br/> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>

              <ul className='list-disc text-gray-500 mt-5 leading-loose ml-4'>
                <li>cost strategy</li>
                <li>Differentiated product or service strategy</li>
                <li>Focus on a niche strategy</li>
              </ul>
          </div>
        </div>


        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-30">
        <div className='flex-1'>
          <h3 className='font-bold text-5xl'>Digitalization</h3>
          <p className='text-lg font-normal text-gray-500 mt-5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br/> leo odio, sagittis quis ornare quis.met, consectetur adipiscing<br/>elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum<br/> dolor sit amet, consectetur adipiscing elit. Aliquam leo odio,<br/> sagittis.</p>
          </div>
          <div className='flex-1'>
            <img src={feature2} alt="" />
            </div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-30">
        <div className='flex-1'>
          <img src={feature3} alt="" />
          </div>
          <div className='flex-1'>
            <h3 className='font-bold text-5xl'>Risk assessment</h3>
              <p className='text-lg font-normal text-gray-500 mt-5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aliquam leo odio, sagittis quis ornare quis.met, consectetur<br/> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>

              <ul className='list-disc text-gray-500 mt-5 leading-loose ml-4'>
                <li>Individual risk assessment</li>
                <li>Systems risk assessment</li>
                <li>Mathematical conceptualization </li>
              </ul>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-30">
        <div className='flex-1'>
          <h3 className='font-bold text-5xl'>Artificial intelligence</h3>
          <p className='text-lg font-normal text-gray-500 mt-5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br/> leo odio, sagittis quis ornare quis.met, consectetur adipiscing<br/>elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum<br/> dolor sit amet, consectetur adipiscing elit. Aliquam leo odio,<br/> sagittis.</p>
          </div>
          <div className='flex-1'>
            <img src={feature4} alt="" />
            </div>
        </div>
        
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-30">
          <div className='flex-1'>
            <img src={feature5} alt="" />
          </div>
          <div className='flex-1'>
            <h3 className='font-bold text-5xl'>Smart contracts</h3>
              <p className='text-lg font-normal text-gray-500 mt-5 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aliquam leo odio, sagittis quis ornare quis.met, consectetur<br/> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>

              <ul className='list-disc text-gray-500 mt-5 leading-loose ml-4'>
                <li>Smart contract implementation</li>
                <li>Smart legal contracts</li>
                <li>Basic contract law</li>
              </ul>
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
                  <h3 className='text-black font-bold'>Chikelu Neo</h3>
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
          <Blog />

        </div>


    </div>
    </div>


    <div>
      <Footer/>

    </div>




















































      
    </div>
  )
}

export default Services


