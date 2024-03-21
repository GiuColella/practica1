import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home/>} />
      </Switch>
    </Router>
  );
}