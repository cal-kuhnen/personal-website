import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";
import portfolio from '../portfolio.json';
import '../css/projects.css';
import Detail from './Detail';

// Creates the project buttons based on portfolio file
const Projects = () => {

  document.documentElement.style.setProperty('--button', '#8cb5de');
  document.documentElement.style.setProperty('--shadow', '#7697b8');
  document.documentElement.style.setProperty('--button-hover', '#9dc6ef');

  let { path, url } = useRouteMatch();
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
