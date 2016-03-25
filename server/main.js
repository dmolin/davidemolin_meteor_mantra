import { Meteor } from 'meteor/meteor';
import publications from './publications';
import * as Collections from '../shared/collections';
import moment from 'moment';

Meteor.startup(() => {
  //bootstrap the DB, if empty
  //if(!Collections.Projects.find().count()) {
  console.log("Bootstrapping the DB...");

  //for testing only
  Collections.Projects.remove({});
  Collections.Testimonials.remove({});

  //Collections.Projects.insert({image:'payfriendz.jpg', thumb:'', description:'', featured:true});
  //Collections.Projects.insert({image:'udemy.jpg', thumb:'', description:'', featured:true});
  Collections.Projects.insert({imageBg:'payfriendz-bg.jpg', imageFg:'payfriendz-fg.png', thumb:'', description:'', featured:true});
  Collections.Testimonials.insert({
    avatar:'profile-avelasquez.jpg', name:'Alejandro Velasquez', title:'UX/UI at Payfriendz',
    recommendation:'Honoured to work next to such a brilliant professional. Thanks Davide!',
    at:moment('2016-02-24', 'YYYY-MM-DD').toDate(), relationship:'Alejandro worked directly with Davide at Payfriendz'});
  
  //}

  publications();
});
