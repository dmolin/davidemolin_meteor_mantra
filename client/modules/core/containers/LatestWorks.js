import React from 'react';
import LatestWorks from '../components/LatestWorks.jsx';
import Spinner from '../components/Spinner.jsx';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('projects').ready()) {
    const projects = Collections.Projects.find({}, {sort:{priority:-1, createdAt:-1}}).fetch();
    onData(null, {projects});
  }
};

export default composeAll(
  composeWithTracker(composer, Spinner),
  useDeps()
)(LatestWorks);