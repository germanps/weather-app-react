import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../weatherData/WeatherData';
import './ForecastItem.css';

const ForecastItem = ({ weekDay, hour, data }) => (
  <div className="wa-forecast-item">
    <h4>{weekDay}, <span>{hour}h</span></h4>
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