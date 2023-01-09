import React from "react";
import './heading.css'
const heading = () => {
  return (
    <div className="heading">
      <div className="text__btn">
        <div className="text_gap">
<div className="text1">
<p>Welcome to MediCare+ Clinic</p>
</div>
<div className="text2">
<p>Best Specialists</p>
</div>
<div className="text3">
<p>We are on the leading edge of cancer care. 
  Providing the full continuum of cancer treatments 
  and supportive care services in a single convenient location.</p>
</div></div>
<div className="buttons">
  <button type="button" className="button1">Make an Appointment</button>
  <button type="button" className="button2">Departments</button>
</div>
      </div>
      
      <div className="head__images">
        <img src="" alt="Doctors"/>
      </div>
    </div>
  )
}
export default heading