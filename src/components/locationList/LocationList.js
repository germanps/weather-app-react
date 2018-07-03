import React from 'react';
import PropTypes from 'prop-types';
import WheatherLocation from './../weatherLocation/WeatherLocation';
import './LocationList.css';

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick');
    onSelectedLocation(city);
  };
  //Transformar array de strings en array de componentes
  const strToComponent = cities => (
    cities.map( city => ( 
      <WheatherLocation 
        key={city}
        city={city} 
        onWeatherLocationClick = { () => handleWeatherLocationClick(city)}
      /> 
      ) 
    )
  ); 

  return(
    <div className="wa-location-list">
        <h2>Weather App</h2>
        {strToComponent(cities)}
    </div>
  );
};

LocationList.propTypes = {
   cities: PropTypes.array.isRequired,
   onSelectedLocation: PropTypes.func,
}
export default LocationList;