// import {useState} from 'react';


function Projects({projects}){

    return (
        <div className="section">
            <h2>Projects</h2>
            {projects.map(project => (
                <div key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project

                </a>    
            </div>
            ))} 
        </div>
    );
}

export default Projects;