import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch
} from "react-router-dom";
import portfolio from '../portfolio.json';
import '../css/projects.css';
import Detail from './Detail';
import Digital from './Digital';

// Renders project buttons and the resulting detail pages with nested switch
const Projects = () => {

  let { path, url } = useRouteMatch();

  return (
    <Switch>
        <Route exact path={path}>
          <Squares />
        </Route>
        <Route path={`${path}/:project`}>
          <Detail />
        </Route>
    </Switch>
  )
}

// Creates the project buttons based on portfolio file
const Squares = () => {

  let { path, url } = useRouteMatch();
  let projectButtons = portfolio.map((project) => {
    return (
      <Link key={project.id} className='project' to={`${url}/${project.id}`}>
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
