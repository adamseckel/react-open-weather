import axios from 'axios';
import moment from 'moment';

export default function(apiKey = '2cf1dc4180d34b998f4efbd8fad4a350', city = 'London', countryCode = 826) {
  const openWeatherRequest = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=metric`
  });

  const localWeatherRequest = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/londonWeather.csv`
  });

  const csvCity = {
    name: 'London'
  };

  function mapForecast(list) {
    return list && list.reduce((weather, current) => {
      const dayOfYear = moment(current.date).format('YYYY-MM-DD');
      return {
        ...weather,
        [dayOfYear]: [
          ...weather[dayOfYear] || [],
          current
        ]
      };
    }, {});
  }

  const csvIndexKeyMap = [
    'date',
    'temperature',
    'weatherID'
  ];

  function convertCSVToObject(csv) {
    return csv.toString().split('\n').map((period) => {
      return period.split(',').reduce((o, dataPoint, index) => {
        o[csvIndexKeyMap[index]] = dataPoint;
        return o;
      }, {});
    });
  }

  function normalizeResponse(list) {
    return list.map((period) => {
      return {
        date: period.dt_txt,
        temperature: period.main.temp,
        weatherID: period.weather[0].id
      };
    });
  }

  const service = {
    async getLondonWeather() {
      const {data} = await openWeatherRequest.get();
      return {
        city: data.city,
        forecast: mapForecast(normalizeResponse(data.list)),
        now: moment().format('YYYY-MM-DD')
      };
    },

    async getLocalLondonWeather() {
      const {data} = await localWeatherRequest.get();
      const forecast = mapForecast(convertCSVToObject(data));
      const now = Object.keys(forecast)[0];

      return {
        city: csvCity,
        forecast,
        now
      };
    }
  };

  return service;
}