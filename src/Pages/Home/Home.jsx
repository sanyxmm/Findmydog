import React, { useState } from 'react'
import Login from '../Login/Login'

import './Home.css'
function Home({Menu}) {
  const[register,setregister]=useState(false)
  const openRegister = ()=>{
    setregister(!register);
  }
  const closeregister = ()=>{
    setregister(!register);
  }
  return (
    <div className='HomePage'>
       <div className={`Search ${Menu ? 'blur-background' : ''}`} >
           <label ><input type="text" placeholder='Search Pet-id ' /> </label>
           <button><i className="fa-solid fa-magnifying-glass"></i></button>
       </div>
      {Menu && (<Login onButtonClick={openRegister} register={register}/>)}
    </div>
  );
}

export default Home
