import React from 'react';
import ReactDOM from 'react-dom';
import WeatherReducer from './WeatherReducer';

// Smoke test 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherReducer>{() => <div></div>}</WeatherReducer>, div);
});