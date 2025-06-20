import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Careers from './pages/Careers';
import Services from "./pages/Services";
import Blog from './pages/Blog';
import BlogInner from "./pages/BlogInner";
import ContactUs from "./pages/ContactUs";


const App = () => {
  return (
    


      <Router>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path ="/about-us" element = {<AboutUs />}></Route>
          <Route path ="/careers" element = {<Careers />}></Route>
          <Route path ="/services" element = {<Services />}></Route>
          <Route path ="/blog" element = {<Blog />}></Route>
          <Route path ="/blog-inner" element = {<BlogInner />}></Route>
          <Route path ="/contact-us" element = {<ContactUs />}></Route>
        </Routes>
      </Router>
      
    
  )
}

export default App
