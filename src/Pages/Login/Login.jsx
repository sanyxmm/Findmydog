import React, { useState,useRef, useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { AppContext } from '../../context';
import { auth } from '../../firebase'; 
import './Login.css';
import { getUserDetails } from '../../api'; 

const Login = ({ }) => {
  const {openRegister,closeMenu } = useContext(AppContext);

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
      const userData = await getUserDetails(user.uid);
      closeMenu();
      
      // Save user details in session storage
      sessionStorage.setItem('user', JSON.stringify({
        token,
        email: user.email,
        contact: userData.contact,
        username: userData.firstName + " " + userData.lastName,
        uid: userData.uid
      }));

      //Add a text box near the signin button in navbar to display the username and hide the signin button until the user is logged in, 
      //display a logout button near the username.

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
          <a style={{ cursor: 'pointer' }} onClick={openRegister}>
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
