import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
      <div className="navbar__name">
        <h1><h1 id='navbar__name--firstName'>दृष्टि</h1><h2 id='navbar__name--lastName'>द मिशन</h2></h1>
      </div>
      </Link>
      <div className="navbar__home">
      <Link to="/"><button>Home</button></Link>
      </div>
      <div className="navbar__about">
      <Link to="/about"><button>About Us</button></Link>
      </div>
      <div className="navbar__contact">
      <Link to="/contact"><button>Contact Us</button></Link>
      </div>
      <div className="navbar__registration">
      <div className="navbar__registration--button"></div>
      <Link to="/registration"><button>Register Now</button></Link>
      </div>
    </div>
  )
}

export default Navbar
