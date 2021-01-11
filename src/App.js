import React from 'react';
import logo from './logo.svg';
import './reset.css';
import './style_home.css';
import './resume.css';
import Nav from './Components/Nav'
import Home from './Components/Home'
import Resume from './Components/Resume'
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
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
