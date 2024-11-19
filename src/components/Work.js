import React from 'react';
import './Work.css';

function Work() {
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of your project",
            technologies: ["React", "Node.js", "MongoDB"],
            github: "https://github.com/yourusername/project1",
            live: "https://project1-demo.com",
            image: "project1-screenshot.jpg"
        },
        // Add more projects here
    ];

    return (
        <div className="work-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
