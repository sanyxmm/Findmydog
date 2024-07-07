import React from 'react'
import './Reg.css'
const Reg = () => {
  return (
   <div className='regg'>
     <div>
        <form class="box2" >
            <h1 style={{fontSize: '30px',textAlign:'center'}}>Registration Form</h1>

            <div class="image">
            <img src="profile.jpg" alt="" id="profile-pic"/>
            <input type="file" accept="image/jpg ,image/jpeg" id="to-upload"/>
            <label for="to-upload" id="profile">Upload Image</label>
            </div>


            <label>First Name:    <br/>   <input id="Input1" type="text" required/></label> 
            <label>Last Name:     <br/>   <input id="Input2" type="text"/></label>
            <label>Date Of Birth: <br/>   <input type="date" /></label>
    
            <div id="category">
                <label >Gender: <br />
                <label ><input type="radio" name="gender"/> Male</label>
                <label ><input type="radio" name="gender" />Female</label>
                <label ><input type="radio" name="gender"/>Rather not Say</label>
                </label>
            </div>

            <div style={{display:'inline-flex', gap:'10px'}} >
            <label>Email: <br/>  <input id="Input4" type="email" required/></label>
            <div id="details">
            <p>Contact Details:</p>
            <span>
                {/* <i class="fa-sharp fa-solid fa-phone"></i> */}
                <input id="Input7" type="tel" pattern="[0-9]{10}"  maxlength="10" required/>   
            </span>
            </div>
            </div>

            <div style={{display:'inline-flex', gap:'10px'}}>
                <label>
                    New Password: <br/>
                    <input id="p1" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}" oninvalid="this.setCustomValidity('must contain uppercase,lowercase characters and numbers')"
                    onvalid="this.setCustomValidity('')" required/>
                    {/* <i id="eyeslash" style={{position:'absolute', left:'43%',marginTop:'6px' }} class="fa-solid fa-eye-slash"></i> */}
                </label>  
                <label >
                    Confirm Password:<br/>
                    <input id="p2" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}" oninvalid="this.setCustomValidity('must contain uppercase,lowercase characters and numbers')"
                     onvalid="this.setCustomValidity('')" required/>
                    {/* <i id="eyeslash" style={{position: 'absolute' ,right: '5%', marginTop:' 6px' }}class="fa-solid fa-eye-slash"></i> */}
                    <p id="redtext" style={{fontSize: '15px',color: 'red', display: 'none'}}>*password do not match</p>
                </label>
            </div>
        

            <label for="checkbox" id="check"> 
            <input id="checkbox" type="checkbox" required style={{width: '15px', height: '15px'}}/> I agree to all terms & conditions
        </label>

            <input type="submit" value="Submit" id="SubmitBtn"/>
        </form>
    </div>
   </div>
  )
}

export default Reg
