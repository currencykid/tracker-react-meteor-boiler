import React from 'react';
import {mount} from 'react-mounter'; 
import {MainLayout} from './layouts/MainLayout'; 
import ResolutionsWrapper from './components/ResolutionsWrapper';
import ResolutionDetail from './components/resolutions/ResolutionDetail';
import About from './components/About'; 

FlowRouter.route('/', {
  name: 'Index',
  action() {
    mount(MainLayout, {
      content: <ResolutionsWrapper  /> 
    })
  }
});

FlowRouter.route('/about', {
  name: 'About',
  action() {
    mount(MainLayout, {
      content: <About /> 
    })
  }
});

FlowRouter.route('/resolutions/:id', {
  name: 'SingleResolution',
  action(params) {
    mount(MainLayout, {
      content: <ResolutionDetail id={params.id} /> 
    })
  }
});
