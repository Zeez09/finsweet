import React from 'react'
import NavBar from '../components/NavBar'
import inner from "../assets/images/Image blog inner.png"
import jonson from "../assets/images/blog header.png"
import Footer from '../components/Footer'



const BlogInner = () => {
  return (
    <div>
      <NavBar/>

      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-20">
        <img src={inner} alt="" />

        <div className="pt-12 px-6 md:px-16 lg:px-32">
          <div className="flex items-start gap-4 text-sm font-normal text-gray-500 mb-8">
            <img src={jonson} alt="" />
            
            <p>Andrew Jonson</p>
            <p>Posted on 27th January 2021</p>
            
            </div>
            
            <div className="mb-10">
        <h3 className='text-7xl font-bold'>
          Breaking the code How<br/>did we build our Figma<br/> plugin
        </h3>
        <p className='text-gray-500 mt-10 text-xl'>
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure<br/>
          about how to get the right word. To crack the code for the UX copies, we at Zeta Design<br/>
          wanted to build a Figma plugin for the larger design community. The plugin is called the<br/>
          Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone<br/>
          variation ranging from plain, casual to playful. The intention to build this Figma plugin<br/>
          originated from our Medium blog post, ‘Designing voice and tone for error messages.
        </p>

        <p className='text-gray-500 mt-7 text-xl'>
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure<br/>
          about how to get the right word. To crack the code for the UX copies, we at Zeta Design<br/>
          wanted to build a Figma plugin for the larger design community. The plugin is called the<br/>
          Ghost UXWriter and has a set of UX copies cataloged.
        </p>
        
        <p className='text-gray-500 mt-7 text-xl'>
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure<br/>
          about how to get the right word. To crack the code for the UX copies, we at Zeta Design<br/>
          wanted to build a Figma plugin for the larger design community. The plugin is called the<br/>
          Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone<br/>
          variation ranging from plain, casual to playful. The intention to build this figma plugin<br/>
          originated from our Medium blog post, Designing voice.
        </p>

        <h3 className='text-5xl font-bold mt-12'>Transform Your Idea Into Reality<br/> with Ether a Leading Digital<br/> Agency</h3>
        <p className='text-gray-500 mt-10 text-xl'>
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure<br/>
          about how to get the right word. To crack the code for the UX copies, we at Zeta Design<br/>
          wanted to build a Figma plugin for the larger design community. The plugin is called the<br/>
          Ghost UXWriter and has a set of UX copies cataloged.
        </p>
        <p className='text-gray-500 mt-7 text-xl'>
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure<br/>
          about how to get the right word. To crack the code for the UX copies, we at Zeta Design<br/>
          wanted to build a Figma plugin for the larger design community. The plugin is called the<br/>
          Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone<br/>
          variation ranging from plain, casual to playful. The intention to build this figma plugin<br/>
          originated from our Medium blog post, Designing voice.
        </p>

      </div>
      </div>
      </div>

      <div className='mt-20'>
      <Footer/>

    </div>


    </div>
  )
}

export default BlogInner
