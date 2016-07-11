import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Resolutions} from '../../imports/collections/resolutions.js' ; 

export default class App extends Component{

  addResolution(event){
    event.preventDefault();
    let text = ReactDOM.findDOMNode(this.refs.resolution).value.trim(); 

    Resolutions.insert({
      text:text,
      complete: false,
      createdAt: new Date() 
    });

    ReactDOM.findDOMNode(this.refs.resolution).value = ""; 
  }

  render(){
    return(
      <div>
        <h1> My resolutions</h1>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input 
            type="text" 
            ref="resolution" 
            placeholder="Get out of the zebra" 
          /> 
        </form>
      </div> 
    );
}
}


