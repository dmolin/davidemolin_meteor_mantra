import React from 'react';


class Jumbotron extends React.Component {
  render() {
    console.log(this.data);
    let {className = "", projects, message, tagline, ...props} = this.props;

    setTimeout(this.displayMessage.bind(this), 1000);

    return (
      <section className={className + " jumbotron"} >
        {projects.map(project => {
          const styleValue = "url(/images/projects/" + project.imageBg + ") center top no-repeat";
          const fgImageBg = "url(/images/projects/" + project.imageFg + ") bottom center no-repeat";

          return (
            <article className="jumbotron-item" key={project._id} style={{background: styleValue}}>
              <div className="jumbotron-message-wrapper">
                {message ? <p className="jumbotron-message title">{message}</p> : ''}
                {tagline ? <p className="jumbotron-tagline title">{tagline}</p> : ''}
              </div>
              <div className="jumbotron-image" style={{background: fgImageBg }} />
            </article>
          );
        })}
      </section>
    );
  }

  displayMessage() {
    let {message, tagline} = this.props;

    if(message || tagline) {
      $('.jumbotron-message-wrapper').addClass('jumbotron-message-wrapper--visible');
    }
  }
}

export default Jumbotron;