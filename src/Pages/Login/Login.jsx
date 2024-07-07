import React from 'react'
import Reg from '../Reg/Reg'
import './Login.css'
const Login = ({onButtonClick,register}) => {
  return (
    <div>
      <div className='login'>
                 <div>
                 <h1>Login</h1>
                 <a style={{cursor:'pointer'}} onClick={onButtonClick}>New User? Sign up</a>
                 </div>

                 <label>Phone-number: <br /><input type="text" /></label>
                 <label>Name: <br /><input type="text" /></label>
                 <label>Email address: <br /><input type="text" /></label>
 
                 <button style={{padding:'10px'}} >Sign in</button>
               </div>
               {register && (<Reg/>)}
    </div>
  )
}

export default Login
