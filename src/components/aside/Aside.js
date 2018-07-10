import React, { Component } from 'react';
import './Aside.css'; 
import ForecastExtended from './../forecastExtended/ForecastExtended';
import ForecastExtendedDetalls from './../forecastExtendedDetalls/ForecastExtendedDetalls'


class Aside extends Component {
    render(){
        const city = this.props.city;
        return(
             <div className="wa-aside">
                <ForecastExtended city={city}/>
                <ForecastExtendedDetalls />
            </div>
        )
    }
};

export default Aside;