import React from 'react'
import dog from './pexelsphoto1458916.jpeg'
import './Page7.css'
const Page7 = () => {
  return (
    <div>
       <div className='page7'>
      <img src={dog} alt="" />
      <div style={{position:'absolute',top:'30%',left:'20%',width:'40vw',fontSize:'2.5vw',color:'white'}}>
        <h1 style={{fontSize:'5vw'}}><strong>Register Pet</strong> </h1>
        <p>Setup your contact info on your QR coded Rabies Vaccination tag. 
          If your pet gets lost, the finder can scan and return to you!</p>
          <button style={{fontSize:'17px',fontWeight:'600', padding: '10px 12px 10px 12px' , marginTop:'50px', border:'2px solid black',color:'white',backgroundColor:'black'}}>Register Now!</button>
      </div>
       </div>
    </div>
  )
}

export default Page7
