import React from 'react';
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
                    <Project 
                        title="Quick Quiz" 
                        imgSrc={project1} 
                        githubLink="https://github.com/ayush2743/WebDevQuiz" 
                        liveDemoLink="https://ayush2743.github.io/WebDevQuiz/" 
                    />
                    <Project 
                        title="Hang Man" 
                        imgSrc={project2} 
                        githubLink="https://github.com/ayush2743/Hangman-Game" 
                        liveDemoLink="https://hangman-game-black.vercel.app/" 
                    />
                    <Project 
                        title="ToDo List" 
                        imgSrc={project3} 
                        githubLink="https://github.com/ayush2743/ToDo" 
                        liveDemoLink="https://ayush2743.github.io/ToDo/" 
                    />
                </div>
            </div>
        </section>
    );
}

function Project({ title, imgSrc, githubLink, liveDemoLink }) {
    return (
        <div className="details-container color-container">
            <div className="article-container">
                <img src={imgSrc} alt={title} className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">{title}</h2>
            <div className="btn-container">
                <button 
                    className="btn btn-color-2 project-btn" 
                    onClick={() => window.location.href = githubLink}
                >
                    Github
                </button>
                <button 
                    className="btn btn-color-2 project-btn" 
                    onClick={() => window.location.href = liveDemoLink}
                >
                    Live Demo
                </button>
            </div>
        </div>
    );
}

export default Projects;
