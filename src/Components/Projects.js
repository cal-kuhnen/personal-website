import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";
import '../css/projects.css';

const Projects = () => {

  let { path, url } = useRouteMatch();

  return (
    <div className='container'>
      <div className='row'>
        <Link className='project' to={`${url}/cinepod`}>
          <div className='title'>CinePod</div>
          <img src='./pics/cinepod/pod01.JPG' alt='person sitting in unfinished covid pod'></img>
        </Link>
        <Link className='project' to={`${url}/sock`}>
          <div className='title'>SOCK Radio</div>
        </Link>
        <Link className='project' to={`${url}/apps`}>
          <div className='title'>Apps</div>
        </Link>
      </div>
      <div className='row'>
        <Link className='project' to={`${url}/ipro`}>
          <div className='title'>IPRO 2020</div>
        </Link>
        <Link className='project' to={`${url}/calculator`}>
          <div className='title'>MIPS Calculator</div>
        </Link>
        <Link className='project' to={`${url}/digital`}>
          <div className='title'>20 Hour 2014</div>
        </Link>
      </div>
    </div>

  )
}

export default Projects
