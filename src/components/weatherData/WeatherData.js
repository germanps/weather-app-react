import React from 'react';
import './WeatherData.css';
import WeatherTemperature from './../weatherTemperature/WeatherTemperature';
import WeatherExtraInfo from './../weatherExtraInfo/WeatherExtraInfo';

const WeatherData = () => (
    <div className="wa-weather-data">
        <WeatherTemperature />
        <WeatherExtraInfo humidity={80} wind={'10/s'}/>
    </div>
);

export default WeatherData;
