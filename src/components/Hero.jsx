import React from 'react'
import hero from '../data/hero'
import arrow from "../assets/images/icons8-arrow-right-24.png"




const Hero = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {hero.map((hero, index) => (
            <div
              key={index}
              className="rounded-2xl p-6"
            >
              <img
                src={hero.image}
                alt={hero.title}
                className="w-[400px] h-[241px] object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-bold mb-2">{hero.title}</h3>
              <div className="text-gray-400 mb-4">{hero.description.split('. ').map ((line, i) => (
                <p key={i} className='text-gray-400'> {line}</p>
              ) 
              
              )}
              </div>


              <a
                href={hero.linkURL}
                className="inline-flex items-center gap-2 text-amber-600  font-semibold"
              >
                {hero.linkText} 
                <img src={arrow} alt="" />
              </a>
            </div>
          ))}
      
    </div>
  )
}

export default Hero
