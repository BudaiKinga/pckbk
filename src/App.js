import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import UjHaz from './UjHaz';
import szures from './Szures';
import home from './Home';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/ujHaz" component={UjHaz} />
          <Route path="/szures" component={szures} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; 