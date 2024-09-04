import React,{useContext, useState} from 'react'
import { AppContext } from '../../context'
import './PetRegistration.css'
import { Link } from 'react-scroll';
import dog from './dogyy.png'
const PetRegistration = () => {
  const {openOwner} = useContext(AppContext);
  return (
<div>
<div className="container">
    <div className='sticker'></div>
  <img id="dog-image" src={dog} alt="" />
     <div className='s-content'>
     <h1 id='heading-p'>Ensure Your Pet's Safety </h1>
     <h6>In Seconds...</h6>
    <button ><Link  id='text' onClick={openOwner}  activeClass="active" smooth spy to="Home">Register Now</Link></button>
    </div>
</div>
</div>
  )
}

export default PetRegistration