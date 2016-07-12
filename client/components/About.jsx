import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

export default class About extends Component{

  setVar(){
    Session.set('Meteor.loginButtons.dropdownVisible', 'true');
  }

  render(){
    return(
          <ReactCSSTransitionGroup
          component="div"
          className="resolutions"
          transitionName="route"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}
          > 
        <h1>About us</h1>
        <p>
          Meditation kickstarter pop-up, austin green juice listicle meggings umami 90's fap flexitarian meh knausgaard franzen. Single-origin coffee artisan man bun, fixie irony heirloom cray fingerstache actually humblebrag leggings taxidermy cold-pressed try-hard. Direct trade iPhone skateboard vice bespoke. Salvia gentrify polaroid, biodiesel pop-up meggings blue bottle chia leggings food truck tofu raw denim distillery. Lomo selvage tousled, neutra messenger bag ethical four dollar toast food truck cornhole next level forage sartorial. Health goth cliche keffiyeh, bespoke celiac organic cardigan. Taxidermy cred ramps, before they sold out yr try-hard umami sustainable deep v gluten-free authentic.
        </p>
        <button onClick={this.setVar}>Get started!</button>
      </ReactCSSTransitionGroup> 
    );
  }
} 
