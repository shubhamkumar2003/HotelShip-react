import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './LoginPage.css'
import { toast } from 'react-toastify';
import {doLogin} from '../../components/auth/Index'

export default function LoginPage() {
  
  console.log('this is login page')
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const fetchData = await axios.post('http://localhost:5000/login', formData)
      console.log(fetchData.data)
// if user is not registered
      if (fetchData.data.msg === "user not found,Please enter a valid credential") {
        toast.error("Either User is not registered or please enter valid credential");
        setFormData({email:'',password:''})
      }  
      
      else {
        doLogin(fetchData.data,()=>{console.log("login details is saved to local storage ")})
        navigate('/dashboard');
      }
      
    }
    catch (error) {
      console.log("error in fetching data",error)
    }




  }

  return (
    <div className='login-main'>
    <div className='loginpage'>
      <form onSubmit={handleSubmit}>
      <h2 className='login-h2'>LOGIN</h2>
        <label >
          <p>Email<sup className='red'>*</sup></p>

          <input
            className="logininput"
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </label>
        <label>
          <p>Password<sup className='red'>*</sup></p>
          <input className='logininput'
            value={formData.password}
            onChange={handleChange}
            type='password'
            placeholder='Enter Password'
            name='password'
            required />
        </label>
        <br />
        <Link to='/forgot/password'>Forgot Password</Link>
        <button className="submit-button">Submit</button>
      </form>
</div>
    </div>
  )
}
