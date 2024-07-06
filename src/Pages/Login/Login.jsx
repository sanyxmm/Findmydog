import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div>
      <div className='login'>
                 <div>
                 <h1>Login</h1>
                 <a href="">New User? Sign up</a>
                 </div>

                 <label>Phone-number: <br /><input type="text" /></label>
                 <label>Name: <br /><input type="text" /></label>
                 <label>Email address: <br /><input type="text" /></label>
 
                 <button style={{padding:'10px'}} >Sign in</button>
               </div>
    </div>
  )
}

export default Login
