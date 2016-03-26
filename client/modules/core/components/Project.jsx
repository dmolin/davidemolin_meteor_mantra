import React from 'react'

class Project extends React.Component {
  render() {
    return (
      <div className="project pure-u-1 __pure-u-sm-1-2 __pure-u-md-1-3 __pure-u-lg-1-4">
        <img src="/images/projects/kanban-react.png" className="pure-img pure-u-1 pure-u-lg-2-3"/>
        <div className="project-description pure-u-1 pure-u-lg-1-3">
          <header><h2>Kanban React</h2></header>

          <p>A small project I built while studying React.</p>
          <p>The project is build using React and Flux and intentionally mimicks the look and feel of Trello.
          You can add/remove columns and cards, reorder them and drag and drop columns and cards around the board</p>

          <button className="pure-button button-success">View on GitHub <i className="fa fa-github"></i></button>
        </div>
      </div>
    )    
  }
}

export default Project