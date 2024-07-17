import React from 'react'
import dog from './sxxccc.jpg'
import './Help.css'
const Page6 = () => {
  return (
    <div className='main-page6'>
      <div className='page6'>
      <div id='contact'>
        <div>
          <h1>Found a Pet?</h1>
        <p>Scan the Qr code on the PawQuest tag to view the owner's contact information</p>
        <button style={{fontSize:'17px', padding: '8px 12px 8px 12px' , marginTop:'50px', border:'2px solid black'}}>Contact the Owner</button></div>
      </div>
      <img src={dog} alt="" />
    </div>

<div className='main-Contact-owner'>
 <div className='forblur'>
 <div  className='Contact-owner'>
    <h1>Found a Pet?</h1>

    <p>Scan the Qr code on the PawQuest tag to view the owner's contact information
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur</p>

   <button>Contact the Owner</button>
  </div>
 </div>
</div>

</div>
  )
}

export default Page6
