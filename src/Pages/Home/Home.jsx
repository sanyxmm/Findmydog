import React from 'react'
import Login from '../Login/Login'

import './Home.css'
function Home({Menu}) {
  return (
    <div className='HomePage'>
       <div className={`Search ${Menu ? 'blur-background' : ''}`} >
           <label ><input type="text" placeholder='Search Pet-id ' /> </label>
           <button ><i className="fa-solid fa-magnifying-glass"></i></button>
       </div>
      {Menu && (<Login/>)}
    </div>
  );
}

export default Home
