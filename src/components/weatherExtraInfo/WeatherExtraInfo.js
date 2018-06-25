import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="wa-weather-extra-info">
        <span>{`${humidity} % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtraInfo;