import React from 'react'
import './Footer.css'
import Addressbar from './Addressbar/Addressbar'
import ContactBar from './ContactBar/ContactBar'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__addressbar">
      <Addressbar></Addressbar>
    </div>
    <div className="footer__contactbar">
        <ContactBar></ContactBar>
    </div>
    </div>
  )
}

export default Footer
