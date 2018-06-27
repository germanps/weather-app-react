import React from 'react';
import Location from './../location/Location';
import WeatherData from './../weatherData/WeatherData';
import './WeatherLocation.css';

const WheatherLocation = () => (
   <div className="wa-weather-location">
      <Location city={'Bilbao'}/>
      <WeatherData />
   </div>
);

export default WheatherLocation;