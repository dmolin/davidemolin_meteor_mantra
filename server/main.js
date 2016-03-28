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
  Collections.FeaturedProjects.insert({imageBg:'policyexpert-bg.jpg', imageFg:'policyexpert-fg.png', description:'', fgSize:'auto 70%', bgColor:'#f9f9f9', priority:979})
  Collections.FeaturedProjects.insert({imageBg:'giadacoppi-bg.jpg', imageFg:'giadacoppi-fg.png', description:'', fgSize:'auto 70%', bgColor:'#e5e5e5', priority:978})
}

function insertProjects() {
  Collections.Projects.remove({})
  Collections.Projects.insert({
    title:'davidemolin.com (Meteor + React)',
    description:[
      "My own website, created with the upcoming new version of MeteorJS, along with React+Redux and Mantra",
      "Meteor allows for a true realtime UI and isomorphic codebase, while React and Redux simplify and rationalise the data flow and the application state management"
    ],
    technologies:['MeteorJS_1.3', 'React', 'Redux', 'Mantra'],  //in case I want to list the techs used for this project,
    //githubUrl: 'https://github.com/dmolin/react-kanban',
    prodUrl: 'http://www.davidemolin.com',
    image: 'projects/davidemolin.png',
    priority: 1001
  })

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

  Collections.Projects.insert({
    title:'Admin Dashboard (AngularJS)',
    description:[
      "A very basic project that I use as a generic template when building Admin/Backoffice applications.",
      "The App uses an Express Node.js Server, with Mongo/Mongoose as a DB solution and Amazon S3 to store attachments"
    ],
    technologies:['Angular', 'Mongo', 'S3'],  //in case I want to list the techs used for this project,
    githubUrl: 'https://github.com/dmolin/angular-admin-dashboard',
    image: 'projects/aadmin-angular.png',
    priority: 989
  })

  Collections.Projects.insert({
    title:'X-Plane Instruments (Node + Socket.io)',
    description:[
      "Access your X-Plane Flight Simulator Instruments, right in your browser, using UDP over Node.js and Socket.io",
      "This project, made for fun, allows you to see the instruments of your airplane flight simulator from a separate browser window, using X-Plane Data output API and a broadcasting NodeJS server via Socket.io"
    ],
    technologies:['NodeJS', 'Socket.io', 'UDP'],  //in case I want to list the techs used for this project,
    githubUrl: 'https://github.com/dmolin/https://github.com/dmolin/flightSimPanels',
    image: 'projects/xplane.png',
    priority: 988
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
    avatar:'profile-manderson.jpg', name:'Michelle Anderson', title:'Senior Engineer (web UI)',
    recommendation:"Dear Internet, Davide is an amazing developer and is an absolute joy to work with. Patient, thorough, enthusiastic. He laughs at my jokes. He's an all-around great guy. Hire him, I would. I have. And will again.",
    at:moment('2015-07-15', 'YYYY-MM-DD').toDate(), relationship:'Michelle worked with Davide at Daily Mail and managed him when working at Bodog Europe'
  })
  Collections.Testimonials.insert({
    avatar:'profile-wgreen.jpg', name:'Will Green', title:'Digital Marketing Manager',
    recommendation:'I signed up to this course as I am a Digital Marketing Manager with limited HTML and CSS knowledge and I wanted to learn more about front end development. This course has been a real eye opener and I have learned more then I ever thought I would! Davide is a very enthusiastic instructor which really helps as there was lots of new things for me to take on board. I would thoroughly reccommend this course to anyone interested in front end development!',
    at:moment('2015-05', 'YYYY-MM').toDate(), relationship:'Will attended the Front-End Development course instructed by Davide'
  })
  Collections.Testimonials.insert({
    avatar:'profile-rwilton.jpg', name:'Rick Wilton', title:'Product Owner / Project Manager',
    recommendation:"Davide is a highly experienced and exceptional contract UI developer who worked on our ambitious project to launch car insurance within a few months. He was a perfect fit for our small agile team, picked everything up very quickly and was excellent at not just building what we asked for but through discussion helping us realise how to do it better. Very sad to see him go once his contract was up but hopefully we'll be able to get him back soon! I'd recommend him without hesitation.",
    at:moment('2013-12-08', 'YYYY-MM-DD').toDate(), relationship:'Rick managed Davide at QMetric Group Limited'
  })
  Collections.Testimonials.insert({
    avatar:'profile-mhutchinson.jpg', name:'Mike Hutchinson', title:'Head of Product at Beamly',
    recommendation:"Davide is an exceptional software engineer with a friendly and collaborative attitude. His strength are his focus on TDD, his readiness to adopt local processes, and his natural inclination to iterate; all of which made it very quick to integrate him into the team, and a pleasure to work with. I would jump at the chance to work with Davide again, either as a front-end or web-services developer.",
    at:moment('2013-07-15', 'YYYY-MM-DD').toDate(), relationship:'Mike worked directly with Davide at zeebox'
  })
  Collections.Testimonials.insert({
    avatar:'profile-tpearson.jpg', name:'Tom Pearson', title:'Senior Engineering Manager, EA Digital Platform',
    recommendation:"Davide is a highly skilled JavaScript engineer with a commendable work ethic. He is laid-back, modest and thoughtful in his interactions with the team. I have heard nothing but praise for Davide's work; he sets a great example.",
    at:moment('2013-01-21', 'YYYY-MM-DD').toDate(), relationship:'Tom managed Davide at Electronic Arts'
  })
  Collections.Testimonials.insert({
    avatar:'profile-klloyd.jpg', name:'Kevin LLoyd', title:'Development Manager at Amazon',
    recommendation:"Davide is one of those rare breed of web developers who keep strong engineering principles at the centre of everything they do. Always up for interesting technical challenges and looking at what's possible rather than what's \"normal\", Davide is a great technical expert. Working with Davide was always a pleasure. Even when the work the team had wasn't particularly challenging, he always kept a pragmatic attitude and looked to the future. I wouldn't hesitate to take the opportunity to work with him again.",
    at:moment('2012-08-14', 'YYYY-MM-DD').toDate(), relationship:'Kevin managed Davide at Mind Candy'
  })
  Collections.Testimonials.insert({
    avatar:'profile-rashington.jpg', name:'Richard Ashington', title:'Senior IT Project Manager',
    recommendation:"I have been working with Davide for almost a year after he transferred from the Spain office to the London office of Bodog and he was allocated to work on projects of which I am the Project Manager. Davide is one of most reliable and dedicated developers and team members I've ever worked with. He is a very experienced developer and a key member of my team. He is the \"go to\" man when other developers (many of which are experienced themselves) get stuck. He has a great understanding of development practices and is a great lead in a team, even if not his official role/title. He is able to pick up and run with things and doesn't require micro-management. I would have no hesitation to recommend Davide for any role, in any company as I am sure he will have no problem if hitting the ground running.",
    at:moment('2012-04-19', 'YYYY-MM-DD').toDate(), relationship:'Richard Managed Davide at Bodog Europe'
  })
  Collections.Testimonials.insert({
    avatar:'profile-ndavenport.jpg', name:'Nick Davenport', title:'Senior Technical Recruiter',
    recommendation:"I not only recruited Davide to the London office, I worked closely with him when conducting interviews. I would introduce Davide to people we interviewed, as our Javascript Ninja and to be frank, that is exactly what he is! Davide is a great guy, highly professional, enthusiastic about technology and someone who I have no hesitation in recommending. Whichever company Davide works, you are very lucky to have him! He will be an asset! I wish him all the best!",
    at:moment('2012-04-18', 'YYYY-MM-DD').toDate(), relationship:'Nick worked with Davide at Bodog Europe'
  })

}