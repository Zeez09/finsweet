import React from 'react'
import hero2 from '../data/hero2'

const Hero2 = () => {
  return (
        <div className="grid grid-cols-3 justify-between">



          {hero2.map((hero2, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-12 w-[350px] h-[277px]">
              <img
                src={hero2.image}
                alt={hero2.title}
                className="w-[36px] h-[36px]"
              />
              <h3 className="text-2xl font-semibold pt-3">{hero2.title}</h3>
              <p className="text-gray-400 pt-3">{hero2.description}</p>

              
              
            </div>
          ))}
        

      
    </div>
  )
}

export default Hero2
