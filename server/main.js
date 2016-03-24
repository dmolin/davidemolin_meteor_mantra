import { Meteor } from 'meteor/meteor';
import publications from './publications';
//import methods from './methods';
import * as Collections from '../shared/collections';

Meteor.startup(() => {
  //bootstrap the DB, if empty
  //if(!Collections.Projects.find().count()) {
    console.log("Bootstrapping the DB...");

    //for testing only
    Collections.Projects.remove({});

    //Collections.Projects.insert({image:'payfriendz.jpg', thumb:'', description:'', featured:true});
    //Collections.Projects.insert({image:'udemy.jpg', thumb:'', description:'', featured:true});
    Collections.Projects.insert({imageBg:'payfriendz-bg.jpg', imageFg:'payfriendz-fg.png', thumb:'', description:'', featured:true});
  //}

  publications();
});
