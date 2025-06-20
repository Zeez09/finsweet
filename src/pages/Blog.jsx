import React from 'react'
import NavBar from '../components/NavBar'
import blogheader from "../assets/images/blog header.png"
import bhi from "../assets/images/blog Header Image.png"
import Blogs1 from '../components/Blogs1'
import AllPost from '../components/AllPost'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'





const Blog = () => {
  return (
    <div>
      <NavBar/>


      <div className='bg-blue-100 h-[650px] w-full pt-10 mt-7 '>
        
    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      
        <div className="flex items-center gap-4 text-sm font-normal text-gray-500 mt-5">
          <img src={blogheader} alt="" />
          <p>Andrew Jonson</p>
          <p>Posted on 27th January 2021</p>
          </div>

           <div className=" flex flex-row gap-10 items-center">
            <div className=" flex-1 flex flex-col justify-center mb-20">
          <h3 className='text-6xl font-bold text-gray-800'>Our internal<br/>process and<br/> longterm vision</h3>
          <p className='text-lg font-normal text-gray-500 mt-5 leading-tight'>It is a long established fact that a reader will be distracted by<br/> the readable content of a page when looking at its layout. The<br/> Maker is a decentralized. We aim to attain the</p>
          <div className='flex flex-row gap-2 mt-5'>
            <Link to="/blog-inner"><p className="text-amber-500 cursor-pointer group transition-all duration-300 inline-flex items-center gap-1 ">
              Read More
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span></p>
            </Link>
          </div>
          </div> 

     

      
        
        
            
            
        
        <div className='flex-1 flex justify-end'>
        <img src={bhi} alt="" className='mb-10'/>

      </div>
      </div>
      </div>
      </div>
      
      
      
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-20">
        <h3 className='text-5xl mt-10 font-semibold'>All Posts</h3>

        <div className='mt-15'>
          <Blogs1/>
          </div>

          <div className='mt-10'>
          <AllPost/>

        </div>



      </div>



      <div className='mt-20'>
      <Footer/>

    </div>




      
    </div>
  )
}

export default Blog
