import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './content/img/header.png';
import Aside from './components/aside/Aside';
import LocationList from './components/locationList/LocationList';
import './App.css';

const cities = [
  'Barcelona',
  'Bilbao',
  'Sevilla',
  'Bogota',
  'Moscow',
  'Montreal',
  'Geneva',
  'Tokyo',
  'New york'
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log('handleSelectionLocation');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="wa-app ">
          <header className="wa-app-header">
            <img src={logo} title="header-image" alt="imagen cabecera"/>
          </header>
          <div className="wa-app-intro container-fluid">
            <div className="row">
              <div className="col-md-9">
                <h2>Weather App</h2>
                <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
              </div>
              <div className="col-md-3">
                <Aside />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
