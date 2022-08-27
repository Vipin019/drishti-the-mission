import React from 'react'
import './About.css'
import Navbar from "../../Navbar/Navbar"
import Footer from '../Footer/Footer'
import CommingSoon from '../../CommingSoon/CommingSoon'

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="about">
        <CommingSoon></CommingSoon>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
