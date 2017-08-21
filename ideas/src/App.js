import React, { Component } from 'react';
import IdeasContainer from './components/idea/ideasContainer';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <div className = "App-header" >
              <h2>thing</h2>
            </div>

            <IdeasContainer></IdeasContainer>
          </div>
        );
    }
}

export default App;
