import React ,{ useState , useContext}  from 'react'
import { AppContext } from '../../context'
import Owner from '../../RegisterPet/Owner'
import { Link } from 'react-scroll';
import paw from './2.png'
import './Navbar.css'

const Navbar = () => {
  const {register,Menu,openMenu,openOwner,isFormOpen} = useContext(AppContext);   
  return (
    <div className={`navbar ${Menu || register ? 'blur-background' : ''}`}>
      <img src={paw} width="180px" alt="" />

      <div className='navbtns'>
        <Link  activeClass="active" smooth spy to ="Home">Home</Link>
        <Link  activeClass="active" smooth spy to="Search">Search</Link>
        <Link  activeClass="active" smooth spy to="RegisterPet">RegisterPet</Link>
        <Link  activeClass="active" smooth spy to="Help">Help</Link>
        <Link  activeClass="active" smooth spy to="Aboutus">About us</Link>
      </div>


      <div><button onClick={openMenu} >Sign in</button></div>
      {isFormOpen && <Owner/>}
    </div>
  )
}
export default Navbar



  {/* <a href="#Home">Home</a>
        <a href="#Search">Search</a>
        <a href="#RegisterPet">RegisterPet</a>
        <a href="#Help">Help</a>
        <a href="#Aboutus">About us</a> */}