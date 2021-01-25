import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Nav = () => {
  return (
      <nav>
        <Link id='title' to='/' className='homeLink'>Calvin Kuhnen</Link>
        <Link className='navButton resume-button' to="/projects">Projects</Link>
        <Link className='navButton resume-button' to="/resume">Resume</Link>
      </nav>
  )
}

export default Nav
