import React from 'react'
import './Page5.css'
const Page5 = () => {
  return (
    <div className='page5'>
     <div id='search'>
        <div>
          <h1>Find Your Pet!</h1>
        <p style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ea!<br />Lorem ipsum dsit amet consectetur, adipisicing elitolor sit amet.</p>
        
           <label ><input id='here' type="text" placeholder='Search Pet-id '/> </label>
           {/* <button><i className="fa-solid fa-magnifying-glass"></i></button> */}
       <br />
        <button style={{fontSize:'20px', padding: '8px 18px 8px 18px' , marginTop:'25px', border:'2px solid black',borderRadius:'30px'}}>Search</button></div>
      </div>
    </div>
  )
}

export default Page5
