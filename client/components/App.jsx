import React, {Component} from 'react';

export default class App extends Component{

  addResolution(event){
    event.preventDefault();
    let text = this.refs.resolution.value.trim(); 
    console.log(text); 
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


