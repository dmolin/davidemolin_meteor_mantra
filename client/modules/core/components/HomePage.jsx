import React from 'react';
import Jumbotron from '../../jumbotron/containers/Jumbotron';
import AboutMe from './AboutMe.jsx';
import Testimonials from '../containers/Testimonials';
import FunFacts from './FunFacts.jsx';
import LatestWorks from '../containers/LatestWorks';
import MyValues from './MyValues.jsx';
import GetInTouch from './GetInTouch.jsx';
import Footer from './Footer.jsx';

const HomePage = ({content = () => null}) => (
  <section className="home">
    <Jumbotron message="Hi, I'm Davide Molin" tagline="I do front-end development for a living"/>
    <span className="structural" data-id="about-me" />
    <AboutMe />
    <span className="structural"  data-id="testimonials" />
    <Testimonials/>
    <FunFacts />
    <LatestWorks />
    <MyValues />
    <GetInTouch />
    <Footer />
  </section>
);

export default HomePage;