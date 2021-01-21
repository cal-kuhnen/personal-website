import React from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './css/style_home.css';
import './css/nav.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
