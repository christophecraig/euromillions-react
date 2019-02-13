import React from 'react';
import { Result } from './Result/Result';
import './Results.css'

export class Results extends React.Component {
    constructor() {
        super();
        this.state = {
            results: [], 
            error: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/results/')
            .then(val => val.json())
            .then(json => {
                this.setState({
                    results: json
                })
            })
            .catch(err => { 
                this.setState({
                    error: 'Impossible de communiquer avec le serveur'
                })
            })
    }

    render() {
        // if (this.state.error) {
        //     return <div id="error-box">
        //     <div class="message"><h1 class="alert">Error!</h1><p>{this.state.error}</p></div>
        //     <button class="button-box"><h1 class="red">try again</h1></button>
        //   </div>
        // }
        // return ( <ul> {
        //         this.state.results.map(result => {
        //             return <li key={result.id}>
        //                 <Result resultset={result}/>
        //             </li>
        //         })
        //     } </ul>
        // );
        console.log('results', this.state.results);
        return (<div>{
            this.state.results.map(result => {
                return <Result key={result.id} resultset={result}/>
            })
        }</div>
        );
    }
}