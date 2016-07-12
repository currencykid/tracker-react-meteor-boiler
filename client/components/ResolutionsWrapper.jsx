import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Resolutions} from '../../imports/collections/resolutions.js' ; 
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './resolutions/ResolutionsForm'; 
import ResolutionSingle from './resolutions/ResolutionSingle'; 

export default class ResolutionsWrapper extends TrackerReact(Component){

  constructor(){
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.resolutions.stop();  
  }

  resolutions(){
    return Resolutions.find().fetch(); 
  }


  render(){
    return(
      <div>
        <h1> My resolutions</h1>
        <ResolutionsForm /> 
        <ul className="resolutions">
          {this.resolutions().map( (resolution) => {
          return <ResolutionSingle key={resolution._id} resolution={resolution} />  
          }  )}
        </ul>
      </div> 
    );
}
}


