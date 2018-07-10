import React, { Component } from 'react';
import './ForecastExtendedDetalls.css'; 
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

class ForecastExtendedDetalls extends Component {
    renderForecastItemDay(){
        return days.map( day => <ForecastItem data={data} hour={10} weekDay={day} key={day}/>);
    }
    render(){     
      return(
            <div className="wa-forecast-extended-detalls">
              {this.renderForecastItemDay()}
          </div>
      )
    }
};

export default ForecastExtendedDetalls;