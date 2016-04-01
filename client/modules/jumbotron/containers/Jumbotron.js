import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import Spinner from '../../core/components/Spinner.jsx';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const onPropsChange = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  if(Meteor.subscribe('projects.featured').ready()) {
    const projects = Collections.FeaturedProjects.find({}, {sort:{priority:-1, createdAt:-1}}).fetch() || [];
    onData(null, {projects, currentIndex: LocalState.get('JUMBOTRON_CURRENT_INDEX'), highestIndex: LocalState.get('JUMBOTRON_HIGHEST_ACTIVE_INDEX')});
  }
};

export const depsMapper = (context, actions) => ({
  slideTo: actions.jumbotron.slideTo,
  context: () => context
});

/* test for a full page spinner
const Spinner = () => (
  <div className="spinner-container jumbotron" >
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  </div>
);
*/

export default composeAll(
  composeWithTracker(onPropsChange, Spinner),
  useDeps(depsMapper)
)(Jumbotron);