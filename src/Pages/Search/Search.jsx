import React from 'react'
import './Search.css'
import dog from './abt-section.png'
import Quote from '../Quote/Quote'
// import dogy from './pexelsphoto3294248.jpeg'

const Search = () => {
  return (
   <div>
     <div className='page5'>
     <div id='search'>
        <div>
          <h1>Have u Lost your Loved one</h1>
        {/* <p style={{fontSize:'18px'}}>dont worry Pawquest is here at ur tough times</p> */}
        
           <label ><input id='here' type="text" placeholder='Search Pet-id '/> </label>
           {/* <button><i className="fa-solid fa-magnifying-glass"></i></button> */}
       <br />
        <button style={{fontSize:'20px', padding: '8px 18px 8px 18px' , marginTop:'25px', border:'2px solid black',borderRadius:'30px'}}>Search</button></div>
      </div>
    </div>
<div className='bg'>
  <div className='findme'>
    <div> 
      <div>
      <h4 id='findme-heading'>Have u Lost your Loved one</h4>
      <div>dont worry Pawquest is here at ur tough times</div>
      <div> Find you Pet....</div>
      </div>

      <div className='find-search'>
      <label ><input type="text" placeholder='Search Pet-id ' /> </label>
      <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <img src={dog} alt="" id='image' />
      <span className='text-container'>LOVE</span>
      <Quote/>
    </div>
  </div>
</div>
  )
}

export default Search
