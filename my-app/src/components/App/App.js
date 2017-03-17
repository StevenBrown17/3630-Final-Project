import React, { Component } from 'react';
//import logo from './logo.svg';
import slinky from './slinky.gif';
import './App.css';
import Weather from '../Weather/Weather.js'
import Modal from '../Modal/Modal.js'

class App extends Component {

constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
}




toggleOpen(){
    this.setState((s) => ({
      modalOpen: !s.modalOpen
    }));
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={slinky} className="slinky" alt="slinky" height="100" />
          <h2>Stevens Final Project</h2>
        </div>
        <div className="App-intro">
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <button onClick={this.toggleOpen}>
            Open Modal
          </button>
        </div>

        <div>
          <Modal 
            visible={this.state.modalOpen}
            onToggle={this.toggleOpen}
            >
          </Modal>
        </div>
        {/*<div>
          <Modal 
            visible={this.state.modalOpen}
            onToggle={this.toggleOpen}
            >
          </Modal>
        </div>*/}


      </div>
    );
  }
}
//<img src={logo} className="App-logo" alt="logo" />
export default App;
