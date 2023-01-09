
import React from 'react';
import "./customer.css";
import Coms from './comments';
 
 const Customers = () => {

  return (
    <div className='cs__margin'>
    <div className='head_cs'>
      <p>What Our Customers Say</p></div>
    <div>
      <div className='com_d'>
      
<Coms/>
</div>
    </div>
    </div>
  );
}
export default Customers