// src/pages/Login.jsx
import React, { useState } from 'react';
import Reg from '../Reg/Reg'
import './Login.css';
import { auth } from '../../firebase'; 

const Login = ({ onButtonClick, register }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      // Obtain the Firebase user token
      const token = await user.getIdToken();
      
      console.log('User signed in:', user);
      console.log('User token:', token);
    } catch (error) {
      setError('Invalid credentials. Please try again.'); // Handle error
      console.error('Sign-in error:', error);
    }
  };

  return (
    <div>
      <div className='login'>
        <div>
          <h1>Login</h1>
          <a style={{ cursor: 'pointer' }} onClick={onButtonClick}>
          New User? Sign up
          </a>
        </div>

        <form onSubmit={handleSignIn}>

          <div>Email address: <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>Password: <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>  

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={{ padding: '10px' }}>Sign in</button>
        </form>      
      </div>
      {register && <Reg />}
    </div>
  );
};

export default Login;
