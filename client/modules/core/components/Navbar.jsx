import React from 'react';

export default ({content}) => (
  <section className="container navbar pure-g">
    <div className="navbar-brand pure-u-1 pure-u-md-1-4">
      <a href="/" className="navbar-brand-logo">
        <h1 className="structural">Codingshack ltd</h1>
      </a>
    </div>
    <nav className="navbar-items navigation pure-u-1 pure-u-md-3-4">
      <ul className="pure-menu-horizontal">
        <li className="navigation-item pure-menu-item"><a href="#">Home</a></li>
        <li className="navigation-item pure-menu-item"><a href="#" >About me</a></li>
        <li className="navigation-item pure-menu-item"><a href="#" >Testimonials</a></li>
        <li className="navigation-item pure-menu-item"><a href="#" >Works</a></li>
        <li className="navigation-item pure-menu-item"><a href="#" >Values</a></li>
        <li className="navigation-item pure-menu-item"><a href="#" >Contact</a></li>
      </ul>
    </nav>
  </section>
);