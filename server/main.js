import { Meteor } from 'meteor/meteor';
import publications from './publications';
//import methods from './methods';
import * as Collections from '../shared/collections';

Meteor.startup(() => {
  //bootstrap the DB, if empty
  if(!Collections.Projects.find().count()) {
    console.log("Bootstrapping the DB...");

    Collections.Projects.insert({image:'payfriendz.jpg', thumb:'', description:'', featured:true});
  }

  publications();
});
