import React, { Component } from 'react';
import logo from './content/img/header.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wa-app">
        <header className="wa-app-header">
          <img src={logo} title="header-image" alt="imagen cabecera"/>
          <h1 className="wa-apptitle" >SBNET-Weather</h1>
        </header>
        <div className="wa-app-intro container-fluid">
          <p>prueba</p>
        </div>
      </div>
    );
  }
}

export default App;
