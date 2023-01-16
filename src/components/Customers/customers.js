
import React from 'react';
import "./customer.css";
import Comments from './comments';
 
 const Customers = () => {

  return (
    <div className='cs__margin'>
    <div className='head_cs'>
      <p>What Our Customers Say</p></div>
    <div>
      <div className='com_d'>
      
<Comments/>
</div>
    </div>
    </div>
  );
}
export default Customers
