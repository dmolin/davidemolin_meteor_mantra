import { Meteor } from 'meteor/meteor';
import publications from './publications';
import * as Collections from '../shared/collections';
import moment from 'moment';

Meteor.startup(() => {
  //bootstrap the DB, if empty
  //if(!Collections.Projects.find().count()) {
  console.log("Bootstrapping the DB...");

  //for testing only
  insertFeaturedProjects()
  insertProjects()
  insertTestimonials()
  //}

  publications();
});

function insertFeaturedProjects() {
  Collections.FeaturedProjects.remove({})
  Collections.FeaturedProjects.insert({imageBg:'payfriendz-bg.jpg', imageFg:'payfriendz-fg.png', description:'', priority:1000})
}

function insertProjects() {
  Collections.Projects.remove({})
  Collections.Projects.insert({
    title:'Kanban React',
    description:[
      "A small project I built while studying React.",
      "The project is build using React and Flux and intentionally mimicks the look and feel of Trello. You can add/remove columns and cards, reorder them and drag and drop columns and cards around the board"
    ],
    technologies:'',  //in case I want to list the techs used for this project,
    githubUrl: 'https://github.com/dmolin/react-kanban',
    liveUrl: 'http://dmolin.github.io/react-kanban/',
    image: 'projects/kanban-react.png',
    priority: 1000
  })
}

function insertTestimonials() {
  Collections.Testimonials.remove({})
  Collections.Testimonials.insert({
    avatar:'profile-avelasquez.jpg', name:'Alejandro Velasquez', title:'UX/UI at Payfriendz',
    recommendation:'Honoured to work next to such a brilliant professional. Thanks Davide!',
    at:moment('2016-02-24', 'YYYY-MM-DD').toDate(), relationship:'Alejandro worked directly with Davide at Payfriendz'})
}