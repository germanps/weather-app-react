import React from 'react';
import PropTypes from 'prop-types';
import './WeatherExtraInfo.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="wa-weather-extra-info">
        <span>{`${humidity} % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;