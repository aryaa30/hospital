import React from 'react'
import "./specialists.css"
const specialists = () => {
  return (
    <div className='sp_main'> 
    
      <div className='sp__margin'>
      <div className='sp__heading'>We Have The Best Specialist</div>
      <div className='sp__desc'>We have a wide experience in experience design and strategy, with locally-rooted knowledge.
         </div>
      </div>

      <div className='dc__images'>
  
       <div className='dc1'><img   src=''/>
       <p className='name1'>Dr. Awaatif Al</p> 
       <p className="job1">Dental Care</p>
       </div>
        <div className='dc2'><img   src=''/>
        <p className='name2'>Dr. Filipa Gaspar</p> 
        <p className='job2'> Cardiology</p>
        </div>
        <div className='dc3'><img   src=''/>
        <p className='name3'>Dr. Sukhmeet Gorae</p> 
        <p className='job3'>Neurological</p></div>

        <div className='dc4'><img   src=''/>
        <p className='name4'>Dr. Siri Jakobsson</p> 
        <p className='job4'>Prediatrics</p> </div>
      </div>
    </div>
  
  )
}
export default specialists