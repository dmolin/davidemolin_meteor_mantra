import React from 'react'
import Project from './Project.jsx'

class LatestWorks extends React.Component {
  componentDidMount() {
    var mySwiper = new Swiper ('.latest-works .swiper-container', {
      // Optional parameters
      //loop: true
      // If we need pagination
      pagination: '.swiper-pagination',

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'

      // And if we need scrollbar
      //scrollbar: '.swiper-scrollbar'
    })
  }

  render() {
    const {projects, ...props} = this.props;
    
    return (
      <section className="latest-works section container" {...props}>
        <div className="">
          <header className="section-header">
            <h1 className="section-title">latest works</h1>

            <p>Here is a brief selection of some of the projects I’ve been working on recently...</p>
          </header>
          <div className="swiper-container">
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <ul className="projects swiper-wrapper">
              {projects.map((p) => {
                return (
                  <div className="section-content swiper-slide pure-grid" key={p._id}>
                      <Project {...p} />
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default LatestWorks;