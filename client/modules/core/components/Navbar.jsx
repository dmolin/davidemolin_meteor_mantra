import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <section className="container navbar pure-g">
        <div className="navbar-brand pure-u-1 pure-u-md-1-4">
          <a href="/" className="navbar-brand-logo">
            <h1 className="structural">Codingshack ltd</h1>
          </a>
        </div>
        <nav className="navbar-items navigation pure-u-1 pure-u-md-3-4">
          <ul className="pure-menu-horizontal">
            <li className="navigation-item pure-menu-item"><a href="#">Home</a></li>
            <li className="navigation-item pure-menu-item"><a onClick={this.goTo.bind(this)} data-target="about-me" href="#" >About me</a></li>
            <li className="navigation-item pure-menu-item"><a onClick={this.goTo.bind(this)} data-target="testimonials" href="#" >Testimonials</a></li>
            <li className="navigation-item pure-menu-item"><a href="#" >Works</a></li>
            <li className="navigation-item pure-menu-item"><a href="#" >Values</a></li>
            <li className="navigation-item pure-menu-item"><a href="#" >Contact</a></li>
          </ul>
        </nav>
      </section>
    );
  }

  goTo(e) {
    e.preventDefault();
    const $el = $(e.currentTarget);
    const $target = $('[data-id=' + $el.data('target') + ']');
    if(!$target) return;

    $('html,body').animate({
      scrollTop: $target.offset().top
    }, 1000);
    return false;
  }
}

export default Navbar;