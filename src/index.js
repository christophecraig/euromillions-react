import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }

//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={() => { this.props.onClick() }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {

//   renderSquare(i) {
//     return( 
//       <Square 
//       value={this.props.squares[i]}
//       onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//       }],
//       xIsNext: true,
//       stepNumber: 0,
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//       }]),
//       xIsNext: !this.state.xIsNext,
//       stepNumber: history.length,
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0,
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ?
//         'Go to move #' + move :
//         'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });

//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

class Result extends React.Component {
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
        console.log(this.props)
        return (
            <li>{this.props.resultset}</li>
        )
    }

}

class Results extends React.Component {
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
                    return <li>
                        <div className='description'>
                            <p className='date'>
                                Tirage du {result.weekday.toLowerCase()} {result.date}
                            </p>
                        </div>
                        <div className='numbers'>
                            <div className='number'>{result.b1}</div>
                            <div className='number'>{result.b2}</div>
                            <div className='number'>{result.b3}</div>
                            <div className='number'>{result.b4}</div>
                            <div className='number'>{result.b5}</div>
                        </div>
                        <div>Code MyMillion : {result.myMillion} </div>
                        </li>
                })
                } 
            </ul>
        );
    }
}
// ========================================

ReactDOM.render(
  // <Game />,
  <Results/>,
  document.getElementById('root')
);