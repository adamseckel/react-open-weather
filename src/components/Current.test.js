import React from 'react';
import ReactDOM from 'react-dom';
import Current from './Current';

// Smoke test 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Current />, div);
});