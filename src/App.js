import React, { Component } from 'react';
import logo from './content/img/header.png';
import Aside from './components/aside/Aside';
import WeatherLocation from './components/weatherLocation/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wa-app ">
        <header className="wa-app-header">
          <img src={logo} title="header-image" alt="imagen cabecera"/>
        </header>
        <div className="wa-app-intro container-fluid">
          <div className="row">
            <div className="col-md-9">
              <h2>Weather App</h2>
              <WeatherLocation />
            </div>
            <div className="col-md-3">
              <Aside />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
