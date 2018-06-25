import React from 'react';
import './Location.css';

const Location = ({ city, valor }) => (//Destruccturing (se llaman igual la constante que la prop que viene)
    <div className="wa-location">
        <h3>{city}</h3>
    </div>
);

export default Location;