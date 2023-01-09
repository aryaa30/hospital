import React from 'react'
import "./email.css"
const email = () => {
  return (
    <div className='email_box'>
      <div className='inside_box'>
      <div className='subs'>Subscribe to Newsletter</div>
      <div className='des_s'>We have a wide experience in experience design and strategy,</div>
      <div className='email_sec'> 
      <input type={email} name="email" placeholder='Email'/>
     <button type='submit' className='btn'>Send Now</button>
      </div></div>
    </div>
  )
}
export default email