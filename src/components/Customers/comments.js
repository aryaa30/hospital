import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import "./comments.css"

function Comments(){

  /*-----------------------------------------------*/

const [myData, setMyData] = useState([]);
  

useEffect(() => {
  return () =>{
axios
.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
.then((response) => setMyData(response.data.data));
  }
},[]);

  return (
   <div className='carding'>
   <h1> Axios api</h1>
 
   {myData.map((post)=>{
const {ID, Name, rating, Reviews} = post;
return <div className='main__api'>
  
<div className='yellow' key={ID}>
<h2 className='name__1'>
  Name :   {Name}
</h2>
<p className='name__2'>Rating :  {rating}</p>
<p className='name__3'>Reviews :  {Reviews.slice(0 ,150)}</p>
</div>

</div>

   })}
</div>  
  );
}
export default Comments
