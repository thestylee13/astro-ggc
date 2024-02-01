import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './HomePage'; // Your home page component
import AboutPage from './AboutPage'; // Your about page component

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
