import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import ujHaz from './UjHaz';
import szures from './Szures';
import home from './Home';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/ujHaz" component={ujHaz} />
          <Route path="/szures" component={szures} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; 