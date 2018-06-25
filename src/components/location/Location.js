import React from 'react';
import PropTypes from 'prop-types';
import './Location.css';

const Location = ({ city }) => (//Destruccturing (se llaman igual la constante que la prop que viene)
    <div className="wa-location">
        <h3>{city}</h3>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;