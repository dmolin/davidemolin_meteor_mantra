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
    <AboutMe data-id="about-me"/>
    <Testimonials data-id="testimonials" />
    <FunFacts />
    <LatestWorks data-id="works" />
    <MyValues data-id="values" />
    <GetInTouch data-id="contact" />
    <Footer />
  </section>
);

export default HomePage;