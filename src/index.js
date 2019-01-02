import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Results } from './Results/Results'
import { SingleResult } from './Results/SingleResult/SingleResult'
import './index.css';

// ========================================

const routing = (
  <Router>
    <div>
      <nav id="menu">
        <Link to="/last/">Dernier résultat</Link>
        <Link to="/results/">Liste des résultats</Link>
      </nav>
      <Route path="/results/" component={Results} />
      <Route path="/result/:id" component={SingleResult} />
      <Route path="/last/" component={SingleResult} />
    </div>
  </Router>
)

const menu = (
  <nav id="menu">
    <Link to="/last/">Dernier résultat</Link>
    <Link to="/results">Liste des résultats</Link>
  </nav>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);