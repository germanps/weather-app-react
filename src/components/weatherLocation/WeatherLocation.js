import React, { Component } from 'react';
import Location from './../location/Location';
import WeatherData from './../weatherData/WeatherData';
import { SUN } from './../../constants/weathers';
import TrasnforWeather from './../../services/transformWeather';
import './WeatherLocation.css';

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";
const city = "Barcelona";
const api_weather = `${url}?q=${city}&APPID=${api_key}`;

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 60,
    wind: '20 m/s'
}

class WheatherLocation extends Component{
    constructor(){
        super();
        this.state = {
            city: 'Barcelona',
            data: data
        }
        console.log('Constructor');
    }
   
    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = TrasnforWeather(weather_data);
            this.setState({ data : data});
            this.setState({ data });
            console.log(weather_data);
        });       
    }

    //Solo se ejecutará una vez (podriamos poner cualquier inizialización del componente)
    componentWillMount(){
        console.log('componentWillMount');
    }

    //Se ejecuta después del render
    componentDidMount(){
        console.log("componentDidMount");
    }

    //Se ejecuta cada vez que el control se actualiza
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    //Se ejcuta después del renderizado
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    
    render = () => {
        console.log('Render')
        const { city, data } = this.state; //destructuring
       
        return(        
            <div className="wa-weather-location">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    };
}

export default WheatherLocation;