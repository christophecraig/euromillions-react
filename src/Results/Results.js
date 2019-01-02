import React from 'react';
import { Result } from './Result/Result';

export class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/results/')
      .then(val =>  val.json()).then(json => {
          this.setState({results: json})
      })
  }

  render() {
      return (
          <ul>
              {this.state.results.map(result => {
                  return <li key={result.id} ><Result resultset={result} /></li>
              })
              } 
          </ul>
      );
  }
}