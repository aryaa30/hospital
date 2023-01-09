import React from 'react'
import "./footer.css";
import fb from "../../assets/fb.png";
import gg from "../../assets/gG.png";
import tw from "../../assets/Tw.png";

const Navf =() => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#services">Services</a></p>
  <p><a href="#news">News</a></p>
  </>)

const footer = () => {
  return (
    <div className='footer_s'>
      <div className='f_nav'>
        
      <div className="footer__logo"><p>Medi<span>Care+</span></p></div>
         <div className="footer__links">
        <Navf/>
</div>  

      </div>
      <div><footer className='main_f'>
        <div className='f_images'>
        <img  className='fb' src={fb}alt="" />
        <img  className='gg' src={gg}alt="" />
        <img  className='tw' src={tw}alt="" /> </div>
        <div className='f_text'>
          <p>©2020 PodPayment - 2020</p>
        </div>
        
        
        </footer></div>
    </div>
  )
}
export default footer