import React, { useState } from 'react'
import './ForgotPassword.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ForgotPassword() {
  const Navigate = useNavigate()
  // form data
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });

  // state to make submit button disable
  const isDisabled = formData.email.trim() !== '' || formData.phone.trim() !== '';
  // form Data Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
// Function will render after otp verification to update passwords

const handleClick=()=>{
  if(!isDisabled )
  {
      (toast.error('fjbb'))
  }
  else{
    (toast.success('enter otp')) 
  }
  
}

  // on Submit function 
  const handleSubmit = (event) => {
    event.preventDefault();
    Navigate('/update/password')
    
  }
  return (
    <div className='forgot-password'>
      this is forgot page
      <form onSubmit={handleSubmit}>
        <label >
          <p>Email<sup className='red'>*</sup></p>
          <input
            className="forgot-input"
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Email "
            name="email"
          />
          <h3 className='color-black'><p className='color-black'>OR</p></h3>
          <br />
        </label>
        <label>
          <p>Phone<sup className='red'>*</sup></p>
          <input
            className="forgot-input"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your  phone number"
            name="phone"
          />
        </label>
        <button onClick={handleClick} disabled={!isDisabled} className="submit-button">Next</button>
      </form>
    </div>
  )
}
