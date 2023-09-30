import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Dashboard() {

  const[data,setData]=useState({})

  const user_details = localStorage.getItem('data');
  const tokenData = JSON.parse(user_details); // Parse the token into an object
  const user_email = tokenData ? tokenData.email : '';

  console.log(user_email)
  console.log(tokenData)
  // useEffect(() => {
  //   const fetchData = async () => {

  //     try {
  //       let response = await axios.post('http://localhost:5000/profile', user_email);


  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  

  return (
    <div className='dashboard'>
      <div className="section-1">
      
      
      </div>
      <div className="section-2">
      
      <h1>{tokenData.name}</h1>
      <h1>{tokenData.email}</h1>
      <h1>{tokenData.phone}</h1>
      </div>
    </div>
  )
}
