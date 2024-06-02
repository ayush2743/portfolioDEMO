import React from 'react';
import checkmarkIcon from '../assets/checkmark.png';

function Experience() {
    return(
  <section id="skills">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Skills</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            <Article title="HTML" level="Experienced" />
            <Article title="CSS" level="Experienced" />
            <Article title="SASS" level="Intermediate" />
            <Article title="JavaScript" level="Basic" />
            <Article title="TypeScript" level="Basic" />
            <Article title="Material UI" level="Intermediate" />
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
            <Article title="PostgreSQL" level="Basic" />
            <Article title="Node JS" level="Intermediate" />
            <Article title="Express JS" level="Intermediate" />
            <Article title="Git" level="Intermediate" />
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

function Article({ title, level }) {
    return (
  <article>
    <img src={checkmarkIcon} alt="Experience icon" className="icon" />
    <div>
      <h3>{title}</h3>
      <p>{level}</p>
    </div>
  </article>
    );
}

export default Experience;
