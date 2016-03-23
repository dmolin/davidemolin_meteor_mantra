import React from 'react';

class FunFacts extends React.Component {
  render() {
    const {className = "", ...props} = this.props;
    return (
      <section className={className + " funfacts"} >
        <div className="container section-header">
          fun facts
        </div>
      </section>
    )
  }
}

export default FunFacts;