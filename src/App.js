import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'emotion/react';
import {OpenWeatherRequest} from './services';

const Emotion = styled.div`
  width: 20px; 
  height: 20px;
  background-color: blue;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: undefined
    };
  }

  componentDidMount = async () => {
    const openWeatherRequest = OpenWeatherRequest();
    const weather = await openWeatherRequest.getLondonWeather();
    console.log(weather)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
