import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './../location/Location';
import WeatherData from './../weatherData/WeatherData';
import TrasnforWeather from './../../services/transformWeather';
import './WeatherLocation.css';

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";
const city = "Barcelona";
const api_weather = `${url}?q=${city}&APPID=${api_key}`;

class WheatherLocation extends Component{
    constructor(){
        super();
        this.state = {
            city: 'Barcelona',
            data: null
        }
        console.log('Constructor');
    }
   
    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = TrasnforWeather(weather_data);
            /* this.setState({ data : data}); */
            this.setState({ data });
            console.log(weather_data);
        });       
    }

    //Solo se ejecutará una vez (podriamos poner cualquier inizialización del componente)
    componentWillMount(){
        console.log('componentWillMount');
        this.handleUpdateClick();
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
        console.log('Render')
        const { city, data } = this.state; //destructuring
       
        return(        
            <div className="wa-weather-location">
                <Location city={city}/>
                {data ? <WeatherData data={ data }/> : <CircularProgress size={20} thickness={2} />}
            </div>
        )
    };
}

export default WheatherLocation;