import React from 'react'

class Project extends React.Component {
  render() {
    const {image, title, description, githubUrl} = this.props

    let githubLinkOrNothing
    if(githubUrl) {
      githubLinkOrNothing = <button className="pure-button button-success">View on GitHub <i className="fa fa-github"></i></button>
    }
    return (
      <div className="project pure-u-1 __pure-u-sm-1-2 __pure-u-md-1-3 __pure-u-lg-1-4">
        <img src={`/images/${image}`} className="pure-img pure-u-1 pure-u-lg-2-3"/>
        <div className="project-description pure-u-1 pure-u-lg-1-3">
          <header><h2>{title}</h2></header>

          {description.map((d,idx) => (
            <p key={idx}>{d}</p>
          ))}
          {githubLinkOrNothing}
        </div>
      </div>
    )    
  }
}

export default Project