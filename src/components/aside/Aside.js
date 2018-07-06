import React, { Component } from 'react';
import './Aside.css'; 
import ForecastExtended from './../forecastExtended/ForecastExtended';
import ForecastItem from './../forecastItem/ForecastItem';

class Aside extends Component {
    render(){
        const city = this.props.city;
        return(
             <div className="wa-aside">
                <ForecastExtended city={city}/>
                <ForecastItem weekDay={'Lunes'}/>
            </div>
        )
    }
};

export default Aside;