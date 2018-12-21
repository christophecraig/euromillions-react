import React from 'react';
import { Result } from './Result/Result'

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
      console.log(this.state.results);
      
      
      return (
          <ul>
              {this.state.results.map(result => {
                  return <Result resultset={result} />
              })
              } 
          </ul>
      );
  }
}