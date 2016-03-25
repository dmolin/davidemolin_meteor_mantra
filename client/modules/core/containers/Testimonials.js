import React from 'react';
import Testimonials from '../components/Testimonials.jsx';
import Spinner from '../components/Spinner.jsx';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('testimonials').ready()) {
    const testimonials = Collections.Testimonials.find().fetch();
    onData(null, {testimonials});
  }
};

export default composeAll(
  composeWithTracker(composer, Spinner),
  useDeps()
)(Testimonials);