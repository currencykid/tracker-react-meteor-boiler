import React from 'react';
import {mount} from 'react-mounter'; 
import {MainLayout} from './layouts/MainLayout'; 
import App from './components/App';

FlowRouter.route('/', {
  name: 'Index',
  action() {
    mount(MainLayout, {
      content: <App /> 
    })
  }
});
