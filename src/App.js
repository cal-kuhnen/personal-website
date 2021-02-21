import React from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './css/style_home.css';
import './css/nav.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Detail from './Components/Detail';
import ScrollToTop from './Components/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <ScrollToTop />
      <div>
        <Nav />
      </div>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path={`/:project`}>
          <Detail />
        </Route>
        <Route exact path='/'>
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
