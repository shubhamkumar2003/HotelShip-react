import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HotelCard from '../../components/HotelCard/HotelCard';

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
    <div class="card-container">
     { 
     data.map((item)=>(
      <HotelCard info={item}/> 
     ))
   
    }
    </div>
  )
}
