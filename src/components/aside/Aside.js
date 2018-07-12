import React, { Component } from 'react';
import './Aside.css'; 
import ForecastExtendedHeader from './../forecastExtendedHeader/ForecastExtendedHeader';
import ForecastExtendedDetalls from './../forecastExtendedDetalls/ForecastExtendedDetalls'


class Aside extends Component {
    render(){
        const city = this.props.city;
        return(
             <div className="wa-aside">
                <ForecastExtendedHeader city={city}/>
                <ForecastExtendedDetalls city={city}/>
            </div>
        )
    }
};

export default Aside;