import React from 'react';
import Jumbotron from '../../jumbotron/containers/Jumbotron';
import AboutMe from './AboutMe.jsx';
import Testimonials from './Testimonials.jsx';
import FunFacts from './FunFacts.jsx';

const HomePage = ({content = () => null}) => (
  <section className="home">
    <Jumbotron className="container" />
    <AboutMe />
    <Testimonials />
    <FunFacts />
  </section>
);

export default HomePage;