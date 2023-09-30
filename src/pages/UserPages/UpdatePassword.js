import React,{useState} from 'react'

export default function UpdatePassword() {

    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
    }
return (
       
        <div className="update-password">
            <form onSubmit={handleSubmit}>
                <label>
                    <p>New Password<sup className='red'>*</sup></p>
                    <input
                        className="update-input"
                        value={formData.newPassword}
                        onChange={handleChange}
                        type="password"
                        placeholder="Enter New Password"
                        name="newPassword"
                    />
                </label>
                <label>
                    <p>Confirm Password<sup className='red'>*</sup></p>
                    <input
                        className="update-input"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        type="password"
                        placeholder="Confirm New Password"
                        name="confirmPassword"
                    />
                </label>
                <button className="submit-button">Submit</button>
            </form>
        </div>
        
    )
}
