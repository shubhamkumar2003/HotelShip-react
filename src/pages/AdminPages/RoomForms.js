import React, { useState } from 'react';
import './RoomForm.css';
import axios from 'axios';

function RoomForm(props) {
    console.log(props.id)
    const [formData, setFormData] = useState({
        hotel_id: props.id,
        room_type: '',
        description: '',
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        price_per_night: '',
        adults: '',
        kids: '',
        maximum_guests: '',
        other_room_info: '',
        numberOfRooms: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            if (formData[key]) {
                formDataToSend.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.post('http://localhost:5000/room/details/insert', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the appropriate content type for FormData
                },
            });

            if (response.status === 200) {
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='roomform-main'>
            <h1 className='roomform-h1'>Room Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="roomform">
              <label className='roomform-labels'>
              Room Type:
              <input className='roomform-inputs'
                  type="text"
                  name="room_type"
                  value={formData.room_type}
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Room Description:
              <input className='roomform-inputs'
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Price Per Night:
              <input className='roomform-inputs'
                  type="number" // Corrected the type attribute
                  name="price_per_night" // Corrected the name attribute
                  value={formData.price_per_night}
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Allow Adults:
              <input className='roomform-inputs'
                  type="number" // Corrected the type attribute
                  name="adults" // Corrected the name attribute
                  value={formData.adults}
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Allow Kids:
              <input className='roomform-inputs'
                  type="number" // Corrected the type attribute
                  name="kids" // Corrected the name attribute
                  value={formData.kids}
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Maximum Guests:
              <input className='roomform-inputs'
                  type="number" // Corrected the type attribute
                  name="maximum_guests" // Corrected the name attribute
                  value={formData.maximum_guests}
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Other Room Info:
              <input className='roomform-inputs'
                  type="text"
                  name="other_room_info"
                  value={formData.other_room_info}
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Number of Rooms:
              <input className='roomform-inputs'
                  type="number" // Corrected the type attribute
                  name="numberOfRooms" // Corrected the name attribute
                  value={formData.numberOfRooms}
                  onChange={handleInputChange}
                  required
              />
          </label>

          {/* Repeat similar blocks for other form fields */}
          {/* Remember to update the labels and names for all fields accordingly. */}

          <label className='roomform-labels'>
              Image 1:
              <input className='roomform-inputs'
                  type="file"
                  name="image1"
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Image 2:
              <input className='roomform-inputs'
                  type="file"
                  name="image2"
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Image 3:
              <input className='roomform-inputs'
                  type="file"
                  name="image3"
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Image 4:
              <input className='roomform-inputs'
                  type="file"
                  name="image4"
                  onChange={handleInputChange}
                  required
              />
          </label>

          <label className='roomform-labels'>
              Image 5:
              <input className='roomform-inputs'
                  type="file"
                  name="image5"
                  onChange={handleInputChange}
                  required
              />
          </label>

          {/* Repeat this for image2, image3, image4, and image5 */}
          <button type="roomform-submit-button">Submit</button>
              </div>
            </form>
        </div>
    );
}

export default RoomForm;