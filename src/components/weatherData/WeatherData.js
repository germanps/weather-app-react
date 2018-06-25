import React from 'react';
import './WeatherData.css';
import WeatherTemperature from './../weatherTemperature/WeatherTemperature';
import WeatherExtraInfo from './../weatherExtraInfo/WeatherExtraInfo';
import { CLOUD } from './../../constants/weathers';

const WeatherData = () => (
    <div className="wa-weather-data">
        <WeatherTemperature temperature={20} weatherState={CLOUD} />
        <WeatherExtraInfo humidity={80} wind={'10/s'}/>
    </div>
);

export default WeatherData;
