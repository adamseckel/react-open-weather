const axios = require('axios');
const arrayToCsv = require('array-to-csv');
const fs = require('fs');

const apiKey = '2cf1dc4180d34b998f4efbd8fad4a350';
const city = 'London';
const countryCode = 826;

const openWeatherRequest = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=metric`
});

function generateCSVRow (period) {
  return [period.dt_txt, period.main.temp, period.weather[0].id];
}

function getLondonWeather() {
  return openWeatherRequest.get().then(({data}) => {
    return data.list.map((period) => generateCSVRow(period));
  });
}

return getLondonWeather().then((array) => {
  return fs.writeFile('./public/londonWeather.csv', arrayToCsv(array), 'utf8', function (err) {
    if (err) {
      console.log('Didnt Save CSV');
    } else{
      console.log('Saved CSV');
    }
  });
});

