import React,{useContext, useState} from 'react'
import { AppContext } from '../../context'
import './Page7.css'

const Page7 = () => {
  const {openOwner} = useContext(AppContext);
  return (
 <div className='background'>
   <div className='page7'>
         <div style={{marginLeft:'10vw',width:'40vw',fontSize:'2.5vw',color:'white'}}>

              <h1 style={{fontSize:'5vw'}}><strong>Register Pet</strong> </h1>

              <p>Setup your contact info on your QR coded Rabies Vaccination tag. 
                    If your pet gets lost, the finder can scan and return to you!</p>

              <button onClick={openOwner} 
                      style={{fontSize:'17px',fontWeight:'600', padding: '10px 12px 10px 12px' , marginTop:'50px', border:'2px solid black',color:'white',backgroundColor:'black'}}>
              Register Now!</button>
          </div>
    </div>
 </div>
  )
}

export default Page7
