import React, { Component } from 'react';
import Location from './../location/Location';
import WeatherData from './../weatherData/WeatherData';
import { SUN } from './../../constants/weathers';
import './WeatherLocation.css';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 60,
    wind: '20 m/s'
}
class WheatherLocation extends Component{
    render = () => (
        <div className="wa-weather-location">
            <Location city={'Bilbao'}/>
            <WeatherData data={data}/>
        </div>
    );
}

export default WheatherLocation;