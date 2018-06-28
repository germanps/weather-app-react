import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLER } from './../../constants/weathers';
import './WeatherTemperature.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        case THUNDER:
            return "thunderstorm";
        case DRIZZLER:
            return "day-showers";
        default:
            return "day-rain-mix";
    }
}

const getWeatherIcon = weatherState => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x" />)
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="wa-weather-temperature">
        {getWeatherIcon(weatherState)}
        <span className="degrees">{`${temperature}C°`}</span>
    </div>
);

//Validacion con proptypes
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;