import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Resolutions} from '../../../imports/collections/resolutions.js' ; 

export default class ResolutionsForm extends Component{
  addResolution(event){
    event.preventDefault();
    let text = ReactDOM.findDOMNode(this.refs.resolution).value.trim(); 

    if(text){

      Meteor.call('addResolution', text, (error,data)=>{
        if(error){
          Bert.alert({
            title: 'Must be logged in to do that',
            message: 'Please sign in to add a resolution',
            type: 'info',
            style: 'fixed-top',
            icon: 'fa-sign-in'
          });
        } else {
          ReactDOM.findDOMNode(this.refs.resolution).value = ""; 
        }
      });
    }

  }

  render(){
    return(
      <div>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input 
            type="text" 
            ref="resolution" 
            placeholder="ex: Eat more zebras" 
          /> 
        </form>
      </div> 
    );
}
}
