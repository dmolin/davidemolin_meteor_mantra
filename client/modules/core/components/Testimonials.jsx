import React from 'react';

class Testimonials extends React.Component {
  render () {
    const {testimonials} = this.props;

    console.log("testimonials", testimonials);
    return (
      <section className="testimonials section">
        <div className="container">
          <header className="section-header">
            <h1 className="section-title">Testimonials</h1>
          </header>
          <div className="section-content pure-grid testimonials-content">
            {testimonials.map((t) => (
              <div className="profile-picture pure-u-1" key={t._id}>
                <img className="cameo pure-img" title="referrer" src={"/images/profiles/" + t.avatar} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials;