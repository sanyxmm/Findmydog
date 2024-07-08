// src/pages/Login.jsx
import React, { useState,useRef } from 'react';
import './Login.css';
import { auth } from '../../firebase'; 
import OutsideClickHandler from 'react-outside-click-handler';

const Login = ({ onButtonClick, register,closeMenu }) => {
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
    <OutsideClickHandler onOutsideClick={() => {
      // Close the menu
      closeMenu();
    }}>
      <div className='loginBox'>
      <div className='login'>
       
        <form onSubmit={handleSignIn}>
        <div>
          <h1>Login</h1>
          <a style={{ cursor: 'pointer' }} onClick={onButtonClick}>
          New User? Sign up
          </a>
        </div>

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
      
    </div>
    </OutsideClickHandler>
  );
};

export default Login;
