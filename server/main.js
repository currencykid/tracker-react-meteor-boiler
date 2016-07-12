import { Meteor } from 'meteor/meteor';
import {Resolutions} from  '../imports/collections/resolutions'; 

console.log("Starting server"); 

Meteor.startup(() => {
  Meteor.publish("allResolutions", function(){
    return Resolutions.find(); 
  });

  Meteor.publish("userResolutions", function(){
    return Resolutions.find({ user: this.userId }); 
  });
});
