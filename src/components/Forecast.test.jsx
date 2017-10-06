import React from 'react';
import ReactDOM from 'react-dom';
import Forecast from './Forecast';

// Smoke test 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Forecast />, div);
});