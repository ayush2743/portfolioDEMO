import React from 'react';
import aboutPic from '../assets/about-pic.jpg';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';


function About() {
    return(
  <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img src={aboutPic} alt="Profile picture" className="about-pic" />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img src={experienceIcon} alt="Experience icon" className="icon" />
            <h3>Experience</h3>
            <p>Mixed Reality Developer Intern <br />Urban Company</p>
          </div>
          <div className="details-container">
            <img src={educationIcon} alt="Education icon" className="icon" />
            <h3>Education</h3>
            <p>Bachelors in CS<br />Scaler School Of Technology</p>
          </div>
        </div>
        <div className="text-container">
          <p>
          Hi, I'm Ayush Saxena, a first-year Computer Science undergraduate student with a passion for web development, VR & AR development, and a strong desire to dive into the world of Artificial Intelligence and Machine Learning. I love exploring new technologies and am constantly seeking opportunities to learn and grow in these exciting fields. 
          </p>
        </div>
      </div>
    </div>
  </section>
    );
}

export default About;
