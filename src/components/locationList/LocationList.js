import React from 'react';
import PropTypes from 'prop-types';
import WheatherLocation from './../weatherLocation/WeatherLocation';
import './LocationList.css';

//Transformar array de strings en array de componentes
 const strToComponent = cities => (
   cities.map( city => ( <WheatherLocation city={city} key={city}/> ) )
 ); 

const LocationList = ({ cities }) => (
   <div className="wa-location-list">
      {strToComponent(cities)}
   </div>
);

LocationList.propTypes = {
   cities: PropTypes.array.isRequired,
}
export default LocationList;