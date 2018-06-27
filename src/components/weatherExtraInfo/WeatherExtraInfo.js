import React from 'react';
import PropTypes from 'prop-types';
import './WeatherExtraInfo.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="wa-weather-extra-info">
        <span>{`H ${humidity} % `}</span>
        <span>{`V ${wind} `}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;