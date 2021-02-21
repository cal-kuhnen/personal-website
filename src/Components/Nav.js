import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

const Nav = () => {

  const handleScroll = () => {
    if (window.scrollY > 40) {
      document.querySelector("nav").className = "nav-scroll";
    } else {
      document.querySelector("nav").className = "";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
      <nav>
        <NavLink id='title' to='/' className='homeLink' activeClassName='home-select' exact={true}>Calvin Kuhnen</NavLink>
        <NavLink className='navButton' activeClassName='selected' to="/resume">Resume</NavLink>
        <NavLink className='navButton' activeClassName='selected' to="/about">About</NavLink>
      </nav>
  )
}

export default Nav
