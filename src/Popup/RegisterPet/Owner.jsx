// import React, { useContext, useState, useEffect } from 'react';
// import OutsideClickHandler from 'react-outside-click-handler';
// import { AppContext } from '../context';
// import './Owner.css'
// import { registerPet } from '../../src/api';
// const QRCode = require('qrcode');
// import nodemailer from 'nodemailer';
// import { signup } from '../../api';  //Imports the Signup function from 'api.js' file

// const Owner = () => {
//     const { closeOwner } = useContext(AppContext);
//     const [petData, setPetData] = useState({
//         firstName: '',
//         lastName: '',
//         address: '',
//         petname: '',
//         email: '',
//         contact: '',
//         alternateContact: '',
//         tcAccepted: false,
//         userId: ''

//     });


//     const [error, setError] = useState('');
//     const [qrCodeBase64, setQrCodeBase64] = useState('');

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setPetData({
//             ...petData,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         //ADD LOADING ANIMATION TO SHOW PET REGISTRATION PROCESS IS ONGOING

//         try {
//             //Sends the form data to the 'registerPet' function which calls the SignUp API.
//             const user = JSON.parse(sessionStorage.getItem('user'));
//             petData.userId = user.uid;
//             const response = await registerPet(petData);
//             console.log(response);
//             const petDetailsUrl = `https://google.com`; // Adjust the URL as needed
//             const qrCodeImage = await generateQRCode(petDetailsUrl);

//             // Convert QR code image to Base64
//             const qrCodeBase64 = qrCodeImage.toString('base64');
//             console.log(qrCodeBase64);  //base64 image to be displayed


//             // Send email with QR code
//             //await sendEmail(petData.email, qrCodeBase64);
//             //HIDE THE ICON OR DISPLAY A MESSAGE FOR SUCCESS   

//         } catch (error) {
//             console.error(error);
//             setError('Pet Registration failed. Please try again.');
//         }
//     };

//     const  generateQRCode = async (data) => {
//         try {
//             // Generate QR code as a buffer
//             const qrCodeBuffer = await QRCode.toDataURL(data);
//             return qrCodeBuffer;
//         } catch (error) {
//             console.error('Error generating QR code:', error);
//             throw error;
//         }
//     };

//     // const sendEmail = async (email, qrCodeBase64) => {
//     //     // Implement email sending logic here (e.g., using SendGrid, Nodemailer, AWS SES, etc.)
//     //     // Example using Nodemailer:
//     //     const transporter = nodemailer.createTransport({
//     //         service: 'gmail',
//     //         auth: {
//     //             user: 'skayarkar89@gmail.com',
//     //             pass: 'djslawqtuocswtap',
//     //         },
//     //     });

//     //     const mailOptions = {
//     //         from: 'skayarkar89@gmail.com',
//     //         to: email,
//     //         subject: 'QR Code for Pet Details',
//     //         html: `<p>Scan the QR code below to view your pet's details:</p><img src="${qrCodeBase64}" alt="QR Code" />`,
//     //     };

//     //     await transporter.sendMail(mailOptions);
//     // };

//     return (
//         <div className='User'>
//             <OutsideClickHandler
//                 onOutsideClick={() => { closeOwner(); }}>

//                 <form className="User-box" onSubmit={handleSubmit}>
//                     <h1 style={{ fontSize: '30px', textAlign: 'center', color: 'black' }}>Owner Details</h1>

//                     <div className="User-image">
//                         <img src="profile.jpg" alt="" id="profile-pic" />
//                         <input type="file" accept="image/jpg ,image/jpeg" id="to-upload" />
//                         <label htmlFor="to-upload" id="profile">Upload Image</label>
//                     </div>

//                     <label>
//                         First Name: <br />
//                         <input id="Input1" type="text" name="firstName" value={petData.firstName} onChange={handleChange} required />
//                     </label>
//                     <label>
//                         Last Name: <br />
//                         <input id="Input2" type="text" name="lastName" value={petData.lastName} onChange={handleChange} required />
//                     </label>
//                     <label>
//                         Pet Name: <br />
//                         <input id="Input3" type="text" name="petname" value={petData.petname} onChange={handleChange} required />
//                     </label>
//                     <label>
//                         Address: <br />
//                         <input id="Input4" type="text" name="address" value={petData.address} onChange={handleChange} required />
//                     </label>
//                     <label>
//                         Email: <br />
//                         <input id="Input5" type="email" name="email" value={petData.email} onChange={handleChange} required />
//                     </label>

//                     <div style={{ display: 'inline-flex', gap: '10px' }}>
//                         <div id="details">
//                             <p>Owner Contact no.:</p>
//                             <span>
//                                 <input
//                                     id="Input6"
//                                     type="tel"
//                                     name="contact"
//                                     pattern="[0-9]{10}"
//                                     maxLength="10"
//                                     value={petData.contact}
//                                     onChange={handleChange} required />
//                             </span>
//                         </div>
//                         <div id="details">
//                             <p>Alternate Contact no.:</p>
//                             <span>
//                                 <input
//                                     id="Input7"
//                                     type="tel"
//                                     name="alternatecontact"
//                                     pattern="[0-9]{10}"
//                                     maxLength="10"
//                                     value={petData.alternatecontact}
//                                     onChange={handleChange} required />
//                             </span>
//                         </div>
//                     </div>

//                     <label htmlFor="checkbox" id="check">
//                         <input id="checkbox" type="checkbox" name='tcAccepted' value={petData.tcAccepted}
//                             onChange={handleChange} required style={{ width: '15px', height: '15px' }} />
//                         I agree to all terms & conditions
//                     </label>

//                     <input type="submit" value="Submit" id="SubmitBtn" />
//                 </form>
//             </OutsideClickHandler>
           

//         </div>

//     );
// };

// export default Owner;
