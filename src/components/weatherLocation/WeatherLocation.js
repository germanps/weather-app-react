import React from 'react';
import Location from './../location/Location';
import './WeatherLocation.css';

const WheatherLocation = () => (
   <div className="col-md-9 wa-weather-location">
      <h2>Weather App</h2>
      <Location />
   </div>
);

export default WheatherLocation;