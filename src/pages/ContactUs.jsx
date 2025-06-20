import React from 'react'
import NavBar from '../components/NavBar'

const ContactUs = () => {
  return (
    <div>
      <NavBar/>

            <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-20">
              <h3 className='text-5xl font-bold'>
                Testing Engineer
              </h3>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-xl mt-10'>Job Description</h3>
                  <p className='text-gray-500 mt-3'>Remote, India, 4 to 5 Years Of Experience Department: Website Design<br/>5 Positions Available.</p>

                </div>
                <div className='mr-28'>
                <h3 className='font-semibold text-xl mt-10'>Salary</h3>
                  <p className='text-gray-500 mt-3'>$30000 Per Annum</p>
                  </div>

              </div>
            </div>

            <div className="w-full bg-white mt-30">
  <div className="w-[1150px] mx-auto">
    <div className="bg-blue-100 pt-10 pb-10 px-10 rounded-2xl shadow-md ">
      <div className='flex flex-row gap-40'>
        <h3 className='text-amber-500 font-semibold text-xl'>Details</h3>
        <p className='text-gray-500'>Design & Create highly engaging industry-related content in both photo, gif & video format</p>
      </div>
      <div className='flex flex-row gap-40'>
        <h3 className=' font-semibold text-xl'>Requirements</h3>
        <p></p>
      </div>




      </div>
      </div>
    </div>
      
    </div>
  )
}

export default ContactUs
