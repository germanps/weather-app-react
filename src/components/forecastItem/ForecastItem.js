import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../weatherData/WeatherData';
import './ForecastItem.css';

const ForecastItem = ({ weekDay, hour, data }) => (
  <div className="wa-forecast-item">
    <p>{weekDay} <span> Hora: {hour}</span></p>
    <WeatherData data={data}/>
  </div>
);

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default ForecastItem;