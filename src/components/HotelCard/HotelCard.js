import React from 'react'
import './HotelCard.css';
const HotelCard = ({info}) => {
 console.log(info);
  // const {image,name,city,state,available_rooms,price_per_night,amenities}=info;
  return (
    
    <div class="main property-card">
        <div class="img-box">
        <img alt="" width={232} height={236}  src={`data:image/png;charset=utf-8;base64,${info?.image}`}></img>
        </div>
       <div class="name-address property-info property-section-info">
       <h1 class="hotel-name">{info?.name}</h1>
        <h5 class="city">{info?.city}</h5>
        <h7 class="state">{info?.state}</h7>
       </div>
        <div class="price-rooms"> 
        <h5 class="rooms-avail">Rooms:{info?.available_rooms}</h5>

        <h5 class="amenities">Amenities: {info?.amenities}</h5>
        <h7 class="price_per_night">Price: {info?.price_per_night}</h7>
        </div>
       </div>
    
  )
}

export default HotelCard;