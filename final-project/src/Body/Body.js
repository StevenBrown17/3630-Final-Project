import React from 'react';
import './Body.scss';
import Tile from '../Tile/Tile.js';
import Contour from '../Contour/Contour.js'


class Body extends React.Component{

    constructor(props){
    super(props);

    this.state = {
        tiles:[]
    };

    this.addTile = this.addTile.bind(this);

  }


  addTile(){
      const newTile = <Tile/>;

    this.setState(state => ({
      tiles: [ ...state.tiles, newTile]
    }));
   
  }

  render(){
      return(

        <div>

        <span><button className="addButton" onClick={this.addTile}>+</button></span>

            <div className="content">


            {
            this.state.tiles.map(t =>  <Tile />)
            }



            </div>
        </div>

      );
  }


}


export default Body;