import React from 'react';
import Navbar from './Navbar.jsx';

const Layout = ({content}) => (
  <section className="layout-wrapper">
    <Navbar />
    <section className="layout-content">
      {content()}
    </section>
  </section>
);

export default Layout;