import './App.css';
import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {FaYoutube} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { useState } from 'react';
import Focal from './FocalLogo2.png';
import Focal2 from './FocalLogo.png';
function App() {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState('');
  
  const handleClick = () => {
    setActive(!active);
  };
  
  function handleChange(event) {
    setEmail(event.target.value);
    setEmailError(validateEmail(event.target.value));
  }

   function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    setCheckboxError(event.target.checked ? '' : 'You must agree to the Terms and Conditions');
  }
  

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emptyRegex = /^\s*$/;
    const endsWithCORegex = /\.co$/i;

    if (emptyRegex.test(email)) {
      return "Email address is required";
    }

    if (endsWithCORegex.test(email)) {
      return "We are not accepting subscriptions from Colombia emails'";
    }

    if (!emailRegex.test(email)) {
      return "Please provide a valid e-mail address";
    }
  }
   function handleSubmit(event) {
      event.preventDefault();
      
      const emailError = validateEmail(email);
      const checkboxError = isChecked ? '' : 'You must agree to the Terms and Conditions';

      setEmailError(emailError);
      setCheckboxError(checkboxError);

      if (!emailError && !checkboxError) {
        // handle successful form submission
      }
    

    return "";
  }
  return (
    <div className="App">
       <img src={Focal2} className="mobilefocal"alt="Focal2" />
       <div className="mobilenav"> 
            <a href="#">About</a>
            <a href="#">How it works</a>
            <a href="#">Contact</a>
          </div>
      <div className="left">
        <header>
          <img src={Focal2} className="focal"alt="Focal2" />
          <div className="nav"> 
            <a href="#" className="Focal">Focal</a>
            <a href="#">About</a>
            <a href="#">How it works</a>
            <a href="#">Contact</a>
          </div>
        </header>
        <div className="Newsletter">
         <h2 className="sub">Subscribe to newsletter</h2>        
          <p className="subtext">Subscribe to our newsletter and get 10% discount</p>
          <p className="space"> on your first pair of headphones</p>
          <form className="emailform" onSubmit={handleSubmit}>
          <div className="flex">
          <input className={`email ${emailError ? 'invalid' : ''}`} type="text" id="fname" name="fname" placeholder="Type your email adress here" value={email} onChange={handleChange}></input>
          <button className="submit"><AiOutlineArrowRight className="arrow"/></button><br></br>
        </div>
          {emailError && <div className="error">{emailError}</div>}
        </form>
        <div>
         <label class="form-control" className="checkform">
            <input type="checkbox" name="checkbox-checked" checked={isChecked} onChange={handleCheckboxChange}  />
            <span><div class="checkmark"></div></span>
            i agree to<a href="#" className="no">Terms and Conditions</a>
          </label>
          {checkboxError && <div className="checkerror">{checkboxError}</div>}
        </div>
        <div className="icon">
          <a href="#"><FaYoutube className="youtube"/></a>
          <a href="#"><FaTwitter className="twitter"/></a>
          <a href="#"><FaFacebook className="facebook"/></a>
          <a href="#"><FaInstagram className="instagram"/></a>
        </div>
      </div>
      </div>
      <div className="right">
      </div>
    </div>
  )
}

export default App;
