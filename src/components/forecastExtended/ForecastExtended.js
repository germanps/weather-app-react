import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ForecastExtended.css';

class ForecastExtended extends Component {
    render() {
        const city = this.props.city;
        return(
            <div className="we-forecast-extended">
                {city === null ? 
                    <h2>ForecastExtended for: Selecciona una ciudad</h2> :
                    <h2>ForecastExtended for: {city}</h2>} 
            </div>
        );
    }
}
ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;