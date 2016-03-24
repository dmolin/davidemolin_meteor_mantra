import React from 'react';


class Jumbotron extends React.Component {
  render() {
    console.log(this.data);
    let {className = "", projects, ...props} = this.props;

    return (
      <section className={className + " jumbotron"} >
        {projects.map(project =>(
          <article className="jumbotron-item" key={project._id}>
            <img src={"/images/projects/" + project.image} />
          </article>
        ))}
      </section>
    );
  }
}

export default Jumbotron;