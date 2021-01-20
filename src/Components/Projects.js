import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";
import portfolio from '../portfolio.json';
import '../css/projects.css';

const Projects = () => {

  let { path, url } = useRouteMatch();

  return (
    <Squares />
    /*
    <div className='container'>
      <div className='squares'>
        <Link className='project' to={`${url}/cinepod`}>
          <div className='title'>{portfolio.cinepod.title}</div>
          <img src='./pics/cinepod/pod01.JPG' alt='person sitting in unfinished covid pod'></img>
        </Link>
        <Link className='project' to={`${url}/sock`}>
          <div className='title'>SOCK Radio</div>
          <img src='./pics/sockButton.png' alt='screenshot of government info app'></img>
        </Link>
        <Link className='project' to={`${url}/apps`}>
          <div className='title'>Apps</div>
          <img src='./pics/apps/apps.png' alt='screenshot of government info app'></img>
        </Link>
        <Link className='project' to={`${url}/ipro`}>
          <div className='title'>IPRO 2020</div>
          <img src='./pics/ipro/ipro01.JPG' alt='interior of bike lock prototype'></img>
        </Link>
        <Link className='project' to={`${url}/calculator`}>
          <div className='title'>MIPS Calculator</div>
        </Link>
        <Link className='project' to={`${url}/digital`}>
          <div className='title'>20 Hour 2014</div>
          <img src='./pics/digital/digital01.png' alt='screencap of 3d music video'></img>
        </Link>
      </div>
    </div>
    */
  )
}

const Squares = () => {

  let { path, url } = useRouteMatch();
  let projectButtons = portfolio.map((project) => {
    return (
      <Link className='project' to={`${url}/{project.title}`}>
        <div className='title'>{project.title}</div>
        <img src={project.portPic} alt='person sitting in unfinished covid pod'></img>
      </Link>
    )
  })

  return (
    <div className='container'>
      <div className='squares'>
        {projectButtons}
      </div>
    </div>
  )
}

export default Projects
