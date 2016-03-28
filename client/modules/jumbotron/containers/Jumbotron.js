import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import Spinner from '../../core/components/Spinner.jsx';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  if(Meteor.subscribe('projects.featured').ready()) {
    const projects = Collections.FeaturedProjects.find({}, {sort:{priority:-1, createdAt:-1}}).fetch();
    onData(null, {projects, bgColor:LocalState.get('JUMBOTRON_COLOR') });
  }
};

export const depsMapper = (context, actions) => ({
  slideTo: actions.jumbotron.slideTo,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Spinner),
  useDeps(depsMapper)
)(Jumbotron);