import React from 'react'
import './Navbar.css'
const Navbar = ({onButtonClick,Menu}) => {
  return (
    <div className={`navbar ${Menu ? 'blur-background' : ''}`}>
      <h1>FindMyDog</h1>
      <div className='navbtns'>
        <a href="/">Home</a>
        <a href="/">Search</a>
        <a href="/">Help</a>
        <a href="/">About us</a>
      </div>
      <div><button onClick={onButtonClick}>Sign in</button></div>
    </div>
  )
}

export default Navbar
