import React from 'react';
import ProjectItem from '../components/ProjectItems';
import { ProjectList } from '../helpers/ProjectList';

import '../styles/Projects.css';

function Projects() {
    return (
        <div className='projects'>
            <h1>Services</h1>
            <div className='projectList'>
                {ProjectList.map((project, index) => {
                    return (
                         <ProjectItem id={index} name={project.name} image={project.image} />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;