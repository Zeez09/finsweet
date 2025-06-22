import React from 'react'
import { Link } from "react-router-dom"




const navLinks = [
  { label: "About Us", path: "/about-us"},
  { label: "Careers", path: "/careers"},
  { label: "Services", path: "/services"},
  { label: "Blog", path: "/blog"},
  { label: "Contact Us", path: "/contact-us"},
  ];

const NavBar = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-6">

        <nav className='flex items-center justify-between text-black'>
          
            <div>
            <Link to='/home'><h3 className='font-bold'>Finsweet</h3></Link>
          </div>

          <div className="flex items-center gap-6">

<ul className="flex gap-6 text-sm font-bold">

            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-black cursor-pointer capitalize">
                <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
              </ul>


          



          <button className='bg-rose-50 px-4 py-2 rounded-3xl font-bold text-orange-400'>clone project</button>
                    </div>




        </nav>
      
    </div>
  )
}

export default NavBar
