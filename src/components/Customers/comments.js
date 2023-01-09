import { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
import React from "react";


const axios =require('axios');

const Coms = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");


const getApiData = async () => {
   try{
    const res = await axios.get("/posts");
    setMyData(res.data);
   }
   catch (error){
    setIsError(error.message);
   }

};
useEffect (()=>{
  getApiData();
},);

return(
  <>
  <h1>Axios</h1>
  {isError !== "" && <h2>{isError}</h2>}

  <div className="grid">
{myData.map((post) =>{

const{ID, Name, Reviews} = post;
return (
  <div key={ID} className="card">

<h2>{Name.toUpperCase()}</h2>
<p>{{Reviews}.Reviews}</p>

  </div>
)
}

)}
  </div>
  </>
);
};
 export default Coms;