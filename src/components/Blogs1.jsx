import React from 'react'
import blogs1 from '../data/blogs1'
import arrow from "../assets/images/icons8-arrow-right-24.png"




const Blogs1 = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {blogs1.map((blogs1, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md bg-blue-100"
            >
              <img
                src={blogs1.image}
                alt={blogs1.title}
                className="w-[400px] h-[241px] object-cover"
              />
              <div className='p-6'>
                <h3 className="text-2xl font-semibold mb-2">{blogs1.title}</h3>
                <div className="text-gray-400 mb-4">{blogs1.description.split('. ').map ((line, i) => (
                <p key={i} className='text-gray-400'> {line}</p>
              ))}
              </div>
              
              <a
                href={blogs1.linkURL}
                className="inline-flex items-center gap-2 text-amber-600  font-semibold"
              >
                {blogs1.linkText} 
                <img src={arrow} alt="" />
              </a>
            </div>
            </div>
          ))}
      
    </div>
  )
}

export default Blogs1;
