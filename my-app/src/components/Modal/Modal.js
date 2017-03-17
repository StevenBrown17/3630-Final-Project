import React from 'react';
import './Modal.css';
import Weather from '../Weather/Weather.js'

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onToggle();
    }

    render(){
        return(
            <div className={!this.props.visible ? 'modal-closed': ''}>
            <div className="modal-container"></div>
                <div className="modal">
                    <div className="modal-header">
                        This is the popup
                    </div>
                    
                    <div className="modal-footer" >
                        <Weather />
                        <button onClick={this.handleClick}>
                            close
                        </button>
                    </div>
                
                
                </div>
            </div>
        )

    }
}


export default Modal;