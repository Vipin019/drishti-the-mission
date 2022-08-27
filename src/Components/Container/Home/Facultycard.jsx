import React from 'react'
import './FacultyCard.css'

const Facultycard = (props) => {
  return (
    <div className='facultyCard'>
      <div className="facultyCard__image">
        <img src={props.image} alt={"Err... "+props.name} />
      </div>
      <div className="facultyCard__name">
        <p>{props.name}</p>
      </div>
      <div className="facultyCard__details">
        <small>{props.details}</small>
      </div>
    </div>
  )
}

export default Facultycard
