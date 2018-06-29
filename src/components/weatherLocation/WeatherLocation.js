import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './../location/Location';
import WeatherData from './../weatherData/WeatherData';
import TrasnforWeather from './../../services/transformWeather';
import './WeatherLocation.css';

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";

class WheatherLocation extends Component{
    constructor({ city }){
        super();
        this.state = {
            city,
            data: null
        }
        //console.log('Constructor');
    }
   

    //Solo se ejecutará una vez (podriamos poner cualquier inizialización del componente)
    componentWillMount(){
        //console.log('componentWillMount');
       //inicializamos con los datos que vienen de la api
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&APPID=${api_key}`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = TrasnforWeather(weather_data);
            /* this.setState({ data : data}); */
            this.setState({ data });
        });      
    }

    //Se ejecuta después del render
    componentDidMount(){
        //console.log("componentDidMount");
    }

    //Se ejecuta cada vez que el control se actualiza
    componentWillUpdate(){
        //console.log("componentWillUpdate");
    }

    //Se ejecuta después del renderizado
    componentDidUpdate() {
        //console.log("componentDidUpdate");
    }
    
    render = () => {
        //console.log('Render')
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state; //destructuring
       
        return(        
            <div className="wa-weather-location" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherData data={ data }/> : <CircularProgress size={20} thickness={2} />}
            </div>
        )
    };
}

WheatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WheatherLocation;