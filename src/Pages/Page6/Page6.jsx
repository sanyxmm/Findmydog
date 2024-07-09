import React from 'react'
import dog from './sxxccc.jpg'
import './Page6.css'
const Page6 = () => {
  return (
    <div className='page6'>
      <div id='contact'>
        <div>
          <h1>Found a Pet?</h1>
        <p>Scan the Qr code on the PawQuest tag to view the owner's contact information</p>
        <button style={{fontSize:'17px', padding: '8px 12px 8px 12px' , marginTop:'50px', border:'2px solid black'}}>Contact the Owner</button></div>
      </div>
      <img src={dog} alt="" />
    </div>
  )
}

export default Page6
