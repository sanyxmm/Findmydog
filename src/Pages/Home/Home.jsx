import React, { useState ,  useEffect} from 'react'
import Login from '../Login/Login'
import Reg from '../Reg/Reg'
import './Home.css'
function Home({Menu,register,closeMenu,openRegister,closeRegister}) {
  return (
    <div className='HomePage'>
       <div className={`Search ${Menu||register ? 'blur-background' : ''}`} >
           <label ><input type="text" placeholder='Search Pet-id ' /> </label>
           <button><i className="fa-solid fa-magnifying-glass"></i></button>
       </div>
      {Menu && (<Login onButtonClick={openRegister} closeMenu={closeMenu}/>)}
      {register && <Reg closeRegister={closeRegister} />}
    </div>
  );
}

export default Home
