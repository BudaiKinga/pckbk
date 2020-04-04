import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import UjHaz from './UjHaz';
import Szures from './Szures';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ujHaz" component={UjHaz} />
          <Route path="/szures" component={Szures} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; 