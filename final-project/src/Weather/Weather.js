import React from "react";
import api from './api.js'


class Weather extends React.Component {

  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEnter = this.onEnter.bind(this);

    this.state={
      city: '',
      temp: '',
      cond: '',
      value: ''

    }
  }

  onChange(event){
        this.setState({
            value: event.target.value
        });
    }

    onEnter(event){
        if(event.keyCode === 13){
            this.onSubmit();
        }
    }

  onSubmit(){

      //this.props.submitAction(this.state);

      api.getWeather(this.state.value).then((res)=>{
      this.setState({
        city: res.name,
        temp: res.main.temp,
        cond: res.weather[0].description
      })
    });
  
    
    this.setState({value:''}); 
  }

  // componentWillMount(){
  //   api.getWeather(10002).then((res)=>{
  //     this.setState({
  //       city: res.name,
  //       temp: res.main.temp,
  //       cond: res.weather[0].description
  //     })
  //   });
  // }


  render(){
    // console.log("city: ", this.state.city);
    // console.log("temp: ", this.state.temp);
    // console.log("cond: ", this.state.cond);

    return(

      <div>
        <h1>{this.state.city}</h1>
        <h2>Temp: {this.state.temp}</h2>
        <h2>Conditions: {this.state.cond}</h2>

        <input 
        type="text" 
        onChange={this.onChange} 
        onKeyDown={this.onEnter} 
        value={this.state.value}
        />
        <button onClick={this.onSubmit}>Submit</button>

      </div>

    );

  }




}



export default Weather