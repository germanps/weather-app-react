import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ForecastExtended.css';

class ForecastExtended extends Component {
    render() {
        const city = this.props.city;
        return(
            <div className="wa-forecast-extended">
                {city === null ? 
                    <h2>ForecastExtended for: <span className="we"> Selecciona una ciudad </span></h2> :
                    <h2>ForecastExtended for: <span className=""> {city} </span></h2>} 
            </div>
        );
    }
}
ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;