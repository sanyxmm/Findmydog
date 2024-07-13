import React, { useState , useContext, useEffect} from 'react'
import Login from '../Login/Login'
import { AppContext } from '../../context';
import Reg from '../Reg/Reg'
import './Home.css'
function Home() {
  const {Menu,register} = useContext(AppContext);

  return (
    <div className='HomePage'>
       <div className={`Search ${Menu||register ? 'blur-background' : ''}`} >
           <label ><input type="text" placeholder='Search Pet-id ' /> </label>
           <button><i className="fa-solid fa-magnifying-glass"></i></button>
       </div>
      {Menu && (<Login/>)}
      {register && <Reg />}
    </div>
  );
}

export default Home
