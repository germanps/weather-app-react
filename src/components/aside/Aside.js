import React, { Component } from 'react';
import './Aside.css'; 
import ForecastExtended from './../forecastExtended/ForecastExtended';
import ForecastItem from './../forecastItem/ForecastItem';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'sun',
    wind: 'normal'
  }

class Aside extends Component {
    renderForecastItemDay(){
        return days.map( day => <ForecastItem data={data} hour={10} weekDay={day} key={day}/>);
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