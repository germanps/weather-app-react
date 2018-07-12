import React, { Component } from 'react';
import './ForecastExtendedDetalls.css'; 
import ForecastItem from './../forecastItem/ForecastItem';

/* const days = [
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
  } */

class ForecastExtendedDetalls extends Component {
    constructor(){
        super();
        this.state = { forecastData: null }
    }
    renderForecastItemDay(){
        return "Render items";
        //return days.map( day => <ForecastItem data={data} hour={10} weekDay={day} key={day}/>);
    }
    renderProgress = () => {
        return <h4>cargando pronostico extendido</h4>;
    }
    render(){    
        const { city } = this.props; 
        const { forecastData } = this.state;
        return(
            <div className="wa-forecast-extended-detalls">
              {forecastData ? 
                this.renderForecastItemDay() :
                this.renderProgress()
              }
            </div>
        )
    }
};

export default ForecastExtendedDetalls;