import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Nav = () => {
  return (
      <nav>
        <div id="title">
          <Link to='/' className='homeLink'>Calvin Kuhnen</Link>
        </div>
        <div className='navButton'>
          <a href="./projects">Projects</a>
        </div>
        <div className='navButton'>
          <Link to="./Resume">Resume</Link>
        </div>
      </nav>
  )
}

export default Nav
