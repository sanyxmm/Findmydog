import React from 'react'
import './Page4.css'
import s1 from './Step-1-scaled.png'
import s2 from './Step-2-scaled.png'
import s3 from './Step-3-scaled.png'
import s4 from './Step-4-scaled.png'
const Page4 = () => {
  return (
   <div>
     <h1 style={{textAlign:'center',margin:'10vw 0vw 2vw 0vw'}}>How it Works?</h1>
    <div className='page4'>
      <div><img src={s1} alt="" /><h3>Step 1: Register Tag</h3>
        <p>If your vet did not register for you, use your phone to scan the QR code on Fido’s tag. 
        Enter your name and the phone number you want to come up when the tag is scanned. 
        You’ll pay a one-time fee of $2.99 for your tag registration.</p></div>
      <div><img src={s2} alt="" /><h3>Step 2: Lost Fido?</h3><p>If Fido gets lost, be sure your info is up to date so you can be contacted.</p></div>
      <div><img src={s3} alt="" /><h3>Step 3: Finder Scans</h3><p>The person that finds Fido can scan the QR code on his tag using their phone. 
        They instantly get your contact info and can reach you.</p></div>
      <div><img src={s4} alt="" /><h4>Step 4: Be Reunited</h4><p>Fido is returned safe and sound!
         Give him a hug, give him a treat, and remind him not to run off without you again!</p></div>
    </div>
   </div>
  )
}

export default Page4
