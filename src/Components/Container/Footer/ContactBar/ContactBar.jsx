import React from 'react'
import './ContactBar.css'

const ContactBar = () => {
  return (
    <div className='contactBar'>
      <div className="contactBar__email">
        <h2 className="contactBar__email--heading">
            Email :
        </h2>
        <h2 className="contactBar__email--details">
            xyz@gmail.com
        </h2>
      </div>
      <div className="contactBar__phone">
      <h2 className="contactBar__phone--heading">
            Phone No. :
        </h2>
        <h2 className="contactBar__phone--details">
            +918299807983, +917997327556
        </h2>
      </div>
    </div>
  )
}

export default ContactBar
