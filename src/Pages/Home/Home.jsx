import React, { useState , useContext, useEffect} from 'react'
import { AppContext } from '../../context';
import { Link } from 'react-scroll';
import './Home.css'
function Home() {
  return (
     <div className='home'>
      <div>
        <div style={{fontSize :'1.1em'}}>Trusted  by thousands of </div>
        <div style={{fontSize:'2em'}}>Pets and Their Owners</div>
        <div style={{fontSize:'0.6em'}}>Discover why countless pet owners trust our innovative approach to bringing lost pets safely back home</div>
        <button style={{padding:"0.3em 0.4em",
                        marginTop:'0.8em',
                        fontSize:'1em',
                        borderRadius:'50%',
                        border:'none'}}>
          <Link  id='text' activeClass="active" smooth spy to="RegisterPet"> <i class="fa-solid fa-angle-down"></i></Link>
        </button>
      </div>
    </div>
  );
}

export default Home
