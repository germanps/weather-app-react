import React, { Component } from 'react';
import Location from './../location/Location';
import WeatherData from './../weatherData/WeatherData';
import { SUN } from './../../constants/weathers';
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
    }
    getWeatherState = (weather) => {
        return SUN;
    }
    getData = (weather_data) => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);
        const data = {
            humidity: humidity,
            temperature: temp,
            weatherState: weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }
    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = this.getData(weather_data);
            this.setState({ data : data});
            this.setState({ data });
            debugger;
            console.log(weather_data);
        });
        /*
        this.setState({
            data: data2//solo pasamos la propiedad nueva que se modifica
        });*/
        console.log('Actualizado');
        
    }
    render = () => {
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