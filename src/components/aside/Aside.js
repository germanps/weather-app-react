import React, { Component } from 'react';
import asideImage from './../../content/img/aside.png';
import './Aside.css'; 
import ForecastExtended from './../forecastExtended/ForecastExtended';

class Aside extends Component {
    render(){
        const city = this.props.city;
        return(
             <div className="wa-aside">
                <ForecastExtended city={city}/>
                <img src={asideImage} alt="imagen aside" />
            </div>
        )
    }
};

export default Aside;