import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
//import Weather from './Weather/Weather.js'
import Tile from './Tile/Tile.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h2>Steven final project</h2>
        </p>
        <Tile />
        <Tile />
      </div>
    );
  }
}

export default App;
