import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch
} from "react-router-dom";
import Digital from './Digital';

const Projects = () => {

  let { path, url } = useRouteMatch();

  return (
    <div className='container'>
      <div className='row'>
        <Link className='project' to={`${url}/cinepod`}>CinePod</Link>
        <Link className='project' to={`${url}/sock`}>SOCK Radio</Link>
        <Link className='project' to={`${url}/apps`}>Apps</Link>
      </div>
      <div className='row'>
        <Link className='project' to={`${url}/ipro`}>IPRO 2020</Link>
        <Link className='project' to={`${url}/calculator`}>MIPS Calculator</Link>
        <Link className='project' to={`${url}/digital`}>20 Hour 2014</Link>
      </div>

      <Route path='/projects/digital'>
        <Digital />
      </Route>
    </div>

  )
}

export default Projects
