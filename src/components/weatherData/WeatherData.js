import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './../weatherTemperature/WeatherTemperature';
import WeatherExtraInfo from './../weatherExtraInfo/WeatherExtraInfo';
import './WeatherData.css';

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data; //destructuring
    return(
        <div className="wa-weather-data">
            <WeatherTemperature temperature={temperature} weatherState={weatherState} />
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    )
};
//Validación typo forma(shape)
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;
