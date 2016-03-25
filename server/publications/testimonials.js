import {Testimonials} from '/shared/collections';

export default function () {
  Meteor.publish('testimonials', function() {
    return Testimonials.find();
  });
}