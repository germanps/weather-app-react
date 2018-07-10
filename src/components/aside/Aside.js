import React, { Component } from 'react';
import './Aside.css'; 
import ForecastExtended from './../forecastExtended/ForecastExtended';
import ForecastItem from './../forecastItem/ForecastItem';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernas',
    'Sabado',
    'Domingo'
]

class Aside extends Component {
    renderForecastItemDay(){
        return days.map( day => <ForecastItem weekDay={day}/>);
    }
    render(){
        const city = this.props.city;
        return(
             <div className="wa-aside">
                <ForecastExtended city={city}/>
                {this.renderForecastItemDay()}
            </div>
        )
    }
};

export default Aside;