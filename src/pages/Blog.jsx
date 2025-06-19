import React from 'react'
import NavBar from '../components/NavBar'
import blogheader from "../assets/images/blog header.png"

const Blog = () => {
  return (
    <div>
      <NavBar/>


      <div className='bg-blue-200 h-screen w-full pt-10 mt-7'>
        
    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">

      <div className="flex-1">
        <img src={blogheader} alt="" />
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Blog
