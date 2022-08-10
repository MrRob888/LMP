import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import { useParams } from 'react-router-dom';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name}/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
        </div>
    );
}

export default ProjectDisplay;