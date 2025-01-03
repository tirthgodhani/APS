import React from 'react'
import Home from './Home'
import Blog from './Blog'
import ContactUs from './ContactUs'
import Healthcare from './Healthcare'
import Feature from './Feature'
import Technologies from './Technologies'
import Services from './Services'

function Homepage() {
  return (
    <div>
       <div id="home" className="section"><Home /></div>
      <Healthcare />
      <Feature />
      <div id="technologies" className="section"><Technologies /></div>
      <Services />
      <div id="blog" className="section"><Blog /></div>
      <div id="contactus" className="section"><ContactUs /></div>
    </div>
  )
}

export default Homepage
