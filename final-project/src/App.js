import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
//import Weather from './Weather/Weather.js'
// import Tile from './Tile/Tile.js';
// import Contour from './Contour/Contour.js'
import Body from './Body/Body.js';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        
          
          <Body />

      </div>
    );
  }
}

export default App;
