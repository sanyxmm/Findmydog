import React, { useContext, useState } from 'react';
import './Reg.css';
import profile from './profile.jpg'
import { signup } from '../../api';  //Imports the Signup function from 'api.js' file
import OutsideClickHandler from 'react-outside-click-handler';
import { AppContext } from '../../context';
const Reg = () => {
    const{closeRegister,closeRegister2,openregPop} = useContext(AppContext);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //ADD LOADING ANIMATION TO SHOW SIGNUP PROCESS IS ONGOING

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            //Sends the form data to the 'signup' function which calls the SignUp API.
            const response = await signup(formData);
            console.log(response);
            closeRegister();
            openregPop();
            //HIDE THE ICON OR DISPLAY A MESSAGE FOR SUCCESS   
            
        } catch (error) {
            console.error(error);
            setError('Signup failed. Please try again.');
        }
    };
    const [imageUrl, setImageUrl] = useState(profile);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    };
    return (
        <div className='regg'>
        <OutsideClickHandler onOutsideClick={() => {
            // Close the menu
            closeRegister();
            closeRegister2();
          }}> 
            
          <form className="box2" onSubmit={handleSubmit}>
              <h1>Sign-Up</h1>

              <div className="box-image">
              {imageUrl && <img src={imageUrl} alt="" id="profile-pic" />}
                  <input type="file" accept="image/jpg ,image/jpeg" id="to-upload" onChange={handleImageChange}/>
                  <label htmlFor="to-upload" id="profile">Upload Image</label>
              </div>

              <label>
                  First Name: <br />
                  <input id="Input1" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </label>
              <label>
                  Last Name: <br />
                  <input id="Input2" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </label>
              <label>
                  Date Of Birth: <br />
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </label>

              <div id="category">
                  <label>Gender: <br />
                      <label>
                          <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
                      </label>
                      <label>
                          <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
                      </label>
                      <label>
                          <input type="radio" name="gender" value="Rather not say" checked={formData.gender === 'Rather not say'} onChange={handleChange} /> Rather not Say
                      </label>
                  </label>
              </div>

              <div style={{ display: 'inline-flex', gap: '10px' }}>
                  <label>
                      Email: <br />
                      <input id="Input4" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </label>
                  <div id="details">
                      <p>Contact Details:</p>
                      <span>
                          <input id="Input7" type="tel" name="contact" pattern="[0-9]{10}" maxLength="10" value={formData.contact} onChange={handleChange} required />
                      </span>
                  </div>
              </div>

              <div style={{ display: 'inline-flex', gap: '10px' }}>
                  <label>
                      New Password: <br />
                      <input
                          id="p1"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}"
                          onInvalid={e => e.target.setCustomValidity('must contain uppercase, lowercase characters, and numbers')}
                          onInput={e => e.target.setCustomValidity('')}
                          required
                      />
                  </label>
                  <label>
                      Confirm Password: <br />
                      <input
                          id="p2"
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}"
                          onInvalid={e => e.target.setCustomValidity('must contain uppercase, lowercase characters, and numbers')}
                          onInput={e => e.target.setCustomValidity('')}
                          required
                      />
                      {formData.password !== formData.confirmPassword && (
                          <p id="redtext" style={{ fontSize: '15px', color: 'red' }}>Passwords do not match</p>
                      )}
                  </label>
              </div>

              <label htmlFor="checkbox" id="check">
                  <input id="checkbox" type="checkbox" required />
                  I agree to all terms & conditions
              </label>

              <input type="submit" value="Sign Up" id="SubmitBtn" />
              <div id='closemenu2' onClick={closeRegister}>
          <i class="fa-solid fa-circle-xmark"></i>
          </div>
          </form>
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          </OutsideClickHandler>
          </div>
    );
};

export default Reg;
