import React ,{ useState , useContext}  from 'react'
import { AppContext } from '../../context'
import Owner from '../../Pages/RegisterPet/Owner'
import { Link } from 'react-scroll';
import logo from './logo.png'
import menuButton from './menu-button.png'
import './Navbar.css'

const Navbar = () => {
  const {register,Menu,openMenu,openOwner,isFormOpen,openNav,navbtns} = useContext(AppContext);   
  return (
    <nav className={`navbar ${Menu || register ? 'blur-background' : ''}`}>
      <img id='logo' src={logo} alt="" />

      <ul className={navbtns ? "open" : "navbtns"}>
          <li> <Link id='text' activeClass="active" smooth spy to ="Home">Home</Link></li>
          <li> <Link  id='text' activeClass="active" smooth spy to="Search">Search</Link></li>
          <li> <Link  id='text' activeClass="active" smooth spy to="RegisterPet">RegisterPet</Link></li>
          <li> <Link  id='text' activeClass="active" smooth spy to="Help">Help</Link></li>
          <li> <Link  id='text' activeClass="active" smooth spy to="Aboutus">About us</Link></li>
      </ul>

        <div></div>
      <div><button onClick={openMenu} >Sign in</button></div>
   
      <img id='menu-button' onClick={openNav} src={menuButton} alt="" />
      {isFormOpen && <Owner/>}
    </nav>
    
  )
}
export default Navbar



  {/* <a href="#Home">Home</a>
        <a href="#Search">Search</a>
        <a href="#RegisterPet">RegisterPet</a>
        <a href="#Help">Help</a>
        <a href="#Aboutus">About us</a> */}