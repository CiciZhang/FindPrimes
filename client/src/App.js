import React, {Component} from 'react';
import './App.css';
import InputBoxDisplay from './InputBoxDisplay';

class App extends Component {

  render(){
    return (
      <div className="App">
        <header>
          <h1>Find Primes</h1>
        </header>
        <main>
          <InputBoxDisplay></InputBoxDisplay>
        </main>
      </div>
    )
  }
}

export default App;
