import React from 'react';
import './Result.css';

export class Result extends React.Component {
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

  render() {
      return (
        <div className='result'>
          <div className='description'>
              <p className='date'>
                  Tirage du { this.props.resultset.weekday.toLowerCase() } { this.props.resultset.date }
              </p>
          </div>
          <div className='numbers'>
              <div className='number'>{ this.props.resultset.b1 }</div>
              <div className='number'>{ this.props.resultset.b2 }</div>
              <div className='number'>{ this.props.resultset.b3 }</div>
              <div className='number'>{ this.props.resultset.b4 }</div>
              <div className='number'>{ this.props.resultset.b5 }</div>
          </div>
          <div className='stars'>
            <div className='star'>{ this.props.resultset.e1 }</div>
            <div className='star'>{ this.props.resultset.e2 }</div>
          </div>
          <div>Code MyMillion : { this.props.resultset.myMillion }</div>
        </div>
      )
  }

}