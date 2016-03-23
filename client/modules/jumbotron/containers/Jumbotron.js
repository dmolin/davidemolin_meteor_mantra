import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import Spinner from '../../core/components/Spinner.jsx';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('projects.featured').ready()) {
    const projects = Collections.Projects.find({featured:true}).fetch();
    onData(null, {projects});
  }
};

export default composeAll(
  composeWithTracker(composer, Spinner),
  useDeps()
)(Jumbotron);