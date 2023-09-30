import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './HotelForm.css';

import RoomForms from './RoomForms';

function HotelForm() {

    const [hotel_id, setHotelId] = useState()
    const [formData, setFormData] = useState({
        name: '',
        state: '',
        city: '',
        description: '',
        image: null,
        price_per_night: '',
        available_rooms: '',
        amenities: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (event) => {
        setFormData({
            ...formData,
            image: event.target.files[0],
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post('http://localhost:5000/insert/hotel/details', formDataToSend);

            setHotelId(response.data)
console.log(response)
            if (response.status === 200) {
                alert('Hotel data inserted successfully');

                // Optionally, you can reset the form fields here
            } else {
                alert('Failed to insert hotel data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to insert hotel data');
        }
    };

    
console.log(hotel_id)
    if (hotel_id) {
        return (
            <div> <RoomForms id={hotel_id.hotel_id} /> </div>
        )

    }

    return (
        <div className="hotelform-main">
            <div className="hotel-form-container">
                <h2 className='hotelfrom-headings'>Add a New Hotel</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="hotelform-form">
                <label className="hotelform-labels">
                        <p className="hotel-headings">Hotel Name   :  <span>
                        <input type="text" className='hotelform-inputs'
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder='Enter Hotel Name' />
                        </span></p>
                        
                    </label>

                    <label className="hotelform-labels">
                        <p className="hotel-headings">State Name  :  <span>
                        <input type="text" className='hotelform-inputs'
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            placeholder='Enter State Name' />
                        </span></p>
                        
                    </label>

                    <label className="hotelform-labels">
                        <p className="hotel-headings">city Name  :  <span>
                        <input type="text" className='hotelform-inputs'
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder='Enter City Name'
                            required />
                        </span></p>
                    </label>

                    <label className="hotelform-labels">
                        <p className="hotel-headings">Description  :  <span>
                        <textarea name="description" className='hotelform-inputs'
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder='Enter Description' />

                        </span></p>
                        
                    </label>

                    <label className="hotelform-labels">
                        <p className="hotel-headings">Image  :  <span>
                        <input type="file" className='hotelform-inputs'
                            name="image"
                            onChange={handleImageChange}
                            required />
                        </span></p>
                        

                    </label>

                    <label>
                        <p className="hotel-headings">Price Per Night  :  <span>
                        <input type="number" className='hotelform-inputs'
                            name="price_per_night"
                            value={formData.price_per_night}
                            onChange={handleInputChange}
                            required
                            placeholder='Enter Price' />

                        </span></p>
                        
                    </label>

                    <label className="hotelform-labels">
                        <p className="hotel-headings">Available Rooms  :  <span>
                        <input className='hotelform-inputs' type="number"
                            name="available_rooms"
                            value={formData.available_rooms}
                            onChange={handleInputChange}
                            required />
                        </span>
                        </p>
                        
                    </label>

                    <label className="hotelform-labels">
                        <p className="hotel-headings">Amenities  :  <span>
                        <textarea className='hotelform-inputs' name="amenities"
                        value={formData.amenities}
                        onChange={handleInputChange} />
                        </span></p>
                       
                    </label>
<br />
                    <button className="hotel-submit-button">Add Hotel</button>

                </div>

                </form>
            </div>
        </div>
    );
}

export default HotelForm;