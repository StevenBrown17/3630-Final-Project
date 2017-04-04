import React, { Component } from 'react';
import Weather from '../Weather/Weather.js';
import './Tile.scss';


class Tile extends Component{


    


    render(){

        window.onload = function(){
    document.getElementById('close').onclick=function(){
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
            };
        };


        return(

            <div className="tile">
                
                <div className="tile-weather">
                    <span id='close'>x</span>
                    <Weather />
                </div>
                

            </div>


        )
    }
}






export default Tile;