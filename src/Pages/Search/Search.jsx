import React from 'react'
import './Search.css'
import Quote from '../Quote/Quote'
import dog from './abt-section.png'
const Search = () => {
  return (
    // <div className='page5'>
    //  <div id='search'>
    //     <div>
    //       <h1>Find Your Pet!</h1>
    //     <p style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ea!<br />Lorem ipsum dsit amet consectetur, adipisicing elitolor sit amet.</p>
        
    //        <label ><input id='here' type="text" placeholder='Search Pet-id '/> </label>
    //        {/* <button><i className="fa-solid fa-magnifying-glass"></i></button> */}
    //    <br />
    //     <button style={{fontSize:'20px', padding: '8px 18px 8px 18px' , marginTop:'25px', border:'2px solid black',borderRadius:'30px'}}>Search</button></div>
    //   </div>
    // </div>
  <div className='findme'>
    <div id='content-find'> 
      <div>
      <h4 id='findme-heading'>Searching For Your Missing Pet?</h4>
      <div>We're here to reunite you with your beloved companion swiftly!</div>
      <div> Find you Pet....</div>
      </div>

      <div className='find-search'>
      <label ><input type="text" placeholder='Search Pet-id ' /> </label>
      <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>

    </div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <img src={dog} alt="" id='dogboy' />
      {/* <span className='text-container'>LOVE</span> */}
      {/* <Quote/> */}
  </div>
  )
}

export default Search
