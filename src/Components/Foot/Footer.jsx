import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='paage1' >
    <div className='box'>
    <h1>GET NOTIFIED<br />
    WHEN WE LAUNCH</h1>
    <span>Sign up to recieve the first tag when we launch</span>
    <div>
    <input type="text" placeholder='First Name'/>
    <input type="text" placeholder='Email-ID'/>
    </div>
    <button>Subscribe</button>
    </div>
    </div>
   
  )
}

export default Footer
