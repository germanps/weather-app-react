import React, { Component } from 'react';
import Location from './../location/Location';
import WeatherData from './../weatherData/WeatherData';
import { SUN, WINDY } from './../../constants/weathers';
import './WeatherLocation.css';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 60,
    wind: '20 m/s'
}
const data2 = {
    temperature: 50,
    weatherState: WINDY,
    humidity: 20,
    wind: '50 m/s'
}
class WheatherLocation extends Component{
    constructor(){
        super();
        this.state = {
            city: 'Bilbao',
            data: data
        }
    }
    handleUpdateClick = () => {
        this.setState({
            city: 'Bilbao',
            data: data2
        });
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