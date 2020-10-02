import React, { Component } from 'react';
import axios from 'axios';

class InputBoxDisplay extends Component {
    constructor() {
        super()
        this.state = {
            primeOutput: [".", ".", "."],
            numInput: ""
        }
    }
    handleClick = (event) => {
        event.preventDefault()
        if (this.state.numInput < 2){
            return alert("Please enter a number greater or equal to 2")
        }
        axios({
            method: "GET",
            url: `http://localhost:5000/getPrime?numInput=${this.state.numInput}`,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            this.setState({
                primeOutput: res.data,
                numInput:""
            })
        }, err => {
            if (err.response === undefined){
                alert("Could not get a response from server")
            } else {
                alert(err.response.data)
            }
            
        })
    }

    handleChange = (event) => {
        this.setState({
            numInput: event.target.value
        })
    }
    
    render() {
        return (
            <div className="display">
            <form action="submit">
                <div className="numInput">
                    <label htmlFor="numInput">Please input your number </label>
                    <input type="number" name="numInput" id="numInput" placeholder="42" onChange={this.handleChange} value={this.state.numInput} />
                </div>
                <button onClick={this.handleClick}>Submit</button>
            </form >
                <div className="output">The primes are {this.state.primeOutput.map(num => `${num} `)} </div>      
        </div>
        )
    }

}

export default InputBoxDisplay;
