import React, { Component } from 'react';
import logo from './content/img/header.png';
import Aside from './components/aside/Aside';
import WeatherLocation from './components/WeatherLocation';
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
            <WeatherLocation />
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
