import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from './../../services/transformForecast';
import './ForecastExtended.css'; 
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
const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = { forecastData: null }
    }
    
    //sólo se ejecutara una vez después del renderizado del componente
    componentDidMount(){ 
        this.updateCity(this.props.city);
    }

    //Se ejecuta cada vez que hay una actualización de las propiedades(excepto la primera vez que se ejecuta el componente)
    componentWillReceiveProps(nextProps){
        //si viene una city nueva se vuelve a llamar al updateCity con la nueva ciudad
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    //Actualiza el fetch con la ciudad nueva que viene por props
    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData: forecastData})
            }
        )
    }
    renderForecastItemDay(forecastData){
        return forecastData.map( 
            forecastData => <ForecastItem  
                                weekDay={forecastData.weekDay} 
                                hour={forecastData.hour}  
                                data={forecastData.data} 
                                key={`${forecastData.weekDay}${forecastData.hour}`}
                            />);
    }
    renderProgress = () => {
        return <h4>Cargando...</h4>;
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
                        this.renderForecastItemDay(forecastData) :
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