import React from 'react'
import './Faculty.css'
import Facultycard from './Facultycard'
import ImageRajendra from '../../ImagesAndIcons/Rajendra.png'
import ImageAlok from '../../ImagesAndIcons/Alok.png'
import ImageKshitindra from '../../ImagesAndIcons/Kshitindra.png'
// import Image from '../../ImagesAndIcons/Rajendra.png'
// import Image from '../../ImagesAndIcons/Rajendra.png'

const Faculty = () => {
  return (
    <div className='faculty'>
      <div className="faculty__heding">
        <h1>Our Faculty</h1>
      </div>
        <div className="faculty__card">
        <div className="faculty__card--upper">
        <Facultycard image={ImageRajendra} name="Rajendra Verma" details="Ex. Sub. Inspector"></Facultycard>
        <Facultycard image={ImageAlok} name="Aalok Shukla" details="M.A., M.Sc., B.Ed"></Facultycard>
        <Facultycard image={ImageKshitindra} name="Kshitindra Singh" details="M.Sc., B.Ed"></Facultycard>
        </div>
        <div className="faculty__card--lower">
        <Facultycard image={Image} name="S. K. Yadav" details="M.Sc., B.Ed"></Facultycard>
        <Facultycard image={Image} name="Santosh Pal" details="M.A., B.Ed"></Facultycard>
        </div>
        </div>
      
    </div>
  )
}

export default Faculty
