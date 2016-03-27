import React from 'react'
import Project from './Project.jsx'

class LatestWorks extends React.Component {
  render() {
    const {projects, ...props} = this.props;
    
    return (
      <section className="latest-works section container" {...props}>
        <div className="">
          <header className="section-header">
            <h1 className="section-title">latest works</h1>

            <p>Here is a brief selection of some of the projects I’ve been working on recently...</p>
          </header>
          {projects.map((p) => {
            return (
              <div className="section-content pure-grid" key={p._id}>
                <ul className="projects">
                  <Project {...p} />
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default LatestWorks;