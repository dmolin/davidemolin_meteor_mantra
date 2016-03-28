import React from 'react';


class Jumbotron extends React.Component {
  componentDidMount() {
    let {projects, slideTo} = this.props;

    var mySwiper = new Swiper ('.jumbotron .swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      onTransitionStart: (swiper) => {
        console.log("on transition start", swiper)
        let project = projects[swiper.activeIndex]
        console.log('project', project)
        slideTo(project);
      }
    })
  }

  render() {
    let {className = "", projects, bgColor, ...props} = this.props;
    let backColor = bgColor || (projects.length ? projects[0].bgColor || '#000' : '#000')

    return (
      <section className={className + " jumbotron"} style={{backgroundColor: backColor}}>
        <div className="swiper-container jumbotron-container" >
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-wrapper">
            {projects.map(project => {
              const styleValue = "url(/images/projects/" + project.imageBg + ") center top no-repeat";
              const fgImageBg = "url(/images/projects/" + project.imageFg + ") bottom center no-repeat";
              const fgSize = project.fgSize || 'auto 50%';
              return (
                <article className="jumbotron-item swiper-slide" key={project._id} style={{background: styleValue}}>
                  <div className="jumbotron-image" style={{background: fgImageBg, backgroundSize: fgSize }} />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

}

export default Jumbotron;