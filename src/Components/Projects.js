import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import portfolio from '../portfolio.json';
import '../css/projects.css';

// Creates the project buttons based on portfolio file
const Projects = () => {

  document.documentElement.style.setProperty('--button', '#289dfc');
  document.documentElement.style.setProperty('--shadow', '#2a86d1');
  document.documentElement.style.setProperty('--button-hover', '#39aefd');

  let projectButtons = portfolio.map((project) => {
    return (
      <Link key={project.id} className='project' to={`/${project.id}`}>
        <div className='title'>{project.title}</div>
        <img className='button' src={project.portPic} alt={project.alt}></img>
      </Link>
    )
  })

  return (
    <div className='container'>
      <div className='squares'>
        {projectButtons}
      </div>
    </div>
  );
}

export default Projects
