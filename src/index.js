import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Results } from './Results/Results'
import './index.css';

// ========================================

ReactDOM.render(
  <Results/>,
  document.getElementById('root')
);