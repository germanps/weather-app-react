import React from 'react';
import PropTypes from 'prop-types';
import './ForecastItem.css';
const ForecastItem = ({ weekDay }) => (
  <div class="wa-forecast-item">{weekDay}</div>
);

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
}

export default ForecastItem;