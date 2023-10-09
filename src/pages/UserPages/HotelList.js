import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios'; // For making HTTP requests
import HotelCard from './HotelCard';

export default function HotelList() {
  const {state,city}=useParams();
  const [data,setData]=useState([]);
  useEffect(()=>{
    getHotelDetails();
  
    },[]);
    const getHotelDetails=async()=>{
      try{
       const response=await axios.get(`http://127.0.0.1:5000/search/${state}/${city}`);
       setData(response.data);
        console.log(response.data);
      }
      catch(error)
      {
        console.error('Error fetching data:', error);
      }
    }
  return (
    
    <div>
      welcome to Hotels lists
     { <HotelCard info={data[1]}/> }
     
    </div>
  )
}
