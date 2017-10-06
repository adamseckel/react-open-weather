import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

const config = {
  city: 'London',
  countryCode: 826,
  openWeatherApiKey: process.env.REACT_OPEN_WEATHER_API_KEY || '2cf1dc4180d34b998f4efbd8fad4a350'
}

const openWeatherRequest = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=${config.city},${config.countryCode}&appid=${config.openWeatherApiKey}&units=metric`
});

const csvRequest = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/londonWeather.csv`
});

ReactDOM.render(<App openWeatherRequest={openWeatherRequest} csvRequest={csvRequest}/>, document.getElementById('root'));
registerServiceWorker();
