import React from 'react';
import './Body.scss';
//import Tile from '../Tile/Tile.js';
import Weather from '../Weather/Weather.js';
import '../Tile/Tile.scss';



const Tile=({onClick})=>(

            <div className="tile">
                <button onClick={onClick}>X</button>
                <div className="tile-weather">
                    <Weather />
                </div>
                
            </div>

);


class Body extends React.Component{

    constructor(props){
    super(props);

    this.state ={
        tiles:[{id: this.guid()}]
    };

    this.addTile = this.addTile.bind(this);
    this.removeTile = this.removeTile.bind(this);

  }//end constructor

  addTile(){
      const newTile = {tiles: this.state,
                        id:this.guid()};

    this.setState(state => ({
      tiles: [ ...state.tiles, newTile]
    }));
   
  }//addTile

  removeTile(id){
    // console.log(index);
    // const arrCopy = [...this.state.tiles];
    // arrCopy.splice(index, 1)
    // this.setState({
    //   tiles: [...arrCopy]
    // });


    this.setState(state => {
      return{
        tiles: state.tiles.map(tile => {
          if(tile.id !== id){
            return tile;
          } else {
            return { ...tile}
          }
        })
      };
    });

    this.setState(state => {
        return{
          tiles: state.tiles.filter(t => t.id !== id)
        }});

  }//removeTile



  guid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }


  render(){
      return(

        <div>


        <span><button className="addButton" onClick={this.addTile}>+</button></span>

            <div className="content">


            
            {
            this.state.tiles.map(t => <Tile key={t.id} onClick={()=>this.removeTile(t.id)}/>)
            }


            </div>
        </div>

      );
  }

}

export default Body;



















/*
import React from 'react';
import './Body.scss';
//import Tile from '../Tile/Tile.js';
import Weather from '../Weather/Weather.js';
import '../Tile/Tile.scss';



const Tile=({onClick})=>(

            <div className="tile">
                <button onClick={onClick}>X</button>
                <div className="tile-weather">
                    <Weather />
                </div>
                
            </div>

);


class Body extends React.Component{

    constructor(props){
    super(props);

    this.state ={
        tiles:[]
    };

    this.addTile = this.addTile.bind(this);
    this.removeTile = this.removeTile.bind(this);

  }//end constructor

  addTile(){
      const newTile = {tiles: this.state};

    this.setState(state => ({
      tiles: [ ...state.tiles, newTile]
    }));
   
  }//addTile

  removeTile(index){
    console.log(index);
    const arrCopy = [...this.state.tiles];
    arrCopy.splice(index, 1)
    this.setState({
      tiles: [...arrCopy]
    });
  }//removeTile

  render(){
      return(

        <div>


        <span><button className="addButton" onClick={this.addTile}>+</button></span>

            <div className="content">


            
            {
            this.state.tiles.map((t,i) => <Tile {...t} onClick={()=>this.removeTile(i)}/>)
            }


            </div>
        </div>

      );
  }

}

export default Body;*/