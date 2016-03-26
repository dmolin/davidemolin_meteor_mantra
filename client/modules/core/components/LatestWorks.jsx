import React from 'react'
import Project from './Project.jsx'

class LatestWorks extends React.Component {
  render() {
    return (
      <section className="latest-works section container">
        <div className="">
          <header className="section-header">
            <h1 className="section-title">latest works</h1>

            <p>Here is a brief selection of some of the projects I’ve been working on recently...</p>
          </header>
          <div className="section-content pure-grid">
            <ul className="projects">
              <Project />
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default LatestWorks;