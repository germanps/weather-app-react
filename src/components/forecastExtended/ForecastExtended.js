import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ForecastExtended.css'; 
//import ForecastItem from './../forecastItem/ForecastItem';

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
const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = { forecastData: null }
    }
    
    //sólo se ejecutara una vez después del renderizado del componente
    componentDidMount(){ 
        console.log('El componente aun no está disponible en el DOM');
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
            }
        )
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
            <div className="wa-forecast-extended">
                <div className="wa-forecast-extended-title">
                    {city === null ? 
                        <h2>ForecastExtended for: <span className="we"> Selecciona una ciudad </span></h2> :
                        <h4> {city} </h4>
                    } 
                </div>
                <div className="wa-forecast-data">
                    {forecastData ? 
                        this.renderForecastItemDay() :
                        this.renderProgress()
                    }
                </div>
            </div>
        )
    }
};

ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;