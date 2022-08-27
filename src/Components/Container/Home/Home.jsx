import React from 'react'
import './Home.css'
import Navbar from "../../Navbar/Navbar"
import Feature from './Feature'
import Map from './Map'
import Faculty from './Faculty'
import Footer from '../../Container/Footer/Footer'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='home'>
    <Navbar></Navbar>
    <Link to='/registration'>
    <div className="home__notice">
    <p className='home__notice--heading'>Free Registration -</p>
      <p className='home__notice--content'>Register for three days demo class.</p>
    </div>
    </Link>
    <div className="home__featureAndMap">
      <Feature></Feature>
      <div id="map">
      <Map></Map>
      </div>
    </div>
    <div className="home__classes">
      <h1>Classes</h1>
      <p>UPPSC, RO/ARO, TET, SUPER TET, PET, UPP</p>
    </div>
    <div className="home__faculty">
    <Faculty></Faculty>
    </div>
    <div className="home__footer">
      <Footer></Footer>
    </div>
    
    </div>
  )
}

export default Home
