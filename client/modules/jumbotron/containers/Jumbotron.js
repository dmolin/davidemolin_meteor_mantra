import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import Spinner from '../../core/components/Spinner.jsx';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('projects.featured').ready()) {
    const projects = Collections.FeaturedProjects.find({}, {sort:{priority:-1, createdAt:-1}}).fetch();
    onData(null, {projects});
  }
};

export default composeAll(
  composeWithTracker(composer, Spinner),
  useDeps()
)(Jumbotron);