import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';


function Profile() {
    return(
  <section id="profile">
    <div className="section__pic-container">
      <img className="profile-pic" src={profilePic} alt="Ayush Saxena profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Ayush Saxena</h1>
      <p className="section__text__p2">FullStack Developer</p>
      <div className="btn-container">
        <button className="btn btn-color-2" onClick={() => window.location.href = '#contact'}>Download CV</button>
        <button className="btn btn-color-1" onClick={() => window.location.href = '#contact'}>Contact Info</button>
      </div>
      <div id="socials-container">
        <img src={linkedinIcon} alt="My LinkedIn profile" className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/ayush-saxena-36b5b515a/'} />
        <img src={githubIcon} alt="My Github profile" className="icon" onClick={() => window.location.href = 'https://github.com/ayush2743'} />
      </div>
    </div>
  </section>
    );
}

export default Profile;
