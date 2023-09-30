import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import './SignupPage.css'

export default function SignupPage() {
    const [FormData, setFormData] = useState({
        name: '', phone: '', email: '',
        password: '', confirmpassword: ''
    })

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
            if (FormData.password === FormData.confirmpassword) {
                console.log("if constion pass both password are match")
                const fetchData = await axios.post("http://localhost:5000/signup", FormData)
                toast.success(fetchData.data)
                setFormData({ name: '', email: '', phone: '', password: '', confirmpassword: '' })
            }
            else {
                toast.error("password and confirm Password are not same")
            }
        }
        catch (error) {
            console.log('error')
        }


    }




    return (
        <div className="signup-main">
            <div className='signup'>
                <form onSubmit={handleSubmit}>
                    {/*<label>
                <p>First Name<sup>*</sup></p>
                <input type='text'
                    placeholder='Enter Your First Name'
                    value={FormData.firstname}
                    name='firstname'
                    onChange={handleChange}
                    required />
            </label>*/}
                    <label>
                        <p>Name<sup className='sup'>*</sup></p>
                        <input className='signupInput' type='text'
                            placeholder='Enter Your Last Name'
                            value={FormData.name}
                            name='name'
                            onChange={handleChange}
                            required />
                    </label>
                    <label>
                        <p>Phone<sup className='sup'>*</sup></p>
                        <input className='signupInput' type='tel'
                            placeholder='Enter Your Phone'
                            value={FormData.phone}
                            name='phone'
                            onChange={handleChange}
                            required />
                    </label>
                    <label>
                        <p>Email<sup className='sup'>*</sup></p>
                        <input className='signupInput' type='email'
                            placeholder='Enter Your Email'
                            value={FormData.email}
                            name='email'
                            onChange={handleChange}
                            required />
                    </label>
                    <label>
                        <p>Password<sup className='sup'>*</sup></p>
                        <input className='signupInput' type='password'
                            placeholder='Enter Your password'
                            value={FormData.password}
                            name='password'
                            onChange={handleChange}
                            required />
                    </label>
                    <label>
                        <p>Confirm Password<sup className='sup'>*</sup></p>
                        <input className='signupInput' type='password'
                            placeholder='Enter Your Confirm Password'
                            value={FormData.confirmpassword}
                            name='confirmpassword'
                            onChange={handleChange}
                            required />
                    </label>
                    <br />
                    <button className='signupsubmit-button'>Submit</button>
                </form>
            </div>
        </div>
    )
}
