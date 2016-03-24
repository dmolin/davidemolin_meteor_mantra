import React from 'react';


class Jumbotron extends React.Component {
  render() {
    console.log(this.data);
    let {className = "", projects, ...props} = this.props;

    return (
      <section className={className + " jumbotron"} >
        {projects.map(project => {
          const styleValue = "url(/images/projects/" + project.imageBg + ") center top no-repeat";
          const fgImageBg = "url(/images/projects/" + project.imageFg + ") bottom center no-repeat";

          return (
            <article className="jumbotron-item" key={project._id} style={{background: styleValue}}>
              <div className="jumbotron-image" style={{background: fgImageBg }} />
            </article>
          );
        })}
      </section>
    );
  }
}

export default Jumbotron;