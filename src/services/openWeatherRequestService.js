import axios from 'axios';
import moment from 'moment';

export default function(apiKey = '2cf1dc4180d34b998f4efbd8fad4a350', city = 'London', countryCode = 826) {
  const openWeatherRequest = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=metric`
  });

  const localWeatherRequest = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/londonWeather.json`
  })

  function mapForecast(list) {
    return list && list.reduce((weather, current) => {
      const dayOfYear = moment(current.dt_txt).format('YYYY-MM-DD');
      return {
        ...weather,
        [dayOfYear]: [
          ...weather[dayOfYear] || [],
          current
        ]
      };
    }, {});
  }

  const service = {
    async getLondonWeather() {
      const {data} = await openWeatherRequest.get();
      return {
        city: data.city,
        forecast: mapForecast(data.list),
        now: moment().format('YYYY-MM-DD')
      };
    },

    async getLocalLondonWeather() {
      const {data} = await localWeatherRequest.get();
      return {
        city: data.city,
        forecast: mapForecast(data.list),
        now: moment().format('YYYY-MM-DD')
      };
    }
  };

  return service;
}