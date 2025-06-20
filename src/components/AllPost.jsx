import React from 'react'
import allpost from '../data/allpost'
import arrow from "../assets/images/icons8-arrow-right-24.png"



const AllPost = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {allpost.map((allpost, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md bg-blue-100"
            >
              <img
                src={allpost.image}
                alt={allpost.title}
                className="w-[400px] h-[241px] object-cover"
              />
              <div className='p-6'>
                <h3 className="text-2xl font-semibold mb-2">{allpost.title}</h3>
                <div className="text-gray-400 mb-4">{allpost.description.split('. ').map ((line, i) => (
                <p key={i} className='text-gray-400'> {line}</p>
              ))}
              </div>
              
              <a
                href={allpost.linkURL}
                className="inline-flex items-center gap-2 text-amber-600  font-semibold"
              >
                {allpost.linkText} 
                <img src={arrow} alt="" />
              </a>
            </div>
            </div>
          ))}
      
    </div>
  )
}
  
    

export default AllPost




  


