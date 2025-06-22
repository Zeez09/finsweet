import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Application = () => {
  return (
    <div>
      <NavBar/>

            <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-20">
              <h3 className='text-7xl font-bold'>
                Testing Engineer
              </h3>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-2xl mt-10'>Job Description</h3>
                  <p className='text-gray-500 mt-3 text-xl'>Remote, India, 4 to 5 Years Of Experience Department: Website Design<br/>5 Positions Available.</p>

                </div>
                <div className='mr-28'>
                <h3 className='font-semibold text-2xl mt-10'>Salary</h3>
                  <p className='text-gray-500 mt-3 text-xl'>$30000 Per Annum</p>
                  </div>

              </div>
            </div>
            <div className="w-full bg-white mt-15">
              <div className="w-[1150px] mx-auto">
                <div className="bg-blue-100 pt-10 pb-10 px-10 rounded-2xl shadow-md ">
                  <div className='flex flex-row gap-43'>
                    <h3 className='text-amber-500 font-semibold text-2xl'>Details</h3>
                    <p className='text-gray-500 text-xl'>Design & Create highly engaging industry-related content in both photo, gif & video format<br/>Publish Posts on various social media channels</p>
                    </div>
                    <div className='flex flex-row gap-24 mt-10'>
                      <h3 className=' font-semibold text-2xl'>Requirements</h3>
                      <p className='text-gray-500 text-xl'>Promote content on social networks and monitor engagements (e.g. comments and shares)<br/>Research industry-related topics<br/>Editing audio and sound design on projects </p>
                      </div>
                      <div className='flex flex-row gap-20 mt-10'>
                        <h3 className=' font-semibold text-2xl'>Responsibilities</h3>
                        <p className='text-gray-500 text-xl'>Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter,<br/>Pinterest, Instagram, Tiktok and Youtube, adapting content to suit different channels</p>
                        </div>
        




      </div>
      </div>
    </div>

    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-20">
      <h3 className='text-5xl font-bold'>Apply Now</h3>

      <div className='flex flex-row gap-10 mt-10'>
        <input type="text" placeholder='First Name' className='bg-gray-200 rounded-4xl w-full p-4'/>
        <input type="text" placeholder='Last Name' className='bg-gray-200 rounded-4xl w-full p-4'/>
      </div>
      <div className='flex flex-row gap-10 mt-10'>
        <input type="text" placeholder='Email Id' className='bg-gray-200 rounded-4xl w-full p-4'/>
        <input type="text" placeholder='Mobile no. ' className='bg-gray-200 rounded-4xl w-full p-4'/>
      </div>
      <textarea placeholder="Why do you think you are a good fit for Ether?" className="bg-gray-200 w-full mt-10 rounded-3xl h-[200px] p-4 resize-none"/>
      <button className='mt-5 px-10 py-3 rounded-3xl text-white font-semibold bg-amber-500'>Submit</button>
    </div>

    <div className='mt-20'>
      <Footer/>
    </div>



      
    </div>
  )
}

export default Application
