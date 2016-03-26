import {FeaturedProjects} from '/shared/collections';

export default function () {
  Meteor.publish('projects.featured', function() {
    return FeaturedProjects.find({}, {sort:{priority:-1, createdAt:-1}});
  });
}