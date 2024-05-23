import React from 'react';
import arrowIcon from '../assets/arrow.png';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';

function Projects() {
    return(
  <section id="projects">
    <p className="section__text__p1">Browse My Recent</p>
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <Project title="Project One" imgSrc={project1} />
        <Project title="Project Two" imgSrc={project2} />
        <Project title="Project Three" imgSrc={project3} />
      </div>
    </div>
    <img src={arrowIcon} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = '#contact'} />
  </section>
);
}

function Project({ title, imgSrc }) {
    return (
  <div className="details-container color-container">
    <div className="article-container">
      <img src={imgSrc} alt={title} className="project-img" />
    </div>
    <h2 className="experience-sub-title project-title">{title}</h2>
    <div className="btn-container">
      <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/'}>Github</button>
      <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/'}>Live Demo</button>
    </div>
  </div>
);
}

export default Projects;
