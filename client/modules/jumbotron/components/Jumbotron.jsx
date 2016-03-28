import React from 'react';


class Jumbotron extends React.Component {
  render() {
    let {className = "", projects, ...props} = this.props;

    return (
      <section className={className + " jumbotron"} >
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