import React from "react";
import './navbar.css';

const Menu =() => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#services">Services</a></p>
  <p><a href="#news">News</a></p>
  </>)

const navbar = () => {
  return (
    <div className="navbar__padding">
    <div className="navbar__container">
        <div className="navbar__logo"><p>Medi<span>Care+</span></p></div>
        <div className="navbar__links">
        <Menu />
        </div> 
        </div>
         
            <div className="navbar__links-button">
               <button className="navbar__btn" type="button">
                  Contact  
                </button>
                </div>
            
        
    </div>
    
  )
}
export default navbar
