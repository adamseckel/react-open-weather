import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App openWeatherApiKey={process.env.REACT_OPEN_WEATHER_API_KEY}/>, document.getElementById('root'));
registerServiceWorker();
