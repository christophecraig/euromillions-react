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
      <header>
        <nav id="menu">
          <Link to="/last/">Dernier résultat</Link>
          <Link to="/">Liste des résultats</Link>
        </nav>
      </header>
      <Route exact path="/" component={Results} />
      <Route path="/result/:id" component={SingleResult} />
      <Route path="/last/" component={SingleResult} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);