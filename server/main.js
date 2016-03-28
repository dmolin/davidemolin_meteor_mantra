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
  Collections.FeaturedProjects.insert({imageBg:'payfriendz-bg.jpg', imageFg:'payfriendz-fg.png', description:'', fgSize:'auto 50%', bgColor: '#000', priority:1000})
  Collections.FeaturedProjects.insert({imageBg:'x-plane-bg.jpg', imageFg: 'x-plane-fg.png', fgSize:'auto 70%', bgColor: '#0f2a45', priority:990})
  Collections.FeaturedProjects.insert({imageBg:'udemy-bg.jpg', imageFg:'udemy-fg-big.png', description:'', fgSize:'auto 70%', bgColor:'#fff', priority:980})
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

  Collections.Projects.insert({
    title:'GunBlaster (MeteorJS)',
    description:[
      "MeteorJS App built for a friend, for sending email campaigns to a list of recipients through the MailGun API.",
      "The App features user authentication, realtime interface, asynchronous job scheduling, email throttling and tracking of bounced/rejected emails"
    ],
    technologies:['MeteorJS', 'Mongo', 'MailGun API'],  //in case I want to list the techs used for this project,
    githubUrl: 'https://github.com/dmolin/meteor-gunblaster',
    image: 'projects/gunblaster.png',
    priority: 990
  })
}

function insertTestimonials() {
  Collections.Testimonials.remove({})
  Collections.Testimonials.insert({
    avatar:'profile-avelasquez.jpg', name:'Alejandro Velasquez', title:'UX/UI at Payfriendz',
    recommendation:'Honoured to work next to such a brilliant professional. Thanks Davide!',
    at:moment('2016-02-24', 'YYYY-MM-DD').toDate(), relationship:'Alejandro worked directly with Davide at Payfriendz'
  })
  Collections.Testimonials.insert({
    avatar:'profile-jhayward.jpg', name:'Julia Hayward', title:'Senior Agile Project Manager at Daily Mail',
    recommendation:'Davide is an excellent front end / full stack web developer and I would highly recommend him. He immediately hit the ground running working on a challenging project that he executed brilliantly. He works in a very professional manner, he is friendly, collaborative and has a can do attitude. His level of expertise was second to none and I would not hesitate to hire him again.',
    at:moment('2015-08-12', 'YYYY-MM-DD').toDate(), relationship:'Julia managed Davide at MailOnline'
  })
  Collections.Testimonials.insert({
    avatar:'profile-wgreen.jpg', name:'Will Green', title:'Digital Marketing Manager',
    recommendation:'I signed up to this course as I am a Digital Marketing Manager with limited HTML and CSS knowledge and I wanted to learn more about front end development. This course has been a real eye opener and I have learned more then I ever thought I would! Davide is a very enthusiastic instructor which really helps as there was lots of new things for me to take on board. I would thoroughly reccommend this course to anyone interested in front end development!',
    at:moment('2015-05', 'YYYY-MM').toDate(), relationship:'Will attended the Front-End Development course instructed by Davide'
  })

}