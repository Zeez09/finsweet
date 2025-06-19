import React from 'react'
import blogs from '../data/blogs'
import arrow from "../assets/images/icons8-arrow-right-24.png"




const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {blogs.map((blogs, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={blogs.image}
                alt={blogs.title}
                className="w-[400px] h-[241px] object-cover"
              />
              <div className='p-6'>
                <h3 className="text-2xl font-semibold mb-2">{blogs.title}</h3>
                <div className="text-gray-400 mb-4">{blogs.description.split('. ').map ((line, i) => (
                <p key={i} className='text-gray-400'> {line}</p>
              ))}
              </div>
              
              <a
                href={blogs.linkURL}
                className="inline-flex items-center gap-2 text-amber-600  font-semibold"
              >
                {blogs.linkText} 
                <img src={arrow} alt="" />
              </a>
            </div>
            </div>
          ))}
      
    </div>
  )
}

export default Blogs;
