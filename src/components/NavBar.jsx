import React from 'react'
import { Link } from "react-router-dom"




const navLinks = [
  { label: "About Us", path: "/About Us"},
  { label: "Careers", path: "/Careers"},
  { label: "Services", path: "/Services"},
  { label: "Blog", path: "/Blog"},
  { label: "Contact Us", path: "/Contact Us"},
  ];

const NavBar = () => {
  return (
    <>
      <div className='pt-7 w-full'>
        <nav className='flex items-center justify-between text-black max-w-7xl mx-auto'>
          
            <div>
            <h3 className='font-bold'>Finsweet</h3>
          </div>

          <div className="flex items-center gap-6">

          <ul className=" gap-6 text-sm text-black flex flex-row justify-center font-bold">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-black cursor-pointer capitalize">
                <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
              </ul>


          



          <button className='bg-rose-200 px-4 py-2 rounded-md font-bold'>clone project</button>
                    </div>




        </nav>
      </div>
    </>
  )
}

export default NavBar
