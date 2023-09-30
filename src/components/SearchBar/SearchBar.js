import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'; // Import Axios
import './SearchBar.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import { FaUser, FaChild, FaBed } from 'react-icons/fa';


const SearchBar = () => {
  const navigate = useNavigate();
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [source, setSource] = useState(null); // Axios cancel token source
  const [numRooms, setNumRooms] = useState(1); // defaulting to one room
  const [numAdults, setNumAdults] = useState(1); // defaulting to one adult
  const [numChildren, setNumChildren] = useState(0); // defaulting to zero children
  const [showGuestDetails, setShowGuestDetails] = useState(false);


  // Function to load cities based on the selected state
  const loadCities = async () => {
    if (selectedState) {
      // Cancel previous request if it's still pending
      if (source) {
        source.cancel('Request canceled');
      }

      // Create a new cancel token source
      const newSource = axios.CancelToken.source();
      setSource(newSource);

      try {
        const response = await axios.get(`http://127.0.0.1:5000/nameOf/${selectedState.value}/district`, {
          cancelToken: newSource.token,
        });

        const cityData = response.data[0].city.split(',');
        const formattedCityData = cityData.map((city) => ({
          value: city.trim(),
          label: city.trim(),
        }));
        setCityOptions(formattedCityData);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error loading cities:', error);
        }
      }
    } else {
      setCityOptions([]);
    }
  };
  const toggleGuestDetails = () => {
    setShowGuestDetails(!showGuestDetails);
  };
  // Date restrictions
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      selectedState,
      selectedCity,
      checkInDate,
      checkOutDate,
    });
    const dataToSend = {
      state: selectedState?.value,
      city: selectedCity?.value,
      checkInDate,
      checkOutDate, numRooms,
      numAdults,
      numChildren
    };
    try {
      const sendData = await axios.get(`http://localhost:5000/search/${selectedState.value}/${selectedCity.value}`, dataToSend)
      console.log(dataToSend)
    }
    catch (error) {
      console.log("Error in sending data to backend", error)
    }
    // Ensure that both state and city are selected before navigating
    if (selectedState && selectedCity) {
      navigate(`/nameOf/${selectedState.value}/${encodeURIComponent(selectedCity.value)}/district`);
    }
  };

  // Fetch the list of states from your backend API using Axios
  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/name/state')
      .then((response) => {
        const stateData = response.data.map((state) => ({
          value: state.state,
          label: state.state,
        }));
        setStateOptions(stateData);
      })
      .catch((error) => {
        console.error('Error loading states:', error);
      });
  }, []);

  // Watch for changes in selectedState and load cities accordingly
  useEffect(() => {
    loadCities();
  }, [selectedState]);

  return (
    <div className="search-main">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="searchbar-heading">SEARCH HOTEL</div>
          <div className="searchinput">
            <div className="search-input">
              <label>
                <Select className='search-select'
                  placeholder='Select State'
                  options={stateOptions}
                  value={selectedState}
                  onChange={(selectedOption) => {
                    setSelectedState(selectedOption);
                    setSelectedCity(null);
                  }}
                  isClearable={true}
                />
              </label>
            </div>
            <div className="search-input">
              <label>
                <Select className='search-select'
                  placeholder='Select City'
                  options={cityOptions}
                  value={selectedCity}
                  onChange={(selectedOption) => setSelectedCity(selectedOption)}
                  isClearable={true}
                />
              </label>
            </div>
          </div>
          <div  >
            <button className="member-details" onClick={toggleGuestDetails}>{ <FaUser size={15} />} Adult {numAdults} {<FaBed size={15} />} Room {numRooms} {<FaChild size={15} />} Children {numChildren}</button>

            {showGuestDetails && (
              <div>
                <div className="guest-input">
                  <label>
                    Rooms:
                    <input
                      type="number"
                      value={numRooms}
                      onChange={(e) => setNumRooms(Math.max(1, e.target.value))}
                      min="1"
                    />
                  </label>
                </div>
                <div className="guest-input">
                  <label>
                    Adults:
                    <input
                      type="number"
                      value={numAdults}
                      onChange={(e) => setNumAdults(Math.max(1, e.target.value))}
                      min="1"
                    />
                  </label>
                </div>
                <div className="guest-input">
                  <label>
                    Children:
                    <input
                      type="number"
                      value={numChildren}
                      onChange={(e) => setNumChildren(Math.max(0, e.target.value))}
                      min="0"
                    />
                  </label>
                </div>
              </div>
            )}
          </div>



          <div className="checkin-checkout">
            <div className="checkin">
              <label className='checkin-label'>Check-in Date:</label>
              <br />
              <DatePicker className='datepicker'
                selected={checkInDate}
                onChange={(date) => {
                  if (date >= today) {
                    setCheckInDate(date);
                    if (date >= checkOutDate) {
                      setCheckOutDate(new Date(date));
                    }
                  }
                }}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="checkout">
              <label className='checkout-label'>Check-out Date:</label>
              <br />
              <DatePicker className='datepicker'
                selected={checkOutDate}
                onChange={(date) => {
                  if (date >= tomorrow) {
                    setCheckOutDate(date);
                  }
                }}
                minDate={checkInDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div >
            <button className="searchbutton" type="submit">Search For Hotels</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;