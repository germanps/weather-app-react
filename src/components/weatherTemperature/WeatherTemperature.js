import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
        case 'cloud':
            return (<WeatherIcons name="cloud" size="2x" />);    
        default:
            return (<WeatherIcons name="sleet" size="2x" />);
    }
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="wa-weather-temperature">
        {getWeatherIcon(weatherState)}
        <span className="degrees">{`${temperature}C°`}</span>
    </div>
);

export default WeatherTemperature;