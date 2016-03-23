import {Projects} from '/shared/collections';

export default function () {
  Meteor.publish('projects.featured', function() {
    return Projects.find({featured:true});
  });
}