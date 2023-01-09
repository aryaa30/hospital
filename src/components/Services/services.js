import React from 'react'
import "./services.css"
import Shape1 from "../../assets/Shape1.png"
import Shape2 from "../../assets/Shape2.png"
import Shape3 from "../../assets/Shape3.png"
import Shape4 from "../../assets/Shape4.png"
const services = () => {
  return (
    <div className='service__margin'>
      <div className='head'>Our Services</div>
      <div className='desc'>
        <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.
          </p></div>
   <div className='shape__box'>
    <div className='shape shape1'>
      <img src={Shape1}/> <br />
      <p className='s1'>Dental Care</p>
    </div>
    <div className='shape shape2'>
      <img src={Shape2}/><br />
      <p className='s2'>Pulmonary</p> 
      <div className='s2__text'>LEARN MORE</div>
      </div>
    <div className='shape shape3'>
      <img src={Shape3}/><br />
      <p className='s3'>Neurological</p>
      </div>
    <div className='shape shape4'>
      <img src={Shape4}/><br />
      <p className='s4'>Prediatrics</p>
   </div>
    </div>
    </div>
  )
}
export default services