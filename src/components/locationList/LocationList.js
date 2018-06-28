import React from 'react';
import WheatherLocation from './../weatherLocation/WeatherLocation';

const LocationList = () => (
   <div className="wa-location-list">
      <WheatherLocation city={"Montreal"} />
      <WheatherLocation city={"Barcelona"} />
      <WheatherLocation city={"Moscou"} />
      <WheatherLocation city={"Geneva"} />
      <WheatherLocation city={"New york"} />
   </div>
);

export default LocationList;