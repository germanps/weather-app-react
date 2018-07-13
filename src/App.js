import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './content/img/header.png';
import ForecastExtended from './components/forecastExtended/ForecastExtended';
import LocationList from './components/locationList/LocationList';
import './App.css';

const cities = [
  'Barcelona, es',
  'Olesa de Montserrat, es',
  'Vielha, es',
  'Rubi, es',
  'Malaga, es',
  'Bilbao, es',
  'Sevilla, es',
  'Madrid, es',
  'Mexico, mx',
  'Moscow, ru',
  'Montreal, ca',
  'Geneva, ch',
  'Tokyo, jp',
  'New york, us'
];

class App extends Component {
  constructor(){
    super();
    this.state = { city: null };
  }
  handleSelectionLocation = city => {
    this.setState({ city: city });
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <div className="wa-app ">
          <header className="wa-app-header">
            <img src={logo} title="header-image" alt="imagen cabecera"/>
          </header>
          <div className="wa-app-intro container-fluid">
            <div className="row">
              <div className="col-md-8">
                <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
              </div>
              <div className="col-md-4">
                <div className="wa-forecast-aside">
                  <h2>Forecast Extended</h2>
                  {city ? <ForecastExtended city={city} /> : null} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
