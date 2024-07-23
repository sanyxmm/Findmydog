import React ,{ useState , useContext}  from 'react'
import { AppContext } from '../../context'
// import Owner from '../../RegisterPet/Owner'
import { Link } from 'react-scroll';
import logo from './logo.png'
import menuButton from './menu-button.png'
import './Navbar.css'
import Login from '../../Popup/Login/Login';
// import Reg from '../../Pages/Reg/Reg';
import Reg from '../../Popup/Reg/Reg';
import Owner from '../../Popup/RegisterPet/Owner'
import classNames from 'classnames';

const Navbar = () => {
  const {register,Menu,openMenu,isFormOpen,openNav,navbtns,closeNav} = useContext(AppContext); 
  let buttonClasses = classNames('navbtns', navbtns ? 'open' : '');  
  return (
    <nav className='navbar'>
    <img id='logo' src={logo} alt="" />

      <ul className={buttonClasses}>
          <li> <Link id='text' onClick={closeNav} activeClass="active" smooth spy to ="Home">Home</Link></li>
          <li> <Link  id='text' onClick={closeNav} activeClass="active" smooth spy to="Search">Search</Link></li>
          <li> <Link  id='text' onClick={closeNav} activeClass="active" smooth spy to="RegisterPet">RegisterPet</Link></li>
          <li> <Link  id='text' onClick={closeNav} activeClass="active" smooth spy to="Help">Help</Link></li>
          <li> <Link  id='text' onClick={closeNav} activeClass="active" smooth spy to="Working">Working</Link></li>
          <li> <Link  id='text' onClick={closeNav} activeClass="active" smooth spy to="Aboutus">About us</Link></li>
      </ul>
      <div></div>
      <div><button id='nav-button' onClick={openMenu} >Sign in</button></div>
      <img id='menu-button' onClick={openNav} src={menuButton} alt="" />
      {isFormOpen && <Owner/>}
      {Menu && <Login/>}
      {register && <Reg />}
    </nav>
  )
}
export default Navbar
