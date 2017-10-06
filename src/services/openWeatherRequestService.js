import moment from 'moment';

export default function(openWeatherRequest, csvWeatherRequest) {
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
        temperature: period.main.temp.toString(),
        weatherID: period.weather[0].id.toString()
      };
    });
  }

  const self = {
    async getLondonWeather() {
      const {data} = await openWeatherRequest.get();
      const forecast = mapForecast(normalizeResponse(data.list));
      const now = Object.keys(forecast)[0];
      
      return {
        city: data.city,
        forecast,
        now
      };
    },

    async getLocalLondonWeather() {
      const {data} = await csvWeatherRequest.get();
      const forecast = mapForecast(convertCSVToObject(data));
      const now = Object.keys(forecast)[0];

      return {
        city: csvCity,
        forecast,
        now
      };
    }
  };

  return self;
}