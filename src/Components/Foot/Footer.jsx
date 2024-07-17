import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='main-footer'>
    <div className='footer-sec'>
      <h5>Get Notified <br />
      When we launch </h5>
      <span>Sign up to recieve the first tag when we go live</span>
    
      <div><input type="text" placeholder='First Name' />
      <input type="text" placeholder='Email' /></div>
      <button>Subscribe</button>
  
    </div>
  </div>
   
  )
}

export default Footer
