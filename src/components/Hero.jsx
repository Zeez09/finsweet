import React from 'react'
import hero from '../data/hero'



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
              <h3 className="text-2xl font-semibold mb-2">{hero.title}</h3>
              <div className="text-gray-400 mb-4">{hero.description.split('. ').map ((line, i) => (
                <p key={i} className='text-gray-400'> {line}</p>
              ) 
              
              )}
              </div>


              <a
                href={hero.linkURL}
                className="inline-block text-amber-600  font-semibold"
              >
                {hero.linkText}
              </a>
            </div>
          ))}
      
    </div>
  )
}

export default Hero
