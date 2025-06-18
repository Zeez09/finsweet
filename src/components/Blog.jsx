import React from 'react'
import blog from '../data/blog'
import arrow from "../assets/images/icons8-arrow-right-24.png"




const Blog = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {blog.map((blog, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[400px] h-[241px] object-cover"
              />
              <div className='p-6'>
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <div className="text-gray-400 mb-4">{blog.description.split('. ').map ((line, i) => (
                <p key={i} className='text-gray-400'> {line}</p>
              ))}
              </div>
              
              <a
                href={blog.linkURL}
                className="inline-flex items-center gap-2 text-amber-600  font-semibold"
              >
                {blog.linkText} 
                <img src={arrow} alt="" />
              </a>
            </div>
            </div>
          ))}
      
    </div>
  )
}

export default Blog;
