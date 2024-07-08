import React, { useState } from 'react';
import './Form.css'
// import { signup } from '../../api';  //Imports the Signup function from 'api.js' file
import OutsideClickHandler from 'react-outside-click-handler';
const  Form = ({closeOwner}) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        gender: '',
        email: '',
        contact: '',
        alternateContact: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className='User'>
      <OutsideClickHandler
      onOutsideClick={()=>{
        closeOwner();
      }}>
      <form className="User-box" onSubmit={handleSubmit}>
            <h1 style={{ fontSize: '30px', textAlign: 'center' }}>Owner Details</h1>
        
            <div className="User-image">
                <img src="profile.jpg" alt="" id="profile-pic" />
                <input type="file" accept="image/jpg ,image/jpeg" id="to-upload" />
                <label htmlFor="to-upload" id="profile">Upload Image</label>
            </div>
        
            <label>
                First Name: <br />
                <input id="Input1" type="text" name="firstName" value={userData.firstName} onChange={handleChange} required />
            </label>
            <label>
                Last Name: <br />
                <input id="Input2" type="text" name="lastName" value={userData.lastName} onChange={handleChange} required/>
            </label>
            <label>
                Pet Name: <br />
                <input id="Input3" type="text" name="petname" value={userData.petname} onChange={handleChange} required/>
            </label>
            <label>
                Address: <br />
                <input id="Input4" type="text" name="contact" value={userData.address} onChange={handleChange} required/>
            </label>
            <label>
                Email: <br />
                <input id="Input5" type="email" name="email" value={userData.email} onChange={handleChange} required />
            </label>
        
            <div style={{ display: 'inline-flex', gap: '10px' }}>
                <div id="details">
                    <p>Owner Contact no.:</p>
                    <span>
                        <input
                         id="Input6"
                        type="tel"
                        name="contact"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        value={userData.contact}
                        onChange={handleChange} required />
                    </span>
                </div>
                <div id="details">
                    <p>Alternate Contact no.:</p>
                    <span>
                        <input
                         id="Input7"
                        type="tel"
                        name="alternatecontact"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        value={userData.alternatecontact}
                        onChange={handleChange} required />
                    </span>
                </div>
            </div>
        
            <label htmlFor="checkbox" id="check">
                <input id="checkbox" type="checkbox" required style={{ width: '15px', height: '15px' }} />
                I agree to all terms & conditions
            </label>
        
            <input type="submit" value="Submit" id="SubmitBtn" />
        </form>
      </OutsideClickHandler>
        </div> 
    );
};

export default Form;
