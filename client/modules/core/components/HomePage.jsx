import React from 'react';
import Jumbotron from '../../jumbotron/containers/Jumbotron';
import AboutMe from './AboutMe.jsx';
import Testimonials from '../containers/Testimonials';
import FunFacts from './FunFacts.jsx';

const HomePage = ({content = () => null}) => (
  <section className="home">
    <Jumbotron message="Hi, I'm Davide Molin" tagline="I do front-end development for a living"/>
    <span className="structural" data-id="about-me" />
    <AboutMe />
    <span className="structural"  data-id="testimonials" />
    <Testimonials/>
    <FunFacts />
  </section>
);

export default HomePage;