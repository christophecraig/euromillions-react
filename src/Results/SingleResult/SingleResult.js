import React from 'react';
import './SingleResult.css';

export class SingleResult extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          b1: 0,
          b2: 0,
          b3: 0,
          b4: 0,
          b5: 0,
          e1: 0,
          e2: 0,
          myMillion: '',
          date: '',
          weekday: ''
      }
  }

  componentDidMount() {
    if (this.props.match.params.id) {
        fetch('http://localhost:8000/results/' + this.props.match.params.id)
        .then(val =>  val.json()).then(json => {
            this.setState(json)
        })
    } else {
        fetch('http://localhost:8000/results/last')
        .then(val =>  val.json()).then(json => {
            this.setState(json)
        })
    }
  }

  render() {
      return (
        <div className='result'>
          <div className='description'>
              <h3 className='date'>
                  Tirage du { this.state.weekday.toLocaleLowerCase() } { this.state.date }
              </h3>
          </div>
          <div className='numbers'>
              <div className='number'>{ this.state.b1 }</div>
              <div className='number'>{ this.state.b2 }</div>
              <div className='number'>{ this.state.b3 }</div>
              <div className='number'>{ this.state.b4 }</div>
              <div className='number'>{ this.state.b5 }</div>
          </div>
          <div className='stars'>
            <div className='star'>{ this.state.e1 }</div>
            <div className='star'>{ this.state.e2 }</div>
          </div>
          <div className='myMillion'>Code MyMillion : { this.state.myMillion }</div>
        </div>
      )
  }

}