import React from 'react'
import NavBar from '../components/NavBar'
import head from "../assets/images/Header Image1.png"
import Blogs from "../components/Blogs"
import Footer from '../components/Footer'


const Careers = () => {
  return (
    <div>
      <NavBar/>


      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-row items-center gap-16 mt-20">
              <div className='flex-1'>
                <h3 className='text-6xl font-bold mt-10 text-gray-800'>
                  We hired people<br/>who are very<br/>passionate about<br/>what they do
                </h3>
                <p className='text-lg font-normal text-gray-500 mt-5 leading-tight'>Through True Rich Attended does no end it his mother since<br/> real had half every him case in packages enquire we up<br/> ecstatic unsatiable saw.</p>
                <button className='mt-5 px-10 py-3 rounded-3xl text-white font-semibold bg-amber-500'>
                  View positions
                </button>
      
              </div>
              <div className='flex-1'>
                <img src={head} alt="" />
      
              </div>
              </div>


              <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-20">
                <h3 className='text-5xl mt-10 font-semibold'>
                  see our open positions
                </h3>
                <div className='flex flex-row gap-8'>
                  <div className='w-[350px] h-[180px] bg-blue-100 rounded-2xl p-10 mt-10'>
                    <h3 className='text-2xl font-semibold'>Full Stack Developer</h3>
                    <p className='text-gray-500 mt-2.5'>Bengaluru • Full time</p>
                    <p className='text-amber-500 mt-7'>Apply Now</p>

                  </div>
                  <div className='w-[350px] h-[180px] bg-blue-100 rounded-2xl p-10 mt-10'>
                    <h3 className='text-2xl font-semibold'>Testing Engineer</h3>
                    <p className='text-gray-500 mt-2.5'>Bengaluru • Full time</p>
                    <p className='text-amber-500 mt-7'>Apply Now</p>

                  </div>
                  <div className='w-[350px] h-[180px] bg-blue-100 rounded-2xl p-10 mt-10'>
                    <h3 className='text-2xl font-semibold'>Hr Manager+</h3>
                    <p className='text-gray-500 mt-2.5'>Mumbai • Full time</p>
                    <p className='text-amber-500 mt-7'>Apply Now</p>

                  </div>
                </div>
                <div className='flex flex-row gap-8'>
                  <div className='w-[350px] h-[180px] bg-blue-100 rounded-2xl p-10 mt-10'>
                    <h3 className='text-2xl font-semibold'>Full Stack Developer</h3>
                    <p className='text-gray-500 mt-2.5'>Bengaluru • Full time</p>
                    <p className='text-amber-500 mt-7'>Apply Now</p>
                  </div>
                  <div className='w-[350px] h-[180px] bg-blue-100 rounded-2xl p-10 mt-10'>
                    <h3 className='text-2xl font-semibold'>Testing Engineer</h3>
                    <p className='text-gray-500 mt-2.5'>Bengaluru • Full time</p>
                    <p className='text-amber-500 mt-7'>Apply Now</p>

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

export default Careers
