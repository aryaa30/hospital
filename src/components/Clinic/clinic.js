import React from 'react'
import "./clinic.css"
import ambulance from '../../assets/ambulance.png'
import doctor1 from '../../assets/doctor-woman.png'
import doctor2 from '../../assets/doctor-woman2.png'
const clinic = () => {
  return (
    <div className='clinic'>
      <div className='text'>
        <p className='cl__heading'> Clinic With Innovative</p>
        <p className='cl__desc'>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help. 
        </p>
        <button type='button' className='lm_btn'>Learn More</button>
      </div>

<div className='side'>
<div className='woman1'><img src={doctor1}></img><p className='p1'>Qualified Doctors</p></div>
<div className='woman2'><img src={doctor2}></img><p className='p2'>Emergency Care</p></div>
<div className='ambulance'><img src={ambulance}></img><p className='p3'>24 Hours Service</p></div>
</div> 
</div>
  )
}

export default clinic
