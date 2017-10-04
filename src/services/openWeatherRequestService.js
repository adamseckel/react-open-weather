import axios from 'axios';

export default function(apiKey = '2cf1dc4180d34b998f4efbd8fad4a350', city = 'London', countryCode = 826) {
  const openWeatherRequest = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`
  });

  const service = {
    async getLondonWeather() {
      const response = await openWeatherRequest.get();
      return response;
    }
  };

  return service;
}